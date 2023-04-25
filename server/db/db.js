const Sequelize = require('sequelize');
require('dotenv').config();

const config = {
  port: '5432',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const db = new Sequelize(process.env.DATABASE_URL, config);
module.exports = db;
