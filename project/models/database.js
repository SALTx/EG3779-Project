const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user models
let CustomerModel = require('./users/customer');
let ShopOwnerModel = require('./users/shopowner');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

module.exports = {
    connect: function () {
        mongoose.connect('mongodb://localhost/StoreDB', function (e) {
            if (!e) {
                console.log('Connected to StoreDB');
                let connection = mongoose.connection;
            }
            else console.log('Error connecting to MongoDB ', e);
        });
    },
}