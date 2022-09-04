//!===================== CallBack функции ==================================
//* Это отложенные функции который передаются как аргумент

const fnA = function (num, callBackFunc) {
    console.log(num);
    callBackFunc(123);
}

function fnB(number) {
    console.log("Лог вызова fnB и передаём число", number);
}

fnA(12, fnB); //todo fnB - это callBack функция которая вызовается в fnA //12 Лог вызова fnB и передаём число 123

//* Ещё пример CallBack функции в 1-м случае сложим, во 2-м вычтем значения
function doMath(a, b, callBack) {
    const result = callBack(a, b);
    console.log(result);
}

//? заменим то что ниже на удобную запись
// function add(x, y) {
//     return x + y;
// }
// function sub(x, y) {
//     return x - y;
// }
// doMath(5, 3, add); // 8
// doMath(5, 3, sub); // 2

//? На  Такую...
doMath(5, 3, function (x, y) { return x + y; }); // 8

doMath(5, 3, function (x, y) { return x - y; }); // 2


//!==================================== callback в примерах и задачах ========================================
const buttonRef = document.querySelector('.ourButton');
//* связали buttonRef с классом ourButton (наша кнопка)

// const handleBtnClick = function () {
//     console.log('Клик по кнопке' , Date.now());
// }
// //* функция пишет 'Клик по кнопке' и дату

// buttonRef.addEventListener('click', handleBtnClick); // Клик по кнопке 1662317140151
// //* при действии 'click' по нашей кнопке будет вызов функции handleBtnClick

//? или так через inline вместо строк 41-47

buttonRef.addEventListener('click', function () {
    console.log('Клик по кнопке' , Date.now());
});


//!==================================== геопозиция отложенный вызов ======================================

const onGetPositionSuccess = function (position) {
    console.log('Вызвана функция onGetPositionSuccess c геоданными', position);
}

const onGetPositionError = function (error) {
    console.log('Вызвана функция onGetPositionError с отказом', error);
}

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
); //* вызов функции в зивасимости от выбора если согласен вызов onGetPositionSuccess, если нет вызов onGetPositionError

//!====================================== интервалы =====================================================

