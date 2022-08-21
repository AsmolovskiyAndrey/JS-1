//! Посчитать общую сумму в корзине
const cart = [54, 28, 36, 77, 234, 12, 5, 79];
let total = 0;
for (let pm of cart) {
    total += pm;
}
console.log(total);