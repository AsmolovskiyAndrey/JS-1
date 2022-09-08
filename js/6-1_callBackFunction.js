//!===================== CallBack функции ==================================
// //* Это отложенные функции который передаются как аргумент

// const fnA = function (num, callBackFunc) {
//     console.log(num);
//     callBackFunc(123);
// }

// function fnB(number) {
//     console.log("Лог вызова fnB и передаём число", number);
// }

// fnA(12, fnB); //todo fnB - это callBack функция которая вызовается в fnA //12 Лог вызова fnB и передаём число 123

// //* Ещё пример CallBack функции в 1-м случае сложим, во 2-м вычтем значения
// function doMath(a, b, callBack) {
//     const result = callBack(a, b);
//     console.log(result);
// }

// //? заменим то что ниже на удобную запись
// // function add(x, y) {
// //     return x + y;
// // }
// // function sub(x, y) {
// //     return x - y;
// // }
// // doMath(5, 3, add); // 8
// // doMath(5, 3, sub); // 2

// //? На  Такую...
// doMath(5, 3, function (x, y) { return x + y; }); // 8

// doMath(5, 3, function (x, y) { return x - y; }); // 2


//!==================================== callback в примерах и задачах ========================================
// const buttonRef = document.querySelector('.ourButton');
// //* связали buttonRef с классом ourButton (наша кнопка)

// // const handleBtnClick = function () {
// //     console.log('Клик по кнопке' , Date.now());
// // }
// // //* функция пишет 'Клик по кнопке' и дату

// // buttonRef.addEventListener('click', handleBtnClick); // Клик по кнопке 1662317140151
// // //* при действии 'click' по нашей кнопке будет вызов функции handleBtnClick

// //? или так через inline вместо строк 41-47

// buttonRef.addEventListener('click', function () {
//     console.log('Клик по кнопке' , Date.now());
// });


//!==================================== геопозиция отложенный вызов ======================================

// const onGetPositionSuccess = function (position) {
//     console.log('Вызвана функция onGetPositionSuccess c геоданными', position);
// }

// const onGetPositionError = function (error) {
//     console.log('Вызвана функция onGetPositionError с отказом', error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// ); //* вызов функции в зивасимости от выбора если согласен вызов onGetPositionSuccess, если нет вызов onGetPositionError

// //!====================================== интервалы =====================================================
// function myFunc() {
//     console.log("Эта функция сработает спустя 2 секунды");
// }

// console.log('Вызов перед началом callback');
// setTimeout(myFunc,2000) // вызов произойдёт через 2секунды
// console.log('Вызов после началом callback');


//!====================================== фильтр для массива =============================================

// function filter(array, test) { //* функция принимает массив и функцию-условие
//     const filteredArray = [];

//     for (const iter of array) {
//         const passed = test(iter); //* если функция-условие true значит и в passed запишет true
//         if (passed) { //* если в passed true то добавим в массив число
//             filteredArray.push(iter);
//         }
//     }
//     return filteredArray;
// };

// function cb1(value) {
//     return value >= 3;
// };

// function cb2(value) {
//     return value <= 5;
// };

// const res1 = filter([1, 2, 3, 4, 5, 6, 7, 8], cb1);
// console.log(res1);

// const res2 = filter([1, 2, 3, 4, 5, 6], cb2);
// console.log(res2);


// //? Вернём фрукты у которых количество больше чем 150

// const fruits = [
//     {name: 'apples', quantity: 200, istFresh: true},
//     {name: 'grapes', quantity: 150, istFresh: false},
//     {name: 'bananas', quantity: 100, istFresh: true},
// ];

// function cb3(value) {
//     return value.quantity >= 150;
// }

// const res3 = filter(fruits, cb3);
// console.log(res3);


//!======================================= Замыкания ====================================================


// function fnA(parametr) {
//     const innerVariable = 'значание внутренней переменной innerVariable';

//     function innerFunction() {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов функции innerFunction');
//     }
//     return innerFunction; //* вернём функцию
// }

// const variable = fnA(500);
// variable();
// // 500
// // значание внутренней переменной innerVariable
// // Это вызов функции innerFunction

//?==== поварёнок ==========

// function makeSheff(name) {
//     function makeDish(dish) {
//         console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish;
// };

// const andr = makeSheff('Andrii');
// andr('котлеты'); // Andrii готовит котлеты
// andr('пирожок'); // Andrii готовит пирожок

// const kris = makeSheff('Khrystyna');
// kris('чай'); // Krystyna готовит чай
// kris('кофе'); // Krystyna готовит кофе

//?================= Округлятор ===================

// const floatPoint = 3.456789;
// const someInt = Math.round(floatPoint); //* округлим до целого числа
// const withDecimals = Number(floatPoint.toFixed(2)); //* округлим до 2-х цифр после запятой
// console.log(floatPoint, someInt, withDecimals); // 3.456789 3 3.46

//*========Напишм 1-ю функцию для округления до нужного числа после запятой =============

// function rounder(number, places) {
//     return Number(number.toFixed(places));
// }

// console.log(rounder(3.456, 2)); // 3.46
// console.log(rounder(4.789613, 4)); // 4.7896

//*========Напишм 2-ю функцию для округления до нужного числа после запятой через замыкание =============

// function rounder(places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2); //todo запишем сколько мы хотим получать цифр после запятой (2 запишет в замыкание в places)
// const rounder3 = rounder(3); //todo запишем сколько мы хотим получать цифр после запятой (3 запишет в замыкание в places)

// console.log(rounder2(3.456)); // 3.46
// console.log(rounder3(4.77345)); // 4.773

//?============== Приватные данные и функции =========================================================


// function salaryManagerFactory(employeeName, baseSalary = 0) {
//     let salary = baseSalary;
//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Andrii', 6000); //* закрыли в замыкании зп (её внешне не изменить)

// console.log(salaryManager.current());

// salaryManager.raise(1300); //* можно изменить через метод

// console.log(salaryManager.current()); //Текущая зарплата Andrii - 7300


//?================== Задача 4=================================================

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

