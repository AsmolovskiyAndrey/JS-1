const shouldRenew = confirm("Хотите продлить подписку ?");
console.log(shouldRenew);
// запишет true false с модального окна

let quantity = prompt("Введите количество товара");
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);
// запишет данные от пользователя или null если нажать cancel

