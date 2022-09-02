//!========================================Корзина товаров=================================================

const cart = {
    items: [],
    getItems() { return this.items},
    add(product) {
            for (const item of this.items) {
                if (product.name === item.name) { // если продукт есть то изменим его количество и выйдем из функции чтобы он дваджы не добавился
                    item.quantity += 1;
                    return
                }
            }
        const newProduct = {...product, quantity: 1,}
        this.items.push(newProduct);
    },
    remove(productNameDelete) {
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i]
            if (productNameDelete === item.name) {
                // console.log("нашли продукт который нужно удалить", item.name);
                this.items.splice(i, 1);
            }
        }
    },
    clear() { this.items = [] },
    countTotalPrice() {
        let total = 0;
        for (const { price , quantity} of this.items) { // забрал только значания price
            total += price * quantity;
        }
        console.log(total);
        return total;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (productName === item.name) { // если продукт есть то изменим его количество
                item.quantity += 1;
                return
            }
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (productName === item.name) { // если продукт есть то изменим его количество
                item.quantity -= 1;
                return
            }
        }
    },
};

cart.add({ name: 'apple', price: 50});
cart.add({ name: 'limon', price: 60});
cart.add({ name: 'watermelon', price: 70});
cart.add({ name: 'melon', price: 100 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'limon', price: 60});

console.table(cart.getItems());

// cart.remove('watermelon');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

cart.countTotalPrice();

cart.increaseQuantity('apple');
cart.decreaseQuantity('limon');

console.table(cart.getItems());



//* Задача 35 index of===========================================

// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
    // const bookIndex = this.books.indexOf(bookName);
    // this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]