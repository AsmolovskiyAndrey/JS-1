//! ======================== Стрелочные функции ====================================

//* Обычная функция =======================
// const add = function(a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };
//* Она же только Стрелочная
// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
//* Если только одна строка (return),то...
// const add = (a, b, c) => a + b + c;

// console.log(add(5, 13, 45));



//* Обычная функция =======================
// const fnA = function () {
//     return {
//         name: "Andrii",
//     };
// };
//* Она же только Стрелочная (если нужно вернуть объект, то нужно положить его в скобки ())
// const fnA = () => ({ name: "Andrii"});


// console.log(fnA()); // {name: 'Andrii'}


//!====================================== фильтр для массива с урока 6.1 =============================================

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

//todo ================ переделаем его в стрелочный без ненужных переменных сразу в инлайн ===================

const filter = (array, test) => { //* функция принимает массив и функцию-условие
    const filteredArray = [];

    for (const iter of array) {
        const passed = test(iter); //* если функция-условие true значит и в passed запишет true
        if (passed) { //* если в passed true то добавим в массив число
            filteredArray.push(iter);
        }
    }
    return filteredArray;
};

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], value => value >= 3)); // [3, 4, 5, 6, 7, 8]
console.log(filter([1, 2, 3, 4, 5, 6], value => value <= 5)); // [1, 2, 3, 4, 5]