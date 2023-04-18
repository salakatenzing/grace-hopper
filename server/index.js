const sequelize = require('sequelize');
const { db } = require('./db');
const PORT = process.env.PORT || 8080;
const app = require('./app');
const seed = require('../script/seed');
// const Customer = sequelize.models('Customer');
// const users = sequelize.models('users');
// const Users = sequelize.models('Users');

const init = async () => {
    try {
        if (process.env.SEED === 'true') {
            await seed();
        } else {
            // await db.queryInterface.dropForeignKey('Order', 'userId');
            // await db.queryInterface.dropTable('Order');
            // await db.queryInterface.dropIndex('Product', 'product_user_index');
            // await db.queryInterface.dropTable('Product');
            // await db.queryInterface.dropTable('Users');

            // // drop existing 'Customers' table
            // await db.queryInterface.dropTable('Customers');
            await db.sync();
        }
        // start listening (and create a 'server' object representing our server)
        app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
    } catch (ex) {
        console.log(ex);
    }
};

init();
