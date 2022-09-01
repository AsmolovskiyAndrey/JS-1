//!========================================Корзина товаров=================================================

const cart = {
    items: [],
    getItems() { return this.items},
    add(product) { this.items.push(product)},
    remove(productNameDelete) {
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i]
            if (productNameDelete === item.name) {
                console.log("нашли продукт который нужно удалить", item.name);
                this.items.splice(i, 1);
            }
        }
    },
    clear() { },
    countTatolPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

cart.add({ name: 'apple', price: 50});
cart.add({ name: 'limon', price: 60});
cart.add({ name: 'watermelon', price: 70});
cart.add({ name: 'melon', price: 100 });

console.log(cart.getItems());

cart.remove('watermelon');
console.log(cart.getItems());