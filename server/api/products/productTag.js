const router = require('express').Router();
const {
  models: { Product, ProductTag },
} = require('../../db');

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
    const products = await ProductTag.findAll({
      where: { sub_type: subtype },
      include: [Product],
    });
    res.status(200).send(products);
  } catch (error) {
    res.sendStatus(403).send('Product Type does not exist!');
    next(error);
  }
});

// sends index.html
router.use('*', (req, res) => {
  // res.status(404).send('Not a valid url');
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});
