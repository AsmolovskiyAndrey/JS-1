//* Объектная модель документа(Document Object Model) - независимый от языка интерфейс для работы с HTML - документом.
// Содержит набор свойств и методов позволяющих искать, создавать и удалять элементы, реагировать на действия пользователя и многое другое.
// То есть соединяет страницу с языком программирования.

// DOM это отражение HTML - документа - древовидная структура, в которой каждый узел это JavaScript - объект со свойствами и методами,
// представляющий часть HTML - документа.Каждый элемент в документе, весь документ в целом, заголовок, ссылка, абзац - это части DOM этого документа,
// поэтому все они могут быть изменены из JavaScript - кода.

//* Объектная модель браузера(Browser Object Model) - независимый от языка интерфейс для работы с владкой браузера.
// Содержит набор свойств и методов, позволяющих получить доступ непосредственно к текущей вкладке и ряду функций браузера.
// Включает объект работы с историей навигации, местоположением и многое другое.

//!======================================== DOM =================================================

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
// // const listWithClass = document.querySelector('.menu'); //* связь по классу
// // console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li"); //* связь по всем li
// console.log(menuItemsByTagName);
// // const menuItemsByClass = document.querySelectorAll(".menu-item"); //* связь по классу
// // console.log(menuItemsByClass);

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

