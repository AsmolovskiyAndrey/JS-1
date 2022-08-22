//! Напиши функцию которая принимает массив цен и возвращает их сумму
const calculateTotalPrice = function (price) {
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