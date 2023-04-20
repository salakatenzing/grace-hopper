const router = require('express').Router();
const {
  models: { Product, ProductTag },
} = require('../../db');
// const Product_Tag = require('../db/models/ProductTag');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'price',
        'stock_qty',
        'per_unit',
        'image',
      ],
      include: [{ model: ProductTag }],
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findOne({
      where: { id: productId },
      include: [ProductTag],
    });
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const { name, description, price, stock_qty, per_unit, main_type, sub_type } =
    req.body;
  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      price: price,
      stock_qty: stock_qty,
      per_unit: per_unit,
    });

    const newTag = await ProductTag.create({ main_type, sub_type });
    await newProduct.addProduct_tag(newTag);
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

router.delete('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).send("Product doesn't exist.");
    }
    await product.destroy();
    res.status(204).send('Product deleted!');
  } catch (error) {
    next(error);
  }
});
