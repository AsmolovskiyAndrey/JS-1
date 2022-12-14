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


//!================forEach функции=========================================

//* массив.forEach(function callback(element, index, array) {
  //* Тело коллбек-функции
//* });
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array.
// Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
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
//todo Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного
//todo массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
//* массив.map((element, index, array) => {
//* Тело коллбек-функции
//* });

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

//? То же мамое без стрелочных функций
// function toLower(array) {
//     return planets.map(function (planet) {
//         return planet.toLowerCase();
//     });
// }
// console.log(toLower(planets)); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

//* Переберём массив с помощью map

// const students = [
//   { name: "Манго", score: 83, points: 54 },
//   { name: "Поли", score: 59, points: 23 },
//   { name: "Аякс", score: 37, points: 79 },
//   { name: "Киви", score: 94, points: 92 },
//   { name: "Хьюстон", score: 64, points: 36 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// //? заберём с массива объектов несколько свойств

// const fewValues = students.map(({ name, points }) => ({ name, points }));
// console.log(fewValues); // массив объектов в котором name и points

//? Увеличим значение points в новом массиве на 10%
// const newPointsStudents = students.map((student) => ({ ...student, points: Math.round(student.points * 1.1) }) );
// console.log(newPointsStudents);

//!=============================== Метод flatMap() =================================================
//todo Метод flatMap(callback) аналогичен методу map(), но применяется в случаях когда результат это многомерный массив
//todo который необходимо «разгладить».
// Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив.
// Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице(одна вложенность).
// Этот разглаженный массив и есть результат работы flatMap().

const students = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

// console.log(students.map(student => student.courses));
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// console.log(students.flatMap(student => student.courses));
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// Если глубина вложености больше чем 1 (например 3) то применяем map + flat отдельно
// console.log(students.map(student => student.courses).flat(3));


//! ============================== Метод FLAT ==================================================
//todo Метод разлаживает массив с любым количеством вложености

// const fl = [1, 2, [3, 4, [5, [6]], 7, 8], 9];
// console.log(fl); // [1, 2, Array(5), 9]
// console.log(fl.flat()); // [1, 2, 3, 4, Array(2), 7, 8, 9] разгладит одну вложенность
// console.log(fl.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9] разгладит три вложенности


//!=============================== Метод filter() ==================================================
//todo Метод filter(callback) используется для единственной операции - фильтрации массива,
//todo то есть когда необходимо выбрать более одного элемента из коллекции по какому - то критерию.
//* Если коллбек вернул true элемент добавляется в возвращаемый массив.
//* Если коллбек вернул false элемент не добавляется в возвращаемый массив.
//* Если ни один элемент не удовлетворил условию, возвращает пустой массив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

//* Фильтрация уникальных элементов
// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы.
// Этот приём работает только с массивом примитивных значений - не объектов.

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс
// в оригинальном массиве всех курсов.В параметре index хранится индекс текущего элемента course при переборе массива
// методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение
// встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// console.log(uniqueCourses); //['математика', 'физика', 'информатика', 'биология']


//*================== Filter c Массивом объектов ============================================
// При работе с массивом объектов выполняется фильтрация по значению какого-то свойства.
// В результате получается новый массив отфильтрованных объектов.

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс


// const middle = students.filter(midStudents => midStudents.score >= LOW_SCORE && midStudents.score <= HIGH_SCORE);
// console.log(middle); // Массив объектов с именами Поли и Хьюстон

//? В коллбек-функции удобно деструктуризировать свойства объекта предыдущего решения
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон


//!================================== Метод find() =================================================================
//todo Если метод filter(callback) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback)
//todo позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается.
//todo То есть он ищет до первого совпадения.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(({ label }) => label === "pink")); // деструктуризировал { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === "white")); // undefined


//!================================== Метод findIndex() ===============================================================
//todo Метод findIndex(callback) это современная замена методу indexOf(). Позволяет выполнять поиск по более сложным
//todo условиям чем просто равенство. Используется как для поиска в массиве примитивов, так и в массиве обьектов.
// массив.findIndex((element, index, array) => {
// Тело коллбек-функции
// });

// Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1.

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//     { label: "blue", color: "#newColor" },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === "blue")); // 2 первый !!!!
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1


//!=============================== Методы every() и some() ==========================================================
//!  Метод every()
//todo Проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотябы один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.

// // Все элементы больше либо равны нулю? - да
// const numbers = [1, 2, 3, 4, 5];
// numbers.every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

//!  Метод some()
//todo Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.
// Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// Возвращает false если ни один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает true.

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

//? Every , some с массивом объектов======================================

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true



//!======================= Метод reduce() =========================================================
//todo Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива
//todo с сохранением промежуточного результата, как аккумулятор.
//* массив.reduce((previousValue, element, index, array) => {
//* Тело коллбек-функции
//* }, initialValue);

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.

// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) =>  previousValue + number , 100);
// console.log(total); // 132

// Первый параметр коллбек - функции(previousValue) это аккумулятор, то есть промежуточный результат.
// Значение которое вернёт коллбек - функция на текущей итерации, будет значением этого параметра на следующей.
// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.(100 у нас)

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0 (100 в нашем случае поскольку initialValue = 100)

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 100 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 102 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 109 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 112 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 126 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 132

//?  Метод reduce() с массивом объекта ======================================
//todo При работе с массивом объектов выполняется редуцирование по значению какого-то свойства.
//todo Например, есть массив студентов с баллами за тест.Необходимо получить средний бал.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => total + student.score, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore); //67.4

// //* или так с помощью Object.value который соберёт значения в массив (если он одномерный)
// const salary = {
//   mango: 100,
//   poly: 130,
//   andrii: 300,
// }
// const totalScore1 = Object.values(salary).reduce((total, price) => total + price, 0);
// console.log(totalScore1); // 530

//* Посчитаем корзину товаров с помощью reduce

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 200, quantity: 4 },
// ];
// const totalPrice = cart.reduce((total, {price, quantity}) => total + price * quantity, 0); //* price и quantity деструктуризировали
// console.log(totalPrice); // 1360


//? Продвинутый reduce ===========================================================
// Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков.
// Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода.А можно использовать reduce.


//todo Variant 1 - у нас есть следующая задача: из массива постов твиттера необходимо посчитать сумму всех лайков
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

//todo Variant 2 - соберем в массив все теги, которые встречаются в постах
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));


//todo Variant 3 - После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// Начальное значение аккумулятора это пустой объект {}

// const countTags = getTags.reduce((acc, tag) => {
  //   if (!acc.hasOwnProperty(tag)) {
  //     acc[tag] = 0;
  //   }

  //   acc[tag] += 1;

  //   return acc;
  // }, {});
  //* или так распыляем acc и сравниваем через тернарник значение === acc[значение]
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(countTags); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}


//! =========================================== Метод sort() ============================================================
//todo Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.
// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

//* Но, так как по умолчанию значения приводятся к строке, стандартная сортировка чисел работает необычно.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

//* Массив строк сортируется по алфавиту.

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

//* При этом порядковый номер заглавных букв меньше чем у прописных.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Из - за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций
// а базе исходной.Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию.
//* Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//! =========================== Свой порядок сортировки чисел sort((a, b) =================================================
//todo Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек - функцию с двумя параметрами.
//todo Это функция сравнения(compare function), порядок сортировки зависит от её результата.Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((a, b) => {
//  Тело коллбек-функции
// });

// a - первый элемент для сравнения.
// b - второй элемент для сравнения.

// Если вызов compareFunction(a, b) возвращает любое отрицательное значение, то есть a меньше b, сортировка поставит a перед b.

//? Это сортировка по возрастанию.
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Если вызов compareFunction(a, b) возвращает любое положительное значение больше нуля, то есть b больше a, сортировка поставит b перед a.
//? Это сортировка по убыванию.
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]


//!===========Свой порядок сортировки строк localeCompare() ================================================================
//todo firstString.localeCompare(secondString)

// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.

//* Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']


//!============================================== Сортировка объектов ==================================================
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого - то свойства.
// Например, есть группа студентов с баллами за тест.Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов,
// и по имени студента.
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

//* сортировка по баллам
// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

//* сортировка по баллам (убывание)
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

//* сортировка по имени
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);


//!================================================ Цепочки методов Chaining =============================================

//? Задача отсортировать массив array 1) все числа больше 5ти 2) эти числа умножить на 4 3) отсортировать по возрастанию

// const array = [2, 6, 3, 11, 4, 9, 7];
// const bigger = array.filter(num => num > 5); // числа больше 5-ти
// console.log(bigger); // [6, 11, 9, 7]
// const multi = bigger.map(num => num * 4); // эти числа умножить на 4
// console.log(multi); // [24, 44, 36, 28]
// const mainArray = multi.sort((a, b) => a - b); // отсортировать по возрастанию
// console.log(mainArray); // [24, 28, 36, 44]

//? Или так без промежуточных переменных
// const array = [2, 6, 3, 11, 4, 9, 7];

// const mainArray = array.filter(num => num > 5).map(num => num * 4).sort((a, b) => a - b); // все предыдущие методы в 1-й строке
// console.log(mainArray); // [24, 28, 36, 44]



//? Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест.Для этого мы отсортируем копию массива методом sort(),
// после чего методом map() составим массив значений свойства name из сортированного массива.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной.
// Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.
// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод будет выполняться на результате
// работы предыдущего.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Делаем копию исходного массива перед сортировкой.
// На копии вызываем метод sort().
// К результату работы метода sort() применяем метод map().
// Переменной names присваивается результат работы метода map().
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']


// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().
// Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций.


//! ========================== Цепочки методов Chaining в объектах ===========================================

// const element = {
//   class: '',
//   isOnline: false,
//   changeClass(newCls) {
//     this.class = newCls;
//     return this; // нужен чтобы не бало ошибки
//   },
//   changeOnline() {
//     this.isOnline = !this.isOnline;
//     return this; // нужен чтобы не бало ошибки
//   },
// };

// element.changeOnline().changeClass('open');
// console.log(element); // {class: 'open', isOnline: true, changeClass: ƒ, changeOnline: ƒ}



//todo===============================Библиотека  LODASCH ===============================================================
//! +++++++++++++++++++++++++++++++++Библиотека  LODASCH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//todo===============================Библиотека  LODASCH ===============================================================
{/* <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script> подключить с помощью скрипта */}



console.dir(_); //? Покажет все методы LODASCH

//? isEmpty() - покажет пустой элемент (массив, объект) или нет
// const a = {};
// const b = [1, 2];
// console.log(_.isEmpty(a)); // true
// console.log(_.isEmpty(b)); // false
// console.log(_.isEmpty({ a: 0,})); // false

//? union() - сделает массив с уникальными данными
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// const res = _.union(a, b);
// console.log(res); // [1, 2, 3, 4, 5, 6]

//? range() - создаст новый массив с нужными цифрами
// let a = _.range(5) // до 5-ти (от нуля)
// let b = _.range(1,8) // от 1-го до 8-ми
// let c = _.range(2, 10, 3) // от 2-х до 10-ти с шагом 3
// console.log(a, b, c); // [0, 1, 2, 3, 4]  [1, 2, 3, 4, 5, 6, 7]  [2, 5, 8]

//? sortBy() - сортировка массива

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const array = _.sortBy(students, student => student.name); // по имени
// const array = _.sortBy(students, student => student.score); // по баллам
// const array = _.sortBy(students, ['name', 'score']); // по нескольким (сначала 1-ю потом 2-ю)
// console.log(array); //

//? sum() и sumBy() - подсчёт суммы в массиве и в массиве объектов

// const a = [1, 4, 6, 9, 12];
// const sumA = _.sum(a);
// console.log(sumA); // 32

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];
// const sumScore = _.sumBy(students, student => student.score);
// console.log(sumScore); // 273 - сумма score

//? min() , max(), minBy(), maxBy() = мин и макс значения в массиве и в массиве объектов

// console.log(_.min([3, 45, 67, 82])); // 3
// //* Сейчас есть такое...более новый синтаксис с распылением
// console.log(Math.min(...[23, 4, 67, 45])); // 4

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];
// console.log(_.minBy(students, student => student.score)); // {name: 'Аякс', score: 37}
// console.log(_.minBy(students, student => student.score).name); // Аякс (если нужно только его имя)


//? camelCase() , capitalize() , kebabCase() , lowerCase() , upperCase() -приведёт к нужному порядку
//? уберёт всё лишнее из строки оставив только буквы и цифры

// console.log(_.camelCase('New-main Array_ 123')); // newMainArray123
// console.log(_.capitalize('New-main Array_ 123')); // New-main array_ 123
// console.log(_.kebabCase('New-main Array_ 123')); // new-main-array-123
// console.log(_.lowerCase('New-main Array_ 123')); // new main array 123