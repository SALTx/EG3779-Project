//Generates barcodes for the items
//Collisions are extremely unlikely and new barcodes are generated each time
//This is intentional and will be changed in production builds
function generateBarcode() {
  let result = "";
  let chars = "0123456789ABCDEF";
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

class Item {
  //This class deals with individual items
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.description = "";
    this.quantity = 1;
    this.barcode = generateBarcode();
  }
  //Applies a discount in % to item
  applyDiscount(discount) {
    if (discount > 100 || discount < 0) {
      console.error("Invalid discount for " + this.name);
    }
    this.price -= (discount / 100) * this.price;
  }
  //Changes the price of the item
  changePrice(newPrice) {
    this.price = newPrice.toFixed(2);
  }
  //Generates a google search link based on the name of the item
  viewMoreInformation() {
    return `If you would like to learn more about ${this.name}, visit goo.gl/search/${this.name}`;
  }
}

//Handles the entire online store
class Store {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    //Stores start with a balance of 0 but it can be modified
    this.balance = 0;
    //Stores also start with an empty inventory and needs to be populated before you can start selling
    this.inventory = [];
  }
  //Add item to stores inventory or updates quantity if item already exists
  addItem(item, quantity = 1) {
    let inInventory = false;
    let index = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name === item.name) {
        inInventory = true;
        index = i;
      }
    }

    if (inInventory) {
      this.inventory[index].quantity += quantity;
    } else {
      this.inventory.push(item);
    }
  }
  //Removes item from inventory and increases the cash balance
  sellItem(itemName, quantity = 1) {
    //makes the string lowercase so its easier to match
    itemName = itemName.toLowerCase();

    //checks to see if the item is in the inventory
    let inInventory = false;
    let index = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name.toLowerCase() === itemName) {
        inInventory = true;
        index = i;
      }
    }

    if (inInventory && this.inventory[index].quantity >= quantity) {
      this.inventory[index].quantity -= quantity;
      this.balance += quantity * this.inventory[index].price;
      console.log(`Item ${itemName} sold successfully`);
    } else {
      console.error(
        `There isnt enough stock of ${itemName} please check again later`
      );
    }
  }
  removeItem(itemName) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name == itemName) {
        this.inventory.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  //Neatly displays inventory
  displayInventory() {
    //Name Price Quantity
    let outputString = "";
    outputString += "Name\tQuantity\tPrice\n";
    for (let i = 0; i < this.inventory.length; i++) {
      outputString += `${this.inventory[i].name}\t${
        this.inventory[i].quantity
        }\t$${this.inventory[i].price.toFixed(2)}\n`;
    }
    return outputString;
  }
  //Displays information about the store including contact information
  displayInformation() {
    let outputString = "";
    return outputString;
    //TODO finish
  }
  //Exports the store as a json object
  exportAsJson() {
    return this;
  }
}

//Displays welcome message when you import
function __init__() {
  console.log("Welcome to OnlineStore.js");
  console.log("Made with ♥ by saahil");
}
__init__();


// export default store;
module.exports = { Store, Item };