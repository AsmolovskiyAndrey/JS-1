// !Скрипт выбора стоимости отеля по кол-ву звёзд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$.
// Если в переменной stars что - то кроме чисел 1 - 5 выведи строку
// "Такого кол-ва звёзд нет"

const stars = 3;
let price;

if (stars === 1) {
    price = 20;
    } else if (stars === 2) {
        price = 30;
    } else if (stars === 3) {
        price = 50;
    } else if (stars === 4) {
        price = 70;
    } else if (stars === 5) {
        price = 120;
    } else {
        console.log("Такого количества звёзд нет");
    }

//! То же самое но с помощью SWITCH 
switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;
    case 3:
        price = 50;
        break;
    case 4:
        price = 70;
        break;
    case 5:
        price = 120;
        break;
    
    default:
        console.log("Такого количества звёзд нет");
}

// ! Перепишем если 1 и 2 звезды то 25$, 3 и 4 звезды 60$ , 5 -120$.

if (stars === 1 || stars === 2) {
    price = 25;
    } else if (stars === 3 || stars === 4) {
        price = 60;
    } else if (stars === 5) {
        price = 120;
    } else {
        console.log("Такого количества звёзд нет");
}

// ! НА Switch

switch (stars) {
    case 1:
    case 2:
        price = 25;
        break;
    case 3:
    case 4:
        price = 60;
        break;
    case 5:
        price = 120;
        break;
    
    default:
        console.log("Такого количества звёзд нет");
}

// !Напиши скрипт выбора опции доставки товара:
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта.

// В переменную message записать сообщение в зависимости от опции.
// - Вы можете забрать товар завтра с 12.00 в нашем офисе
// - Курьер доставит заказ завтра с 9.00 - 18.00
// - Посылка будет отправлена сегодня
// - Вам перезвонит менеджер

const option = 2;
let message;
switch (option) {
    case 1:
        message = "Вы можете забрать товар завтра с 12.00 в нашем офисе";
        break;
    case 2:
        message = "Курьер доставит заказ завтра с 9.00 - 18.00";
        break;
    case 3:
        message = "Посылка будет отправлена сегодня";
        break;
    default:
        console.log("Вам перезвонит менеджер");
}
console.log(message);