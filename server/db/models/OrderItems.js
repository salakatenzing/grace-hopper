const Sequelize = require('sequelize');
const db = require('../db');

const Order_Items = db.define('Order_Items', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
module.exports = Order_Items;
