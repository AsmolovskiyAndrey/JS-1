//! Напиши скрипт поиска логина:
//- Если логина нет - вывести сообщение "Пользователь (логин) не найден"
//- Если логин найден- вывести сообщение "Пользователь (логин) найден"

// - Сначала через for
// - Потом через for of
// - Логика Break
// - Логика includes() с тернарным оператором


// - Сначала через for
const logins = ["m4ngoDoge", "asd23", "poly1scute", "aj4xth3m4n"];
const loginToFind = "poly1scute";
let message = 'Пользователь ${loginToFind} не найден';

for (let i = 0; i < logins.length; i += 1){
    if (logins[i] === loginToFind) {
        message = `Пользователь ${loginToFind} найден`
        break
    }
}
console.log(message);

// - Потом через for of
const logins1 = ["m4ngoDoge", "asd23", "poly1scute", "aj4xth3m4n"];
const loginToFind1 = "asd23";
let message1 = `Пользователь ${loginToFind1} не найден`;

for (let log of logins1){
    if (log === loginToFind1) {
        message1 = `Пользователь ${loginToFind1} найден`
        break
    }
}
console.log(message1);

// - Логика includes() с тернарным оператором

const logins2 = ["m4ngoDoge", "asd23", "poly1scute", "aj4xth3m4n"];
const loginToFind2 = "aj4xth3m4n";
const message2 = logins2.includes(loginToFind2)
    ? `Пользователь ${loginToFind2} найден`
    : `Пользователь ${loginToFind2} не найден`;
console.log(message2);
