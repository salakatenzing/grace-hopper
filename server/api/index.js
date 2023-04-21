/* eslint-disable no-undef */
const router = require('express').Router();
module.exports = router;

router.use('/users', require('./user/users'));
router.use('/products', require('./products/products'));
router.use('/product-tags', require('./products/productTag'));
router.use('/cart', require('./cart/cart'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});
