// ! ==========================================МАССИВ=====================================================
// ? Шпаргалка по методам масивів:


// * split/join -- перетворює рядок на масив і назад.
// * push () -- додає елементи до кінця,
// * pop() -- видаляє елемент з кінця,
// * shift() -- видаляє елемент із початку,
// * unshift() - додає елементи на початок.
// * splice(index, deleteIndex, ...arr)-- починаючи з індексу index, видаляє deleteIndex елементів і вставляє
// * arr.slice(start, end)-- створює новий масив, копіюючи елементи з позиції start до end(не включаючи end).

// ? Декілька лайфхаків при роботі з масивами.

// Як швидко очистити масив

// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0; или  
// fruits = [];
// console.log(fruits); // поверне []


// Як об’єднати більше двох масивів

// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]


// Як отримати рандомне значення масиву

// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву



// ! ==========================================ФУНКЦИЯ=====================================================
// ? Шпаргалка з оголошення функцій у JS:


// Функціональний вираз(function expression)

// const greet = function (name) {
//  return `Hello, ${name}`;
// };


// Оголошення функції(function declaration)

// function greet(name) {
//  return `Hello, ${name}!`;
// }

// Для того, щоб щось повернути з функції / методу або умови, можна використовувати оператор return. 
// Також з функції можна повертати відразу будь - який тип даних, наприклад return 'hello'
//  // (повернемо рядок) чи return true // (повернемо буль) чи return [1, 2] // (повернемо масив)
// Паттерн раннє повернення, говорить про те, що якщо умова всередині нашого if поверне true,
// то нам відразу потрібно щось повернути з тіла цієї умови за допомогою return.
// Не забувайте, що оператор = це оператор присвоєння, а не порівняння.