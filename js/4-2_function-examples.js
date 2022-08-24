//! Напиши функцию которая принимает массив цен и возвращает их сумму
function calculateTotalPrice(price) {
    let total = 0;
    for (const i of price) {
        total += i ;
    }
    return total;
}
console.log(calculateTotalPrice([1, 5, 7]));


//!  Напиши функцию которая переберёт и залогирует массив
const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
}
logItems(["Mango", "Kiwi", "Poly", "Ajax"])


//! Напиши функцию поиска логина которая принимает все логины и один логин верный:
//- Если логина нет - вывести сообщение "Пользователь (логин) не найден"
//- Если логин найден- вывести сообщение "Пользователь (логин) найден"
const logins = ["m4ngoDoge", "asd23", "poly1scute", "aj4xth3m4n"];

const findLogin = function (allLogins, loginTrue) {
    return allLogins.includes(loginTrue)
        ? `Пользователь ${loginTrue} найден`
        : `Пользователь ${loginTrue} не найден`
}
console.log(findLogin(logins, "asd23"));

//! Напиши функцию поиска самого маленького числа в массиве
const smallest = function (massive) {
    let small = massive[0]
    for (const number of massive) {
        if (number < small) {
            small = number;
        }
    }
    return small;
}

//! Напиши функцию инверсии символа в массиве
function inverted(string) {
    let invertedString = '';
    for (const letter of string) {
        invertedString += letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
    }
    return invertedString;
}
console.log(inverted("asdfrEWQ"));


//! Напиши функцию которая сделает slug в строке (всё в маленьком регистре и через тире)
const slug = function (string){
    return string.toLowerCase().split(' ').join('-');
}
console.log(slug("We are ready for You"));

//! Напиши функцию которая сделает массив из любых значений которые пришли
const fn = function (...asdf) { // ? ...имя преобразует данные в массив
    console.log(asdf); // [1, 2, 3, 4, 'qwe', Array(3)]
}
fn(1, 2, 3, 4, 'qwe', [45, 67, 88])

const fn1 = function (a, b, ...asdf) { // ? ...имя преобразует данные в массив первые 2-е запишет в переменные
    console.log(a, b); // 1 2
    console.log(asdf); // [3, 4, 'qwe', Array(3)]
}
fn1(1, 2, 3, 4, 'qwe', [45, 67, 88])

// ! Подсчёт чисел в массиве если они числа
function sum(...args) {
    let summa = 0;
    for (const number of args) {
        if (number === Number(number)) {
            summa += number;
        }
    }
    return summa;
}
console.log(sum(1, 2, 3, 4, 'qwe'));

//! Напиши функцию которая сделает новый массив из чисел которые совпадают в массиве
function filterNumbers(array, ...args) {
    let newMassive = [];
    for (const arg of args) {
        if (array.includes(arg)) {
            newMassive.push(arg);
        }
    }
    return newMassive;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 34, 12, 5, 26, 2));


//! Чтобы реализавать планирование существует два метода:
// ? setTimeout позволяет вызвать функцию один раз через определённый интервал времени
// ? setInterval позволяет вызвать функцию регулярно повторяя вызов через определённый интервал времени
// * setTimeout(функция или код, задержкаб параметр, ...параметр)
// * setInterval(функция или код, задержкаб параметр, ...параметр)

function TimeName(name, surname) {
    console.log(`Привет ${surname} ${name}`);
}

setTimeout(TimeName, 3000, "Andrii", "Asmolovskyi"); // через 3 секунды будет Привет Asmolovskyi Andrii



// function TimeInterval(name, surname) {
//     for (let i = 0; i < 11; i++) {
//         console.log(`Привет ${surname} ${name}`);  
//     }
//     return
// }

// setInterval(TimeInterval, 1000, "Andrii", "Asmolovskyi"); // каждую секунду выведет 10 раз
