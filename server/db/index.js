//this is the access point for all things database related!

const db = require('./db');

const Customer = require('./models/Customer');
const Order = require('./models/Order');
const OrderItems = require('./models/OrderItems');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');

//associations could go here!
Customer.hasMany(Order);
Order.belongsTo(Customer);
Order.hasMany(OrderItems);
OrderItems.belongsTo(Order);
Product.hasMany(OrderItems);
OrderItems.belongsTo(Product);
Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);

module.exports = {
    db,
    models: {
        Customer,
    },
};
