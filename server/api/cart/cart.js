/* eslint-disable no-undef */
const router = require('express').Router();
const {
  models: { Order, User, Product, OrderItems },
} = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = router;

// // const { Op } = require('sequelize');

// middleware to authenticate user via JWT token

//talk with team, the following is a idea to implement a middleware inside routes
const authenticateUser = async (req, res, next) => {
  try {
    //the following will have a http authentication called Bearer as first element in the array
    //the second element will be the JWT token.
    const bearAndToken = req.headers.authorization.split(' ');
    //this grabs the JWT token
    const token = bearAndToken[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;
    const user = await User.findByPk(userId);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('User not authenticated');
  }
};

router.get('/', async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    //verify this JWT
    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;
    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
      include: [OrderItems],
    });
    const orderItems = await OrderItems.findAll({
      where: { orderId: 1 },
      include: [Product],
    });
    console.log('HERE! ', JSON.stringify(orderItems));
    res.status(200).send(openOrder);
  } catch (error) {
    console.log('oh oh!', error);
    next(error);
  }
});

//create a new order with
router.post('/', async (req, res, next) => {
  try {
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[1];
    //verify this JWT
    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    //   console.log(extractedToken.id);
    const userId = extractedToken.id;
    const { quantity, productId } = req.body;

    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
    });
    //this con cuts off the function if a open order exists
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

//delete order
router.delete('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ where: { id: orderId } });
    //error handler if order doesn't exist
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // in order to delete the Order, you need to delete the foreign keys associated first
    //therefore the OrderItems THEN the Order
    await OrderItems.destroy({ where: { orderId } });
    await Order.destroy({ where: { id: orderId } });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

//adds OrderItems to a order
router.post('/add-to-order', async (req, res, next) => {
  try {
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[0];
    //verify this JWT
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
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[1];
    //verify this JWT
    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;

    const { quantity, productId } = req.body;
    //the following grabs the order Object
    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
    });
    //error handler if order doesn't exist
    if (!openOrder) {
      return res.status(400).json({ message: 'No open order exists.' });
    }

    const orderItem = await OrderItems.findOne({
      where: { orderId: openOrder.id, productId: productId },
    });

    if (!orderItem) {
      return res.status(404).json({ message: 'Order item not found.' });
    }

    await orderItem.update({ quantity: quantity });

    res.status(200).json({ message: 'Order updated successfully.' });
  } catch (err) {
    next(err);
  }
});

//checkout the order and finish
router.put('/checkout', async (req, res, next) => {
  try {
    const tokenInHeader = req.headers.authorization.split(' ');
    const token = tokenInHeader[1];
    const extractedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = extractedToken.id;

    const openOrder = await Order.findOne({
      where: { userId: userId, completion: false },
    });

    if (!openOrder) {
      return res.status(404).json({ message: 'No open orders exists.' });
    }

    // Set completion to true and update the order
    await openOrder.update(
      { completion: true },
      { where: { userId: userId, completion: false } }
    );

    res.status(200).json({ message: 'Order is checked out, Thank You!' });
  } catch (err) {
    next(err);
  }
});
