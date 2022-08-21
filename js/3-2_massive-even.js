//! Напиши скрипт который подсчитывает сумму всех чёрных чисел
const numbers = [1, 5, 8, 9, 12, 4, 15, 23, 34, 68, 11];
let totalEven = 0;
for (const number of numbers) {
    if (number % 2 !== 0) {
        continue;
    }
    totalEven += number;
}
console.log(totalEven);