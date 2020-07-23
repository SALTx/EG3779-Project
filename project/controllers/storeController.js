class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.description = "";
        this.quantity = 1;
    }
    applyDiscount(discount) {
        if (discount > 100 || discount < 0) {
            console.log(`Invalid discount for ${this.name}`);
            return 0;
        }
        this.price -= (discount / 100) * this.price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
    viewMoreInformation() {
        return `If you would like to learn more about ${this.name}, visit goo.gl/search/${this.name}`;
    }
}

class Store {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.balance = 0;
        this.inventory = [];
    }
    addItem(item, quantity = 1) {
        //check to see if the item already exists
        for (let i = 0; i < this.inventory; i++) {
            if (this.inventory.name == item.name) {
                this.inventory.quantity += quantity;
                return 1;
            }
        }
        //if not exist add
        this.inventory.push(new Item(item.name, item.price));
    }
    removeItem(itemName, quantity) {
        //checks if item exists if yes remove quantity and credit price to balance

        //if no throw error
    }

}

