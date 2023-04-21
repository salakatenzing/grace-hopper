const Sequelize = require('sequelize');
const db = require('../db');
const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  completion: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Order;
