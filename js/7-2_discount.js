// !Написать скрипт суммы покупки со скидкой в магазине в зависимости от потраченной суммы за всё время
// Общая сумма покупок хранится в переменной total
// Сумма текущего платежа в переменной payment
// Скидка хранится в переменной discount

// Если потрачено меньше 500 - не партнёр, скидка 0 %
// Если потрачено от 501 до 1000 - бронзовый партнёр, скидка 2%
// Если потрачено от 1001 до 5000 - серебряный партнёр, скидка 5 %
// Если потрачено больше 5000 - золотой партнёр, скидка 10 %

// В результате вывести сообщение:
// "Оформляем ваш заказ на сумму (payment) со скидкой (discount)"
// "Вы явлетесь нашим партнёром со скидкой (discount)%"

let total = 3000;
const payment = 300;
let discount;
if (total < 500) {
    discount = 0;
    total += payment;
    console.log(`Оформляем ваш заказ на сумму ${payment} со скидкой ${discount} %`);
    } else if (total > 500 && total <= 1000) {
        discount = 2;
        total += payment;
        console.log(`Оформляем ваш заказ на сумму ${payment} со скидкой ${discount} %`);
    }
    else if (total > 1000 && total <= 5000) {
        discount = 5;
        total += payment;
        console.log(`Оформляем ваш заказ на сумму ${payment} со скидкой ${discount} %`);
    }
    else {
        discount = 10;
        total += payment;
        console.log(`Оформляем ваш заказ на сумму ${payment} со скидкой ${discount} %`);
    }
console.log(`Вы явлетесь нашим партнёром со скидкой ${discount} %`);