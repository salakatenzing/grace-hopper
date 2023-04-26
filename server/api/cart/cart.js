/* eslint-disable no-undef */
const router = require('express').Router();
const {
  models: { Order, User, Product, OrderItems },
} = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;
    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
      include: [{ model: OrderItems, include: [Product] }],
    });

    res.status(200).send(openOrder);
  } catch (error) {
    console.log('oh oh!', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[1];

    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);

    const userId = extractedToken.id;
    const { quantity, productId } = req.body;

    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
    });

    if (openOrder) {
      return res
        .status(400)
        .json({ message: 'You already have an open order.' });
    }

    const newOrder = await Order.create({
      userId: userId,
      completion: false,
    });
    const orderObject = newOrder;

    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ message: `Product does not exist!` });
      return;
    }

    const orderItem = await OrderItems.create({
      quantity,
      orderId: orderObject.id,
      productId,
    });

    res.status(201).json({ orderItem });
  } catch (err) {
    next(err);
  }
});

router.delete('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await OrderItems.destroy({ where: { orderId } });
    await Order.destroy({ where: { id: orderId } });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.post('/add-to-order', async (req, res, next) => {
  try {
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[0];

    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;
    const { quantity, productId } = req.body;

    let order = await Order.findOne({
      where: { userId: userId, completion: false },
    });
    if (!order) {
      order = await Order.create({
        userId: userId,
        completion: false,
      });
    }
    const orderItem = await OrderItems.create({
      quantity,
      orderId: order.id,
      productId,
    });

    res.status(201).json({ orderItem });
  } catch (err) {
    next(err);
  }
});
router.put('/', async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;

    const { quantity, productId } = req.body;

    const openOrder = await Order.findOrCreate({
      where: { userId: userId, completion: false },
      defaults: {
        completion: false,
      },
    });

    const orderItem = await OrderItems.findOrCreate({
      where: { orderId: openOrder[0].dataValues.id, productId: productId },
      defaults: {
        quantity: 0,
      },
    });
    const updatedItem = await orderItem[0].update({
      quantity: orderItem[0].quantity + parseInt(quantity),
    });
    if (updatedItem.dataValues.quantity === 0) {
      OrderItems.destroy({ where: { quantity: 0 } });
    }
    const findOrder = await Order.findByPk(openOrder[0].dataValues.id, {
      include: [{ model: OrderItems, include: [Product] }],
    });
    res.status(200).json(findOrder);
  } catch (err) {
    next(err);
  }
});

router.put('/checkout', async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;

    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
    });

    await openOrder.update(
      { completion: true },
      { where: { userId: userId, completion: false } }
    );

    res.status(200).json({ message: 'Order is checked out, Thank You!' });
  } catch (err) {
    next(err);
  }
});
