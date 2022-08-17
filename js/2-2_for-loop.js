for (let i = 0; i < 5; i += 1){
    console.log(i);
}

// !Напиши скрипт который подсчитывает общую сумму всех зарплат работников.
// * Кол - во работников хранится в переменной employees.
// * Зарплата это случайное число от 500 до 5000.
// * Записать сумму в переменную totalSalary и вывести в консоль

const employees = 10;
let totalSalary = 0;
for (let i = 1; i <= employees; i += 1){
    let salary = Math.round(Math.random() * (5000 - 500) + 500);
    totalSalary += salary;
}
console.log(totalSalary);

// !Напиши скрипт который подсчитывает общую сумму всех чётных чисел
// * которые входят в диапазон чисел от мин до мах

const min = 5;
const max = 14;
let total = 0;
for (let i = min; i <= max; i += 1){
    // if (i % 2 === 0) {
    //     total += i;
    // }
    // ! Логика от обратного (continue переведёт на следующую итерацию)
    if (i % 2 !== 0) {
        continue;
    }
    total += i;
}
console.log(total);
