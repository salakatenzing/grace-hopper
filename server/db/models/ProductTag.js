const Sequelize = require('sequelize');
const db = require('../db');

const Product_Tag = db.define('product_tag', {
  main_type: {
    type: Sequelize.ENUM(
      'Produce',
      'Meat',
      'Dairy & Eggs',
      'Beverages',
      'Dried Goods'
    ),
    allowNull: false,
  },
  sub_type: {
    type: Sequelize.ENUM(
      'Fruit',
      'Vegetable',
      'Seafood',
      'Poultry',
      'Pork',
      'Beef',
      'Milk',
      'Eggs',
      'Water',
      'Soda',
      'Coffee',
      'Tea',
      'Juice',
      'Other'
    ),
    allowNull: false,
  },
});

module.exports = Product_Tag;
