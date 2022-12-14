//!  ========================================== Распространение событий =============================================

//* Распространение событий (event propagation) - это термин описывающий жизненный цикл события, который включает в себя три этапа:
//* погружение, таргетинг и всплытие. На практике чаще всего используют только фазу всплытия.

// Capturing phase (погружение) - событие начинается на window и тонет (проходит через все элементы-предки) до самого глубокого целевого элемента на котором произошло действие, например клик.
// Target phase (таргетинг) - событие дошло до целевого элемента. Этот этап включает только уведомление элемента о том, что на нём произошло действие.
// Bubbling phase (всплытие) - заключительная фаза, событие всплывает от самого глубокого, целевого элемента, через все элементы-предки до window.

//!========================================== Всплытие событий =====================================================
// При наступлении события, обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее,
// вверх по цепочке вложенности.Этот процесс называется всплытием(event bubbling),
// потому что события «всплывают» от внутреннего элемента вверх через всех предков до window, подобно тому,
// как всплывает пузырек воздуха в воде.

// Всплытие гарантирует, что клик по #descendant вызовет обработчик клика, если он есть, сначала на самом #descendant, затем на элементе #child,
// далее на элементе #parent и так далее вверх по цепочке предков до window.
// Поэтому, если в примере кликнуть на #descendant, то последовательно выведутся alert для descendant → child → parent.

//============================ HTML + CSS + JS ======================================================================
{/* <div id="parent">
  Parent
  <div id="child">
    Child
    <div id="descendant">Descendant</div>
  </div>
</div> */}
//=================================================
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

//====================================================================================================================
// ИНТЕРЕСНО
// Всплывают почти все события, например события focus и blur не всплывают, поэтому сущестуют их всплывающие аналоги - focusin и focusout.


//! ================================================= Свойство event.target =====================================================

//* event.target - это ссылка на исходный элемент на котором произошло событие, в процессе всплытия он неизменен.
//* event.currentTarget - это ссылка текущий элемент до которого дошло всплытие, на нём сейчас выполняется обработчик события.

//! =================================== Прекращение всплытия (stopPropagation()) ===============================================
// Обычно событие будет всплывать наверх до элемента window, вызывая все обработчики на своем пути.
// Но любой промежуточный обработчик может решить, что событие полностью обработано и остановить всплытие вызвав метод stopPropagation().

//============================ HTML + CSS + JS ======================================================================
{/* <div id="parent">
  Parent
  <div id="child">
    Child
    <div id="descendant">Descendant</div>
  </div>
</div> */}
//=======================================================
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.
// То есть, метод stopPropagation() только препятствует продвижению события дальше.Если необходимо полностью остановить обработку события,
// используется метод stopImmediatePropagation().Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

// ИНТЕРЕСНО
// Не прекращайте всплытие без необходимости.Прекращение всплытия создаёт свои подводные камни, которые потом приходится обходить.
// Например, аналитика использует всплытие чтобы отслеживать события на странице.

//! ============================================ делегирование событий (event delegation) =======================================
// Всплытие позволяет реализовать один из самых полезных приёмов - делегирование событий(event delegation).
// Он заключается в том, что если есть группа элементов, события которых нужно обрабатывать одинаково,
// то добавляется один обработчик на их общего предка, вместо того чтобы добавлять обработчик каждому элементу.
// Используя свойство event.target можно получить ссылку на целевой элемент, понять на каком именно потомке произошло событие и обработать его.

//* То есть делегирование сводится к трём простым шагам.

//* Определить общего предка группы элементов для отслеживания событий.
//* Зарегистрировать на элементе-предке обработчик события которое мы хотим отлавливать от группы элементов.
//* В обработчике использовать event.target для выбора целевого элемента.
// Такой подход упрощает инициализацию слушателей однотипных элементов.Можно добавлять, удалять или изменять элементы,
// при этом не нужно вручную добавлять или удалять обработчики событий.

//? ============================================= Палитра цветов ===============================================================

// Будем делать палитру цветов с возможностью выбрать цвет при клике и отображением выбранного цвета.
// Вместо того, чтобы назначать обработчик каждому элементу палитры, которых может быть очень много,
// повесим один слушатель на общего предка div.color - palette.В обработчике события клика используем event.target,
// чтобы получить элемент на котором произошло событие и связанный с ним цвет, который будем хранить в атрибуте data - color.

//============================ HTML + CSS + JS ======================================================================
{/* <p class="output">Selected color: -</p>
<div class="color-palette"></div> */}
//==================================================
// body {
//   margin: 8px;
//   font-family: sans-serif;
// }

// .output {
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 24px;
//   font-weight: 700;
// }

// .color-palette {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
//   gap: 4px;
// }

// .color-palette .item {
//   padding: 0;
//   margin: 0;
//   border: none;
//   border-radius: 4px;
//   width: 40px;
//   height: 40px;
//   cursor: pointer;
//   transition: transform 250ms ease-in-out;
// }

// .color-palette .item:hover {
//   transform: scale(1.1);
// }
//============================================================
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// ИНТЕРЕСНО
// Обязательно проверяем цель клика, чтобы это точно была кнопка,
// мы не хотим обрабатывать клики в элемент - контейнер.Для проверки типа элемента используем свойство nodeName.

//todo =============================================================================================================
//!======================================= Throttle и Debounce =====================================================
//todo =============================================================================================================

// Довольно часто необходимо обработать изменение размера окна, скролл, перемещение мыши или текстовый ввод пользователя.
// Это может быть сортировка коллекции и отрисовка результатов, анимация элемента, манипуляции с DOM - деревом и прочее.
// Все это улучшает UX(user experience), но, к сожалению, даёт большую нагрузку на браузер из - за того,
// что обработчики событий срабатывают слишком часто.Такие события неофициально называют «chatty events».

// Throttle и Debounce - это два похожих, но разных по поведению приёма, позволяющих контролировать сколько раз мы разрешаем
// выполнение функции с течением времени.Используем их реализацию из библиотеки Lodash.

//? ============ Подключение библиотеки =================================

// Подключим в проект библиотеку Lodash через CDN.Для этого используем сервис cdnjs.com и добавим ссылку на скрипт библиотеки
// в конец HTML - документа, как показано в примере.

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Document title</title>
//   </head>
//   <body>
//     <!-- HTML-markup -->

//     <!-- Lodash library script file -->
//     <script
//       async
//       src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//       integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     ></script>
//     <!-- Your script file -->
//     <script defer src="path/to/script.js"></script>
//   </body>
// </html>

// Теперь мы можем получить доступ к библиотеке в нашем скрипте.При подключении библиотек через CDN, на объект window добавляется свойство
// в котором хранится то, что предоставляет библиотека.Имя этого свойства уникально для библиотеки и описано в её документации.
// Для Lodash это символ нижнего подчёркивания _.Для проверки используем метод add, который просто складывает два числа.

// const result = _.add(2, 3);
// console.log(result); // 5

//! ====================================================== Throttle ==============================================================

//* Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени.
//* То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

// Используя throttle мы не контролируем, как часто браузер будет генерировать события.
// Мы всего - лишь берем контроль над частотой выполнения функции обработчика события.

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// Реализация из библиотеки Lodash ожидает первым аргументом функцию которую необходимо «затормозить», а вторым количество миллисекунд.
// Возвращает новую функцию для передачи в слушатель события.


//! ======================================================== Debounce =========================================================

//* Прием debounce гарантирует, что функция будет вызвана только если между событиями будет пауза в N миллисекунд.
// Например, пока пользователь скролит страницу функция не вызовется, но как только он перестал скролить,
// функция будет вызвана через 300 миллисекунд.Если скролл возобновится раньше чем через 300 миллисекунд после паузы, функция не вызовется.

// Используя debounce мы не управляем тем как часто браузер будет генерировать события,
// а всего - лишь берем контроль над частотой выполнения функции обработчика события.

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );

// Реализация из библиотеки Lodash ожидает первым аргументом функцию, а вторым количество миллисекунд.
// Возвращает новую функцию для передачи в слушатель события.

//? Режимы метода debounce ===============================
// По умолчанию метод debounce работает в режиме когда функция вызывается через N миллисекунд после паузы между потоками событий.
// Этот режим называется trailing edge(в конце).Есть задачи когда функцию надо вызвать сразу при наступлении первого события в потоке,
// а потом игнорировать все последующие события, до паузы между ними, например в 300 миллисекунд.
// На старте следующего потока событий это поведение повторяется.
// Такой режим называется leading edge(в начале).

// Методу debounce библиотеки Lodash можно передать необязательный третий аргумент - обьект параметров в котором есть два
// свойства leading(по умолчанию false) и trailing(по умолчанию true).Эти настройки изменяют режим и указывают,
// должна ли функция запускаться в начале потока событий или в конце после паузы.

// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log("Scroll handler call on every event stream start");
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );

// На практике режим leading может применяться например в случае когда необходимо выполнить функцию отправки запроса на сервер
// при первом клике кнопки, после чего игнорировать все послудующие клики до паузы.

//! ======================================== Отложенная загрузка ================================================================

//! =================== Атрибут loading =======================

// HTML - атрибут loading тега < img > поддерживается нативно во всех современных браузерах кроме Safari и позволяет браузеру отложить
// загрузку закадровых изображений до тех пор, пока пользователь не прокрутит до них страницу.

{/* <img src="my-image.jpg" loading="lazy" alt="Image description" /> */}

// Поддерживает три значения:

//* lazy - браузер выполнит отложенную загрузку изображения.
//* eager - изображение будет загружено при первой возможности, то есть без отложенной загрузки.
//* auto - браузер сам определяет, выполнять отложенную загрузку или нет. Значение по умолчанию.

//! ====================== Библиотека lazysizes =================

// Чтобы обеспечить кроссбраузерность, то есть совместимость с более старыми браузерами, или такими которые еще не поддерживают это нативно,
// можно использовать ряд существующих JavaScript библиотек.Одни из самых популярных это lazysizes, vanilla - lazyload и lozad.js.
// Выбор библиотеки сводится к набору предоставляемых возможностей и личным предпочтениям.Мы разберем библиотеку lazysizes.

// ИНТЕРЕСНО
// Нативная поддержка лучше и более производительна чем использование библиотек, но они гарантированно работают во всех браузерах и могут
// предоставлять расширенные возможности отложенной загрузки которых еще нет в стандарте.

// Первое что необходимо сделать это подключить библиотеку в проект используя сервис cdnjs.com.
// Тег с ссылкой на скрипт добавляется в конец < body >, также как мы это делали для библиотеки Lodash.

{/* <body>
  <!-- HTML-markup -->

  <!-- Lazysizes library script file -->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <!-- Your script file -->
  <script defer src="path/to/script.js"></script>
</body> */}

// Всем изображениям которые необходимо загружать отложенно задаём класс lazyload и заменяем атрибут src на data - src.
// Это необходимо библиотеке lazysizes для правильной работы.

{/* <img class="lazyload" data-src="path/to/my-image.jpg" alt="Generic alt" /> */}

// Пока изображение загружается можно показывать заполнитель низкого качества.
// Эта техника называется LQIP(Low Quality Image Placeholder).Есть много вариантов реализации LQIP,
// но для начала достаточно будет показывать один стандартный заполнитель вместо всех изображений.
// Для этого добавляем атрибут src, значением которого будет ссылка на это изображение - заполнитель.


// index.html
{/* <img
  class="lazyload"
  src="path/to/lqip-placeholder.jpg"
  data-src="path/to/my-image.jpg"
  alt="Generic alt"
/> */}

// Когда изображение было загружено, библиотека lazysizes добавляет элементу класс lazyloaded.
// Это можно использовать для применения CSS - эффектов в момент загрузки изображения.

// styles.css
// .blur-up {
//   filter: blur(5px);
//   transition: filter 400ms;
// }

// .blur-up.lazyloaded {
//   filter: blur(0);
// }

// После объявления стилей, добавляем класс blur-up тегам <img>.

// index.html
// <img
//   class="lazyload blur-up"
//   src="path/to/lqip-placeholder.jpg"
//   data-src="path/to/my-image.jpg"
//   alt="Generic alt"
// />


//todo ================================================================================================================
//! ================================================ Практика =========================================================
//todo ================================================================================================================

// const buttonRef = document.querySelector('.button_13');
// buttonRef.addEventListener('click', onClick); //? повесил слушателя на родителя (весь DIV)

// function onClick(event) {
//   if (event.target.nodeName !== 'BUTTON') { //? nodeName проверит чтобы мы ловили только собития по кнопке,а не скажем в DIV
//     return;
// }

//   // console.log(event.target); //? получаю ссылку на ребёнка (туда куда нажал) например <button type="button">Кнопка 4</button>
//   // console.log(event.target.textContent); //? например Кнопка 4


//   // onBtnClick(event); //? вызов функции для проверки и установки активного состояния (на одной кнопке)
//   onBtnClickCreateArray(event); //? вызов функции для установки активного состояния (на всех кнопках) и создание массива
// }

// function onBtnClick(evt) {
//   const activeBtn = document.querySelector('.btn-active'); //* проверяем есть ли данный класс

//   // if (activeBtn) { //* проверяем есть ли данный класс, если есть - удалим его (сделали тоже самое в 423строке)
//   //   activeBtn.classList.remove('btn-active');
//   // }
//   activeBtn?.classList.remove('btn-active');

//   evt.target.classList.add('btn-active'); //* установим класс на активную кнопку
// }

// const arrayWithTags = new Set(); //! создали пустой Сэт (множество) - в нём нет повторений как в массиве
// function onBtnClickCreateArray(evt) {
//   evt.target.classList.toggle('btn-active'); //? если класс есть,то снимет его, а если нет добавит
  
//   if (evt.target.classList.contains('btn-active')) {
//     arrayWithTags.add(evt.target.dataset.value); //*добавим тэг в сэт
//   } else {
//     arrayWithTags.delete(evt.target.dataset.value); //*удалим тэг из сэта
//   }
//   console.log(arrayWithTags); // например Set(3) {'Node', 'React', 'JS'}
// }

//todo ======================================================= Colorpicker =======================================================================

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
// ];

// const paletteContainer = document.querySelector('.colorpicker_13');
// const cardsMarkup = createColorCardsMarkup(colors); //* создали строку с разметкой

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup) //* повесили строку с разметкой в класс .colorpicker_13

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) { //? Создаёт разметку из массива элементов
//   const markup = colors.map(({ hex, rgb }) => {
//     return `
//       <div class="colorpicker_13">
//         <div class="color-swatch"
//           data-hex="${hex}"
//           data-rgb="${rgb}"
//           style="background-color: ${hex}">
//         </div>
//         <div class="color-meta">
//           <p>HEX:${hex}</p>
//           <p>RGB: ${rgb}</p>
//         </div>
//       </div>
//     `;
//   }).join('');
//   // console.log(markup[0]);
//   return markup;
// }

// function onPaletteContainerClick(evt) {
//   if (!evt.target.classList.contains("color-swatch")) { //? если клик не по квадрату с цветом то ретурн
//     return
//   }

//   const parentColorCard = evt.target.closest('.colorpicker_13'); //? найдёт ближайшего родителя с классом colorpicker_13

//   removeActiveClass();
//   addActiveClass(parentColorCard);
//   setBobyColor(evt.target.dataset.hex);
// }

// function setBobyColor(color) {
//   document.body.style.backgroundColor = color; //* применим на боди backgroundColor цвет из dataset.hex
// }

// function removeActiveClass() {
//   const currentActiveCard = document.querySelector('.colorpicker_13.is-active'); //* ссылка на два класса вместе

//   if (currentActiveCard) { //* если активный класс есть то удалим его
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveClass(card) {
//   card.classList.add('is-active'); //* добавим активный класс
// }


//todo ========================= Throttle и Debounce практика ===========================================================

//! ========= события движения мышки =================

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCounter = 0;

// // window.addEventListener('mousemove', onMouseMove)  //* повесил слушателя событий на window при движении мышки

// const throttleOnMouseMove = _.throttle(onMouseMove, 500); //* из библиотеки Lodasch с задержкой 500ms
// window.addEventListener('mousemove', throttleOnMouseMove)  //* повесил слушателя событий при движении мышки с методом throttle

// function onMouseMove(evt) { //* функция считает сколько раз сработала функция и выведет данные на экран
//   mouseMoveCounter += 1;

//   coordsOutputRef.textContent = `
//   Кол-во вызовов onMouseMove: ${mouseMoveCounter},
//   X: ${evt.clientX},
//   Y: ${evt.clientY},
//   `;
// }

//!========= события в input =========================

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCounter = 0;

// const debounceInput = _.debounce(onInputChange, 200); //* из библиотеки Lodasch 200ms после остановки ввода

// inputRef.addEventListener('input', debounceInput);

// function onInputChange(evt) {
//   inputCounter += 1;

//   outputRef.textContent = `
//   Кол-во вызовов onInputChange: ${inputCounter},
//   Значение: ${evt.target.value}
//   `;
// }

//todo ================================== Мастерская с поиском ===================================

// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JavaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'Redux' },
//   { label: 'React Router' },
//   { label: 'GraphQL' },
//   { label: 'PostgreSQL' },
//   { label: 'MongoDB' },
// ];

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// }

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300)) //* слушатель на input

// refs.list.innerHTML = createListItems(tech); //? повесили всё в DOM

// function createListItems(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase(); //* запишет в пер.значение из input

//   const filteredItems = tech.filter(t => t.label.toLocaleLowerCase().includes(filter));
//   // отфильтровали только те label которые совпадают с filter

//   refs.list.innerHTML = createListItems(filteredItems);; //? повесили отфильтрованое в DOM
// }

//todo ============== Ленивая загрузка ============================================

if ('loading' in HTMLImageElement.prototype) { //? Если поодерживается ленивая загрузка - переделаем src
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script); //? повесили скрипт если не поддерживается ленивая загрузка
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
  //* повесит слушателя на загрузку и удалит слушателя когда выполнится { once: true }
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear'); //* повесит класс с появлением при загрузке
}

//===========================================================
