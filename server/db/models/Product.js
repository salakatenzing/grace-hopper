const Sequelize = require('sequelize');
const db = require('../db');

const Products = db.define('Products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    stock_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    per_unit: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Products;
