//!===============Просто функция и переделывание её в стрелочную==================
// function justFunc(a, b, c) {
//     return a + b + c;
// };
// console.log(justFunc(3, 7, 12)); //22

//? Если нужно только return то без {} или
// const justFunc1 = (a, b, c) => a + b + c;
// console.log(justFunc1(31, 72, 12)); // 115

//? Со скобками если нужно делать ещё что-то кроме return
// const justFunc2 = (a, b, c) => {
//     a *= 2;
//     b /= 2;
//     c += 100;
//     return a + b + c;
// }
// console.log(justFunc2(2, 4, 8)); // 114


//!================Callback функции=========================================

//* массив.forEach(function callback(element, index, array) {
  //* Тело коллбек-функции
//* });
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array.
// Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (value, index) {
//     console.log(`Array numbers ${index} his value is ${value}`);
// });

//*================Та же функция через стрелочную============================

// const numbers1 = [5, 10, 15, 20, 25];

// const sum = numbers1.forEach((value, index) => {
//     console.log(`Array numbers ${index} his value is ${value}`);
// });

// //? или без присвоения в sum

// numbers1.forEach((value, index) => {
//     console.log(`Array numbers ${index} his value is ${value}`);
// });


//!=========================Императивный и декларативный подход===================

//? Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

//? Декларативный подход
// Метод filter() скрывает в себе логику перебора коллекции и вызывает
// callback - функцию, которую мы ему передаем для каждого элемента, возвращая массив элементов,
// подошедших под критерий.
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


//! Функции с побочными эффектами и чистые==========================================================

//* Функция с побочными эффектами
//- это функция которая в процессе выполнения может изменять или использовать
// глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода - вывода и т.п.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]


//* Читстая функция (pure function)
// - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда
// возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]






//! ===============Методы==========================Методы===========================Методы===================


//! =============Перебирающие методы массива==================================================

//* Все перебирающие методы массивов имеют схожий синтаксис. Исходный массив array, вызов метода method и callback-функция
//* callback в качестве аргумента метода. array.method(callback[currentValue, index, array])

//* В большинстве методов, аргументами callback-функции являются значение элемента currentValue (первый параметр),
//* позиция элемента index(второй параметр) и сам исходный массив array(третий параметр).
// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });

//! ======================= Метод map() =====================================================
// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного
// массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
//* массив.map((element, index, array) => {
//* Тело коллбек-функции
//* });

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

//? То же мамое без стрелочных функций
// function toLower(array) {
//     return planets.map(function (planet) {
//         return planet.toLowerCase();
//     });
// }
// console.log(toLower(planets)); // ['земля', 'марс', 'венера', 'юпитер']

const asd = ["QWER", "asda"];
for (let i = 0; i < asd.length; i++) {
        if (asd[i] === asd[i].toLowerCase()) {
            asd[i] = asd[i].toUpperCase();
        } else {
            asd[i] = asd[i].toLowerCase();
        };
};
console.log(asd);

const planetsChangeCase = planets.map(planet => {
    for (let i = 0; i < planet.length; i++) {
        if (planet[i] === planet[i].toLowerCase()) {
            planet[i] = planet[i].toUpperCase();
        } else {
            planet[i] = planet[i].toLowerCase();
        };
    };
});
console.log(planetsChangeCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']