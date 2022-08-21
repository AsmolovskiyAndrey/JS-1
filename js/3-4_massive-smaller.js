//! Напиши скрипт нахождения самого маленького числа

const numbers = [51, 18, 13, 24, 7, 85, 19]
let small = numbers[0];
for (let number of numbers) {
    if (number < small){
        small = number;
    }
}
console.log(small);

console.log(numbers.min());
