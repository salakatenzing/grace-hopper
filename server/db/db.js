const Sequelize = require('sequelize');
const pkg = require('../../package.json');

// const databaseName =
//   pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const config = {
  port: '5432',
  dialect: 'postgres',
  dialectOptions: {
    connectionString: process.env.DATABASE_URL,
  },
};

// if (process.env.LOGGING === 'true') {
//   delete config.logging;
// }

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
// if (process.env.DATABASE_URL) {
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   };
// }

const db = new Sequelize(config);
module.exports = db;
