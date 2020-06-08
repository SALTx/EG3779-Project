let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema, itemModel;
let storeSchema, storeModel;
//storeschem and model might not be necessary -s

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
                storeSchema = Schema({
                    name: String,
                    description: String,
                })
                itemSchema = Schema({
                    name: String,
                    description: String,
                    price: Number,
                    barcode: String,
                    quantity: Number,
                });
                let connection = mongoose.connection;

                itemModel = connection.model('Item', itemSchema);
                storeModel = connection.model('Store', storeSchema);
            }
            else console.log('Error connecting to MongoDB ', e);
        });
    }
}