const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var userSchema = {};
var userModel;

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
        mongoose.connect('mongodb://localhost/ShopifyDB', function (e) {
            if (!e) {
                console.log('Connected to ShopifyDB');

                //initialize values
                userSchema = schema({
                    username: String,
                    password: String,
                    Email: String,
                    Address: String
                });
                let connection = mongoose.connection;
                userModel = connection.model("Users", userSchema);
            } else {
                console.log("Error connecting to Mongo DB");
            }

        });
    },
}