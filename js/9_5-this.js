//!================= this =========================================================
// Контекст в JavaScript похож на контекст в предложении:
// Петя бежит быстро, потому что Петя пытается поймать поезд.
// Петя бежит быстро, потому что он(this) пытается поймать поезд.

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   username: "Petya",
//   showName() {
//*     console.log(petya.username);
//   },
// };

// petya.showName();

// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   username: "Petya",
//   showName() {
//*     console.log(this.username);
//   },
// };

// petya.showName();

//todo Необходимо усвоить всего одно правило для определения this - значение контекста внутри функции (не стрелочной)
//todo определятся не в момент ее создания, а в момент вызова.То есть значение this определяется тем, как вызывается функция,
//todo а не где она была объявлена.

//?========= this в методе объекта
// Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, частью которого является метод.

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

//* Разберем более сложный пример для лучшего понимания.

// Сначала создадим функцию в глобальной области видимости и вызовем ее.
// После чего присвоим ее в свойство объекта и вызовем как метод этого объекта.

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//? =============== this в callback-функциях

// При передаче методов объекта как колбэк - функций, контекст не сохраняется.
// Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// //   callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

//? ======================== this в стрелочных функциях

// Стрелочные функции не имеют своего this. В отличии от обычных функций, изменить значение this внутри стрелки после её объявления нельзя.

// ИНТЕРЕСНО
// Контекст внутри стрелки определяется местом её объявления, а не вызова и ссылается на контекст родительской функции.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// Ограничивая стрелочные функции постоянным контекстом, JavaScript - движки могут лучше их оптимизировать,
// в отличие от обычных функций, значение this которых может быть изменено.

// Пример не практичный, но отлично показывает как работает контекст для стрелок.
// Значение контекста берется из родительской области видимости.

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

//! ================================================== Методы функций ========================================================
// Бывают ситуации когда функцию нужно вызвать в контексте какого - то объекта, при этом функция не является его методом.
// Для этого у функций есть методы call, apply и bind.
//?================= Метод call()

//* foo.call(obj, arg1, arg2, ...)
//* Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т.д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
// greetGuest.call(poly, "С приездом"); // С приездом, Поли.

//? ========================== Метод apply

//* Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив,
// даже если аргумент всего один.

// foo.call(obj, arg1, arg2, ...)

//* foo.apply(obj, [arg1, arg2, ...])

//* Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные
//* аргументы arg1, arg2 и т.д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.

//? =========================== Метод bind()

// Методы call и apply вызывают функцию «на месте», то есть сразу.Но в случае колбэк - функций, когда необходимо не сразу вызвать функцию,
// а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...)

//* Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, arg2 и т.д.
//* Получается копия функции которую можно передать куда угодно и вызвать когда угодно.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."

//? ==================== bind() и методы объекта

// При передаче методов объекта как колбэк - функций, контекст не сохраняется.
// Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// В строгом режиме, значение this в методе getFullName, при вызове как колбэк - функции callback(), будет undefined.
// При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов объекта как колбэк - функций.
// Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.



