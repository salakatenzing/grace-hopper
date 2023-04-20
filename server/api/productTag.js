const router = require('express').Router();
const {
  models: { Product, ProductTag },
} = require('../db');
// const Product_Tag = require('../db/models/ProductTag');
module.exports = router;

router.get('/mainType/:mainType', async (req, res, next) => {
  try {
    const mainType = req.params.mainType;
    try {
      const products = await ProductTag.findAll({
        where: { main_type: mainType },
        include: [Product],
      });
      res.status(200).send(products);
    } catch (error) {
      res.sendStatus(403).send('Product Type does not exist!');
      next(error);
    }
  } catch (error) {}
});

router.get('/subType/:subType', async (req, res, next) => {
  try {
    const subType = req.params.subType;
    try {
      const products = await ProductTag.findAll({
        where: { sub_type: subType },
        include: [Product],
      });
      res.status(200).send(products);
    } catch (error) {
      res.sendStatus(403).send('Product Type does not exist!');
      next(error);
    }
  } catch (error) {}
});
