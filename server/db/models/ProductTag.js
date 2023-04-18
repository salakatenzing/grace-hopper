const Sequelize = require('sequelize');
const db = require('../db');

const Product_Tag = db.define('Product_Tag', {
    main_type: {
        type: Sequelize.ENUM('type1', 'type2', 'type3'),
        allowNull: false,
    },
    sub_type: {
        type: Sequelize.ENUM('subtype1', 'subtype2', 'subtype3'),
        allowNull: false,
    },
});

module.exports = Product_Tag;
