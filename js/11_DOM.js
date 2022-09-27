//* Объектная модель документа(Document Object Model) - независимый от языка интерфейс для работы с HTML - документом.
// Содержит набор свойств и методов позволяющих искать, создавать и удалять элементы, реагировать на действия пользователя и многое другое.
// То есть соединяет страницу с языком программирования.

// DOM это отражение HTML - документа - древовидная структура, в которой каждый узел это JavaScript - объект со свойствами и методами,
// представляющий часть HTML - документа.Каждый элемент в документе, весь документ в целом, заголовок, ссылка, абзац - это части DOM этого документа,
// поэтому все они могут быть изменены из JavaScript - кода.

//* Объектная модель браузера(Browser Object Model) - независимый от языка интерфейс для работы с владкой браузера.
// Содержит набор свойств и методов, позволяющих получить доступ непосредственно к текущей вкладке и ряду функций браузера.
// Включает объект работы с историей навигации, местоположением и многое другое.

//!======================================== DOM Навигация по DOM  =================================================

// DOM предоставляет широкий спектр возможностей при работе с элементом и его содержимым, но для этого на него сначала нужно получить ссылку.
//* Доступ к DOM начинается с объекта document, от него можно добраться до любых элементов.

// Элементы DOM - дерева имеют иерархическое отношение друг к другу.
// Для описания отношений используются термины предок(ancestor), потомок(descendant), родитель(parent), ребенок(child) и сосед(sibling).

//? Для навигации по этой иерархии у элементов есть следующие свойства.

// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).

// Итак, мы уже знаем что DOM - элемент - это объект со свойствами и методами.
//? Самое время научиться быстро находить элемент по произвольному CSS - селектору.
// Группа методов elem.querySelector * это современный стандарт для поиска элементов.
// Они позволяют найти элемент или группу элементов по CSS - селектору любой сложности.
// Используется если необходимо найти только один, чаще всего уникальный элемент.
// Возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
// Если ничего не найдено, вернет null.
//* element.querySelector(selector);


//? Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором.
// Например, все элементы списка с классом menu - item.
// Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.
// Если ничего не найдено, вернет пустой массив.
//* element.querySelectorAll(selector);


//! ============================== например поиск querySelector и querySelectorAll ==============================================
{/* <ul id="menu" class="menu">
  <li class="menu-item">home</li>
  <li class="menu-item">about</li>
  <li class="menu-item">gallery</li>
  <li>blog</li>
</ul> */}

// const listWithId = document.querySelector('#menu'); //* связь по id
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '20px';
// console.log(listWithId);
// const listWithClass = document.querySelector('.menu'); //* связь по классу
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li"); //* связь по всем li
// console.log(menuItemsByTagName);
// const menuItemsByClass = document.querySelectorAll(".menu-item"); //* связь по классу
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item"); //* выбрал первый попавшийся класс т.е. первый
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);


//!============================================ Свойства и атрибуты ========================================================

// ? ===================== свойства value, checked, name, src ======================================================
//* Во время построения DOM - дерева, некоторые стандартные HTML - атрибуты становятся свойствами элементов.
// Посмотрим на несколько часто использующихся свойств.

// value - содержит текущий текстовый контент элементов форм.
// checked - хранит состояние чекбокса или радиокнопки.
// name - хранит значение, указанное в HTML-атрибуте name.
// src - путь к изображению тега <img>.

//========================================== html=========================================================================
{/* <textarea id="message" class="materialize-textarea" rows="5">Default textarea message</textarea>

<div>
  <a href="/home" class="btn">home</a>
  <a href="/about" class="btn active">about</a>
  <a href="/gallery" class="btn">gallery</a>
</div>

<br>
<img class="image" src="https://placeimg.com/640/480/animals" alt="" width="320" /> */}
//========================================================================================================================

//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

//===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // http://127.0.0.1:5500/about
// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


//? ===================================== Свойство textContent ===========================================================
// elem.textContent возвращает текстовый контент внутри элемента.
// Доступно для чтения и записи.Не зависимо что будет передано в textContent, данные всегда будут записаны как текст.

//========================================== html=========================================================================
// {/* <article class="article">
//   <h2 class="article-title">Welcome to Hawaii!</h2>
//   <p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat nemo veritatis quasi eius eum aliquid, nobis dolore nisi, magnam eaque iusto, necessitatibus atque laborum quam tempora ducimus dicta ipsam.</p>
// </article> */}
//========================================================================================================================

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';
// console.log(title.textContent); // Welcome to Bahamas!


//?======================================== Свойство classList ==========================================================
// В свойстве classList хранится объект с методами для работы с классами элемента.

// elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
// elem.classList.add(cls) - добавляет класс cls в список классов элемента.
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
// elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
// elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

//========================================== html=========================================================================
{/* <p id="paragraph" class="text red big">Proin magna. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
    non adipiscing dolor urna a orci. Etiam rhoncus. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.</p> */}
//========================================================================================================================

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList); // ['text', 'red', 'new-class', 'a', 'b', 'c', value: 'text red new-class a b c']

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class , a, b, c
// });


//? ============================================== Свойство style ===================================================
// Используется для чтения и изменения инлайновых стилей.Возвращает объект CSSStyleDeclaration, который содержит список всех свойств,
// определенных только во встроенных стилях элемента, а не весь CSS.При записи свойства записываются в camelCase,
// то есть background - color превращается в element.style.backgroundColor и т.д.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// ИНТЕРЕСНО
// На практике стилизация элементов выполняется добавленим CSS - классов.
// Свойство style используется для добавления каких - то динамических стилей, например во время анимации.

//? ============================================== Атрибуты =======================================================
// DOM - элементам соответствуют HTML - теги у которых есть текстовые атрибуты.
// Доступ к атрибутам осуществляется при помощи стандартных методов. Эти методы работают со значением, которое находится в HTML.

// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

//========================================== html=========================================================================
{/* <img class="image" src="https://placeimg.com/400/200/nature" alt="Beautiful nature"></img> */}
//========================================================================================================================

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, class: class, src: src, alt: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // Beautiful nature

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature


//? ================================================= data-атрибуты ===============================================
// Позволяют добавить тегу произвольный атрибут и получить его значение в JavaScript.
// Эту возможность используют для того, чтобы упростить написание кода, например связать данные и разметку по уникальному идентификатору,
// указать тип действия кнопки и т.п.

{/* <button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>

//* Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. 
То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.
action будет ключ, а save - значение ключа

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close" */}

//========================================== html=========================================================================
{/* <div class="editor">
  <p>Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Phasellus gravida semper nisi.</p>
  <div class="actions">
    <button type="button" class="btn" data-action="save">Save</button>
    <button type="button" class="btn" data-action="close">Close</button>
  </div>
</div>

<ul class="dishes">
  <li data-id="14">Baked Yak &amp; Mushrooms</li>
  <li data-id="7">Strawberry Pancakes</li>
  <li data-id="3">Caramel Toffee</li>
  <li data-id="61">Pistachio Elderberry Wafer</li>
</ul> */}
//========================================================================================================================

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

//? ================================================ Создание и удаление элементов ==========================================
// DOM API позволяет не только выбирать или изменять уже существующие, но и удалять, а так же создавать новые элементы, после чего добавлять их в документ.

//todo ============ Создание =======================
//* document.createElement(tagName);
// Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента.
// Элемент создается в памяти, в DOM его еще нет.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

//todo ============ Добавление =======================

// Чтобы созданный элемент был отображен на странице, его необходимо добавить к уже существующему элементу в DOM - дереве.
// Допустим, что добавляем в некий элемент element, для этого есть методы.

//* element.appendChild() - добавляет один элемент после всех детей элемента element.
//* element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
//* element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
//* element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
//* element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
// Во всех этих методах, el это элементы или строки, в любом сочетании и количестве. Строки добавляются как текстовые узлы.

//=============================== HTML + JS =========================================
/* <div class="container">
  <ul class="usernames">
    <li>Mango</li>
  </ul>
</div>

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem 10";
list.after(text); */
//=======================================================================================


//todo ================ Удаление =====================================

//* elem.remove();
// Для того, чтобы удалить элемент используется метод remove().
// Он вызывается на самом элементе elem, который необходимо удалить

//=============================== HTML + JS =======================================
{/* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! Praesentium accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
<a class="link" href="">Read more</a>
</article>

const text = document.querySelector('.text');
text.remove(); */}
//================================================================================


//! =============================== Свойство innerHTML ================================

//todo ============= Чтение
// Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки.
// Возвращаемое значение это всегда валидный HTML - код.

//=============================== HTML + JS =======================================
{/* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
  <a class="link" href="">Read more</a>
</article>

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML); */}
//==============================================================================

//todo Изменение
// Свойство innerHTML доступно как для чтения, так и для записи.Если записать в него строку с HTML - тегами,
// то браузер во время парсинга строки превратит их в валидные элементы и добавит в DOM - дерево.

//=============================== HTML + JS =======================================
{/* <article class="article">
  <h2 class="title">Article title</h2>
  <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
  <a class="link" href="">Read more</a>
</article>

body {
  margin: 16px;
}

.accent {
  color: tomato;
  text-decoration: underline;
}

const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title'; */}
//================================================================================
// ИНТЕРЕСНО
// Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено.Это простой и быстрый способ удаления всего содержимого.

// При таком подходе, в отличии от document.createElement(), мы не получаем ссылку на созданный DOM - элемент.
// Это первый шаг на пути к шаблонизации - создания большого количества однотипной разметки с разными данными по заранее определённому шаблону
// Например, как в списке товаров интернет магазина и т.п.

// Однотипная(шаблонная) разметка создается из массива данных.
// Приём заключается в переборе этого массива и составлении одной строки с HTML тегами,
// которую потом записываем в innerHTML элемента.

//=============================== HTML + JS =======================================
{/* <section>
  <h2>Popular technologies</h2>
  <ul class="list"></ul>
</section>
========================================
body {
  padding: 16px;
}

.list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.list-item {
  padding: 8px;
  border-width: 2px;
  border-style: dashed;
}

.list-item:nth-child(even) {
  border-color: tomato;
}

.list-item:nth-child(odd) {
  border-color: blueviolet;
}

.list-item:not(:last-child) {
  margin-bottom: 8px;
}
==========================================
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;
======================================================================================== */}

// todo =================== Добавление ================
// Изменение elem.innerHTML полностью удалит и пересоздаст всех потомков элемента elem.
// Если элемент изначально не пустой, то будут дополнительные затраты на сериализацию уже существующей разметки, а это плохо.

//=============================== HTML + JS =======================================
{/* <article class="article">
  <h2>Article title</h2>
</article>
// ===============================
body {
  padding: 16px;
}

.article {
  max-width: 320px;
}

.article-text {
  color: tomato;
}
// ===============================
const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString; */}
// =================================================================================
// ИНТЕРЕСНО
// Используйте свойство elem.innerHTML для добавления только в случае когда элемент elem пустой или если надо полностью заменить его содержимое.


//! ================================== Метод insertAdjacentHTML() =====================
// Современный метод для добавления строки с HTML - тегами до, после или внутрь элемента.
// Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

//* elem.insertAdjacentHTML(position, string);

// Аргумент position - это строка, позиция относительно элемента elem.
// Принимает одно из четырёх значений.
//* "beforebegin" - перед elem
//* "afterbegin" - внутри elem, перед всеми детьми
//* "beforeend" - внутри elem, после всех детей
//* "afterend" - после elem


//=============================== HTML + JS =======================================
{/* <ul class="list">
  <li class="list-item">HTML</li>
  <li class="list-item">CSS</li>
  <li class="list-item">JavaScript</li>
</ul>
// =======================================================
body {
  padding: 16px;
}

.list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 8px;
  border-width: 2px;
  border-style: dashed;
}

.list-item.new::before {
  content: "";
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: green;
}

.list-item:nth-child(even) {
  border-color: tomato;
}

.list-item:nth-child(odd) {
  border-color: blueviolet;
}

.list-item:not(:last-child) {
  margin-bottom: 8px;
}
// ===================================================
const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>"); */}
// ==============================================================================================

// ИНТЕРЕСНО
// "beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.



//! ================================ Подключение скриптов ========================

// Загрузка и выполнение скрипта указанного в теге < script > без каких - либо атрибутов,
// блокируют обработку HTML - документа и построение DOM.Это проблема.

// <script src="path-to-script.js"></>

// Когда анализатор встречает такой тег, обработка HTML - документа приостанавливается и
// начинается загрузка файла скрипта указанного в атрибуте src.
// После загрузки скрипт выполняется, и только потом возобновляется обработка HTML.
// Это называется «блокирующий» скрипт.

// Атрибуты defer и async были введены чтобы дать разработчикам возможность лучше контролировать
// как загружать скрипты и когда именно их выполнять.

//todo =========== Атрибут defer ===========

//* <script defer src="path-to-script.js"></script>

// Атрибут defer указывает браузеру загружать файл скрипта в фоновом режиме,
// паралельно обработке HTML - документа и построению DOM.Скрипт будет выполнен только после того
// как HTML - документ обработан, а DOM построен.
// Такие скрипты не блокируют построение DOM - дерева и гарантированно выполняются в том порядке,
// в котором указаны в HTML - документе.

//todo =========== Атрибут async ===========

//* <script async src="path-to-script.js"></script>

// Загрузка скрипта с атрибутом async не блокирует построение DOM, но он выполняется сразу после
// загрузки.Это значит, что такие скрипты могут заблокировать построение DOM,
// и выполняются в произвольном порядке.




//todo -------------------------------------------------------------------------------------------------------------------
//!================================================ ПРАКТИКА =============================================================
//todo -------------------------------------------------------------------------------------------------------------------


//todo =============================== Создаём коллекцию разметки из массива объектов (colorPickerButtons) ======================================

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

//==========================================================
// const colorPickerContainerEl = document.querySelector('.js-color-picker'); //* сделали привязку к пустому классу

// const elements = colorPickerOptions.map(option => { //* пройдём по массиву colorPickerOptions и результат запишем в массив elements
//   const buttonEl = document.createElement('button'); //* создали кнопку
//   buttonEl.type = 'button'; //* добавили ей тип
//   buttonEl.classList.add('color-picker__options'); //* добавили ей класс (в котором в CSS можно назначить свойства)
//   buttonEl.textContent = option.label; //* вставили текст в кнопку взяв его в option.label
//   buttonEl.style.backgroundColor = option.color; //* вставили цвет в кнопку взяв его в option.color

//   return buttonEl; // <button type="button" class="color-picker__options" style="background-color: rgb(244, 67, 54);">red</button> и т.д.
// });

// colorPickerContainerEl.append(...elements); //* вставили в класс colorPickerContainerEl элементы с elements (распылив его)

//?======================= то же самое через функцию для создания разметки колорпикера ==========

// const colorPickerContainerEl = document.querySelector('.js-color-picker'); //* сделали привязку к пустому классу

// const makeColorPickerOptions = options => {
//   return options.map(option => { //* пройдём по массиву colorPickerOptions и результат запишем в массив elements
//     const buttonEl = document.createElement('button'); //* создали кнопку
//     buttonEl.type = 'button'; //* добавили ей тип
//     buttonEl.classList.add('color-picker__options'); //* добавили ей класс (в котором в CSS можно назначить свойства)
//     buttonEl.textContent = option.label; //* вставили текст в кнопку взяв его в option.label
//     buttonEl.style.backgroundColor = option.color; //* вставили цвет в кнопку взяв его в option.color

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

//todo =========================== Создаём карточку продукта из объекта ==========================================================

// //! ИМПОРТ С ПАПКИ МАССИВА С ОБЪЕКТАМИ (КАРТОЧКИ)
// import product from './data/products.js'


// //? Напишем функцию добавления разметки из карточки продукта

// const makeProductCard = ({ name, description, price }) => {  //* деструктуризируем нужные данные
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.classList.add('product_name');
//   nameEl.textContent = name;

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product_descr');

//   const priceEi = document.createElement('p');
//   priceEi.textContent = `Цена ${name} составляет ${price} кредитов`;
//   priceEi.classList.add('product_price');

//   productEl.append(nameEl, descrEl, priceEi); //* делаем "гроздь чтобы повесить в DOM всё сразу"

//   return productEl; //* возврат "грозди"
// }


// const card = document.querySelector('.card');  //* делаем привязку к классу к которому хотим добавить "гроздь"

// const elements = product.map(makeProductCard); //* пройдём по массиву product и вызовем makeProductCard (CALLBACK)

// card.append(...elements); //* добавляем разметку elements в card




//! ================================== Метод insertAdjacentHTML() через транзакции и таблицы ================================


// // //! ИМПОРТ С ПАПКИ МАССИВА С ОБЪЕКТАМИ (КАРТОЧКИ)
// import transactionHistory from './data/transactoins.js'


// // //? Напишем функцию добавления разметки из карточки продукта

// const makeTransactionTableString = transaction => {
//   return `
//   <tbody>
//     <tr>
//       <td>${transaction.id}</td>
//       <td>${transaction.amount}</td>
//       <td>${transaction.date}</td>
//       <td>${transaction.name}</td>
//       <td>${transaction.type}</td>
//       <td>${transaction.business}</td>
//       <td>${transaction.account}</td>
//     </tr>
//   </tbody>
//   `
// };

// makeTransactionTableString(transactionHistory[0]);

// const makeTransactionTableRows = transactionHistory
//   .map(makeTransactionTableString)  //* прошлись по массиву объектов
//   .join(''); //* join нужен чтобы сделать одну строку (insertAdjacentHTML принимает только строку)

// const tableEl = document.querySelector('.js-transaction-table');
// tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);