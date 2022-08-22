const add = function () { //! создали функцию
    console.log("Do...");
};
add(); // ! вызов функции

//! функция с аргументами и result
const sum = function (x, y) {
    return x + y;
};
const res = sum(5, 12); // ? Запись в переменную res результат вызова функции sum
console.log("Result x + y = ", res);