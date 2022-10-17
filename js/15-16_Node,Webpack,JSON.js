//!======================================= TERMONAL ======================================================

//* Открыть ctrl+shift+`

//? Основные полезные команды
//* pwd - путь
//* ls - литс
//* cd - навигация (cd ..-на удин уровень вверх, cd../../-на 2-а уровня вверх, cd JS-1-нашёл в папку,
//*  cd GO_IT\JS-1 - зашёл в папку из диска D, D:- зайти в корень диска)
//* clear, control + l - очистка
//* touch - создание(например touch index.htm !с ошибкой)
//* mv - переименование, перемещение(например mv index.htm index.html)
//* mkdir - создаст папку (например mkdir style)
//* rm - удаление (например rm index.htm)
//* rm -rf css-удалит папку css со всеми вложеностями(-rf recursiv forced)
//* rmdir - удалит папку (например rmdir style)


//! ===================================== NODE NPM ====================================================

// JavaScript вне браузера
// Node.js позволяет выполнять JavaScript - код вне браузера.Откройте любой терминал и выполните команду node,
// запустится REPL(read - eval - print loop) - интерактивная среда выполнения JS - кода.Выведем что - то в консоль.
//* node -v - покажет текущую версию node (v16.16.0)
//* node app.js - запустит файл app.js в текущеё директории

//? NPM состоит из трех основных компонентов:

//todo Сайт npmjs.com - используется для поиска и ознакомления с документацией пакетов.
// Интерфейс командной строки(CLI) - запускается из терминала и предоставляет набор команд для работы с реестром и пакетами.
// Позволяет создавать скриnpпты для запуска в терминале.
// Реестр пакетов (registry) - большая общедоступная база данных инструментов разработки (пакетов).
// Пакет(package) - небольшая JavaScript библиотека, решающая специфическую задачу.
// Пакеты пишут сами разработчики и делятся с сообществом.Такой подход упрощает жизнь, потому что не нужно изобретать колесо,
// все колеса уже давно лежат на полках реестра и готовы к использованию.

//? Команды NPM
// Сразу перечислим основные команды и будем последовательно использовать и рассматривать в деталях.

//*npm -v - покажет установленную версию npm (8.16.0)

//* npm init (npm init -y)- инициализирует npm в проекте и создает файл package.json
//* npm install(npm i) - устанавливает все зависимости перечисленные в package.json
//* npm list --depth=0 - выведет в терминале список локально установленных пакетов с номерами их версий, без зависимостей
//* npm install [package-name] - установит пакет локально в папку node_modules
//* npm uninstall(npm remove) [package-name] - удалит пакет, установленный локально и обновит package.json
//todo ============= скрипты =========================
//* npm start и npm test - запустит скрипт start или test, расположенный в package.json
//* npm run [custom-script] - запустит кастомный скрипт, расположенный в package.json
//? prestart, poststart - если такие значения есть в package.json то они отработабт перед и после start автоматически

//* npm outdated - используется для поиска обновлений, обнаружит совместимые версии программно и выведет список доступных обновлений
//* npm update - обновит все пакеты до максимально разрешенной версии

//todo const Joi = require('joi'); импортирует в переменную Joi данные из пакета joi (например в app.js)

//! ================================= ECMAScript Modules (ESM) ==========================================

//?============ Default export
// Часто модуль экспортирует всего одну сущность, такой экспорт удобен для импорта.Экспорт по умолчанию - самое главное экспортируемое значение,
// которое может быть чем угодно: переменной, функцией, классом и т.д.

import asd from "./export.js";
asd(); // Экспорт в 15-16_Node

//?============ Named export
// Модуль может экспортировать несколько сущностей, которые отличаются своими именами и называются именованными экспортами.
// Чтобы импортировать их в другой модуль, необходимо знать имена экспортируемых сущностей, которые мы хотим импортировать.

//* Первый способ - это использовать ключевое слово export перед всеми сущностями, которые необходимо экспортировать.
// Они будут добавлены как свойства в экспортируемый объект.При импорте мы деструктуризируем свойства из импортируемого объекта.

import { square, diag } from "./export.js";

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

//* Второй способ - это явно указать объект со свойствами для экспорта.

import { square2, diag2 } from "./export.js";

console.log(square2(13)); // 169
console.log(diag2(3, 5)); // 5.830951894845301

//* 3-й способ импортирует все экспорты модуля как объект с указанным именем. Это называется namespace import.

import * as myModule from "./export.js";
console.log(myModule.a); //123
console.log(myModule.square(11)); //121
console.log(myModule.b); //asd


//! ========================= Формат JSON ============================================

// JSON (JavaScript Object Notation) - современный текстовый формат хранения и передачи структурированных данных в текстовом виде.
// Синтаксис похож на объект, за исключением того, что ключи это всегда строки в двойных кавычках.
// Строчные значения также обязательно должны быть заключены в двойные кавычки.
// Значениями свойств могут быть типы string, number, object, array, boolean и null.

//* Пример
// user.json
// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

// Javascript и JSON отлично работают вместе благодаря методам встроенного класса JSON,
// которые преобразуют JavaScript объект в JSON и обратно.Независимо от того, что у вас есть,
// можно легко получить обратное.

//?================ Метод JSON.stringify()
//* Принимает значение и преобразовывает его в JSON.Значением может быть число, буль, null,
//* массив или обьект.Строки это уже валидный JSON поэтому их преобразование не имеет смысла.

// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

//* Не любой JavaScript объект может быть преобразован один к одному в JSON.Например,
//* если у объекта есть методы, то при преобразовании они будут проигнорированы.

// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

//? ============== Метод JSON.parse() ========================================

// Чтобы получить из JSON валидное JavaScript значение, его необходимо распарсить(parse).
// Это операция обратная преобразованию в строку(stringify).

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name); // "Mango"

//? ================== Обработка ошибок ======================================

// Если методам класса JSON передать невалидный JSON, то они «выбросят» ошибку и весь скрипт упадёт.
// Для того чтобы избежать этого, используется конструкция try...catch, которая позволяет «ловить» и
// обрабатывать ошибки выполнения скрипта.

try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}

// 1) Сначала выполняется код внутри блока try.
// 2) Если ошибок нет, блок catch игнорируется и управление передаётся дальше.
// 3) Если в блоке try произошла ошибка, его выполнение останавливается и интерпретатор переходит в блок catch.
// Переменная error это объект ошибки с информацией о том, что произошло.
// У этого объекта есть несколько полезных свойств:

// name - тип ошибки. Для ошибки парса это SyntaxError.
// message - сообщение о деталях ошибки.
// stack - стек вызовов функций на момент ошибки. Используется для отладки.

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");