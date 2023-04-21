const router = require('express').Router();
const {
  models: { Product, ProductTag },
} = require('../../db');
// const Product_Tag = require('../db/models/ProductTag');
module.exports = router;

router.get('/maintype/:maintype', async (req, res, next) => {
  try {
    console.log('im in the backend');
    const maintype = req.params.maintype;
    console.log('Here is my mainType', maintype);
    const products = await ProductTag.findAll({
      where: { main_type: maintype },
      include: [Product],
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(403).send('Product Type does not exist!');
    next(error);
  }
});

router.get('/subtype/:subtype', async (req, res, next) => {
  try {
    const subtype = req.params.subtype;
    //req.body =
    try {
      const products = await ProductTag.findAll({
        where: { sub_type: subtype },
        include: [Product],
      });
      res.status(200).send(products);
    } catch (error) {
      res.sendStatus(403).send('Product Type does not exist!');
      next(error);
    }
  } catch (error) {}
});
