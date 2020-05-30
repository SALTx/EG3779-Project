let storeModule = require('./../OnlineStore');
let Store = storeModule.Store;
let Item = storeModule.Item;

//TODO get this from the database
let store = new Store('General Store', 'We sell stuff');
store.addItem(new Item('Grapes', 2.00), 1);
store.addItem(new Item('Herbal Tea', 4.20), 5);

let storeController = {
    getInfo: function () {
        return store;
    },
    getInventory: function () {
        return store.inventory;
    },
    addItem: function (item, quantity = 1) {
        store.addItem(item, quantity);
    },
    removeItem: function (itemName) {
        store.removeItem(itemName)
    },
    updateInfo: function (newInfo) {
        store.name = newInfo.name;
        store.description = newInfo.description;
    }
}

module.exports = storeController;