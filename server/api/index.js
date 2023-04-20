const router = require('express').Router();
module.exports = router;

router.use('/users', require('./user/users'));
router.use('/products', require('./products/products'));
router.use('/productTags', require('./products/productTag'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
