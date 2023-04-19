const Sequelize = require('sequelize');
const db = require('../db');

const Order_Items = db.define('order_items', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
module.exports = Order_Items;
