const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
const Product_Tag = require('../db/models/ProductTag');
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
      include: [{ model: Product_Tag }],
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});
