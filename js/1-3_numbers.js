let widht = "50.5px";
const result = Number.parseInt(widht);
console.log(result);
// запишет в result челое число (будет идти до первого не числа, и только целое) т.е. 50

let height = "50.5px";
height = Number.parseFloat(height);
console.log(height);
// запишет в height челое число (будет идти до первого не числа) т.е. 50.5

let salary = 2150.234;
salary = Number(salary.toFixed(2));
console.log(salary);
// покажет только 2 цифры после запятой toFixed(2)

const mass = 3;
const deg = 5;
const degree = Math.pow(3, 4);
const degree_1 = Math.pow(mass, deg);
console.log(degree);
console.log(3 ** 4);
// возведение 3 в степеень 4 (в обоих вариантах)
console.log(degree_1);
console.log(mass ** deg);
// возведение 3 в степеень 5 (в обоих вариантах)

// Ввести с клав. число и его степень и отобразить на экране
const num = Number(prompt("Введите число: "));
const num2 = Number(prompt("Введите степень: "));
console.log("Полученное значение :", num ** num2);

// округлит число
console.log(Math.round(2.234));
// рандомное число в заданном диапазоне от 10ти до 50ти
// формула = Math.random() * (max - min) + min
const random = Math.round(Math.random() * (50 - 10) + 10);
console.log(random);
