const mongoose = require('mongoose');
const extendedSchema = require('mongoose-extend-schema');

let User = require('./user');

const ShopOwnerSchema = extendedSchema(User, {});
const ShopOwner = mongoose.model('ShopOwner', ShopOwnerSchema);

module.exports = ShopOwner;