const Sequelize = require('sequelize');
const db = require('../db');
const Order = db.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Order;
