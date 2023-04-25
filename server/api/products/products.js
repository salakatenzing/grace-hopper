const router = require('express').Router();
const {
  models: { Product, ProductTag },
} = require('../../db');
// const Product_Tag = require('../db/models/ProductTag');
module.exports = router;
//route is /api/products for the following routes
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

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock_qty: req.body.stock_qty,
      per_unit: req.body.per_unit,
    });

    const newTag = await ProductTag.create({
      main_type: req.body.type,
      sub_type: req.body.subType,
    });
    await newProduct.addProduct_tag(newTag);
    const productWithTag = await Product.findOne({
      where: { id: newProduct.id },
      include: [ProductTag],
    });
    res.send(productWithTag);
  } catch (error) {
    console.log(error);
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
