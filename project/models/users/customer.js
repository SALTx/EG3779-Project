const mongoose = require('mongoose');
const extendedSchema = require('mongoose-extend-schema');

let User = require('./user');

const CustomerSchema = extendedSchema(User, {});
const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;