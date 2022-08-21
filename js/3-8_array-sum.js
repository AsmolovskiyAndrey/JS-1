//! Сумма элементов 2-х масивов
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum = 0;

// for (const number of array1) {
//     sum += number
// }
// for (const number of array2) {
//     sum += number
// console.log(sum);
// }
//?, Или так проще соединим два массива
const all = array1.concat(array2);
for (const number of all) {
    sum += number
}
console.log(sum);