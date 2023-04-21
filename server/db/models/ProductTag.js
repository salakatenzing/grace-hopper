const Sequelize = require('sequelize');
const db = require('../db');

const Product_Tag = db.define('product_tag', {
  main_type: {
    type: Sequelize.ENUM(
      'produce',
      'meat',
      'dairy & eggs',
      'beverages',
      'dried goods'
    ),
    allowNull: false,
  },
  sub_type: {
    type: Sequelize.ENUM(
      'fruit',
      'vegetable',
      'seafood',
      'poultry',
      'pork',
      'beef',
      'milk',
      'eggs',
      'water',
      'soda',
      'coffee',
      'tea',
      'juice',
      'cheese',
      'yogurt',
      'butter',
      'grains',
      'canned goods',
      'pasta',
      'other'
    ),
    allowNull: false,
  },
});

module.exports = Product_Tag;
