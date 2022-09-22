//todo ===============================================================================
//! ============================  События ============================================
//todo ===============================================================================


// Событие это сигнал от браузера о том, что на веб - странице что - то произошло.
// События используются для реакции на действия пользователя и исполнения кода связанного с определенным событием.
// Существует много видов событий: мыши, клавиатуры, элементов форм, загрузки изображений, буфера обмена,
// изменение стадии CSS анимации или перехода, изменение размеров окна и много других.

// Одно действие может вызывать несколько событий.Например, клик вызывает сначала mousedown, а затем mouseup и click.
// В тех случаях, когда одно действие генерирует несколько событий, их порядок фиксирован.
// То есть, обработчики вызовутся в порядке mousedown → mouseup → click.

// Для того, чтобы элемент реагировал на действия пользователя, ему необходимо добавить слушателя(обработчик) события.
// То есть функцию, которая будет вызвана, как только событие произошло.

//! =============================== Метод addEventListener() =====================================

// Добавляет слушателя события на элемент.

//* element.addEventListener(event, handler, options);

// event - имя события, строка, например "click".
// handler - коллбэк-функция которая будет вызвана при наступлении события.
// options - необязательный объект параметров с расширенными настройками.

// Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода.

// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);

// На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа.
// Коллбэк - функции будут вызываться в порядке регистрации их в коде.

//======================================== HTML + JS ========================================================================================

{/* <button id="single" class="btn">SINGLE CALLBACK</button>
<hr>
<button id="multiple" class="btn">MULTIPLE CALLBACKS</button> */}

// =============================================================================

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   padding: 1rem;
//   text-align: center;
// }

//=============================================================================

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


//! =============================== Метод removeEventListener() ====================================

// Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener().

//* element.removeEventListener(event, handler, options);

// Для удаления нужно передать ссылку именно на ту коллбэк - функцию, которая была назначена в addEventListener().
// В таком случае для коллбэков используют отдельную функцию и передают её по имени(ссылку).

//======================================== HTML + JS ========================================================================================

{/* <button class="btn" data-action="add">Add Listener</button>
<button class="btn" data-action="remove">Remove Listener</button>
<hr>
<button id="btn" class="btn">Click me</button> */}

//================================================================

// body {
//   padding: 16px;
//   text-align: center;
// }

//================================================================

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });


//! ================================ Ключевое слово this ==========================================
// Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM - элемент на котором висит слушатель.

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Работает
// mango.showUsername();

// // ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener("click", mango.showUsername); // не работает

// // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener("click", mango.showUsername.bind(mango));


//! ================================================  Объект события  ======================================================================

// Чтобы обработать событие, недостаточно знать о том, что это клик или нажатие клавиши, могут понадобиться детали.
// Например текущее значение текстового поля, элемент, на котором произошло событие, встроенные методы и другое.

// Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события.
// Все события происходят от базового класса Event.

// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener("click", handleClick);

// Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции.
// Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

// Некоторые свойства объекта события:

// event.type - тип события.
// event.currentTarget - элемент, на котором выполняется обработчик события.

//======================================== HTML + JS ========================================================================================
// <button type="button" class="btn">Click me</button>

//=======================================================
// body {
//   padding: 16px;
//   text-align: center;
// }

//========================================================
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//   console.log("event type: ", event.type); // event type:  click
//   console.log("currentTarget: ", event.currentTarget); //  <button type="button" class="ourButton">Просто кнопка</button>
// };

// button.addEventListener("click", handleClick);


//! ==================================== метод preventDefault()  Действия браузера по умолчанию ===============================

// Некоторые события вызывают действие браузера встроенное по умолчанию как реакция на определенный тип события.
// Например клик по ссылке инициирует переход на новый адрес, указанный в href, а отправка формы перезагружает страницу.
// Чаще всего это поведение нежелательно и его необходимо отменить.

// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

//======================================== HTML + JS ========================================================================================
{/* <form class="register-form" autocomplete="off">
  <input type="text" name="username" placeholder="Username" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Register</button>
</form> */}

//==================================================================================

// body {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .register-form {
//   display: flex;
//   flex-direction: column;
// }

// .register-form input {
//   margin-bottom: 16px;
//   padding: 8px 12px;
// }

// .register-form button {
//   padding: 12px;
// }

//====================================================================================

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });


//todo ==============================================================================================================
//! =============================================== События клавиатуры ==============================================
//todo ==============================================================================================================

//! =============================== События keypress, keydown, keyup ==============================================
//? Есть два основных события клавиатуры: keydown и keyup.
// В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе.
// Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// console.log("Keydown: ", event.key); //* выводит значение нажатой клавиши
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

// При нажатии клавиши сначала происходит keydown, после чего keyup, когда клавишу отжали.
// На практике, в основном обрабатывают только событие keydown, так как оно происходит быстрее чем keyup и пользователь раньше видит результат нажатия.
// События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные(Ctrl, Shift, Alt, Escape и другие).

// ИНТЕРЕСНО
// Раньше было еще одно событие клавиатуры - keypress.Многие посты на форумах и блогах по - прежнему могут его использовать,
// но будьте осторожны - оно устарело и поддержка в новых браузерах может прекратиться в любой момент.

//! =============================================== Свойства key и code =============================

//? Свойство key возвращает символ сгенерированный нажатием клавиши, принимая во внимание состояние клавиш модификаторов, например Shift, а так же текущий язык.
//? Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками.

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key); //* символ буквальный(j если английский )
//   console.log("code: ", event.code); //* какая клавиша (KeyJ)
// });

//! =============================================== Клавиши-модифкаторы =============================

//? Для обработки комбинации клавиш, например Ctrl + s или любую другую, на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey,
// хранящие булевое значение сигнализирующее о том, была зажата клавиша - модификатор или нет.

// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

// Некоторые комбинации клавиш могут конфликтовать с поведением браузера по умолчанию.Например, Ctrl + d или Command + d делает закладку.
// Нужно стараться проектировать систему комбинаций страницы так, чтобы она не пересекалась со встроенной в браузер.Но, в крайнем случае,
// поведение по умолчанию можно отменить вызвав метод event.preventDefault().

// ИНТЕРЕСНО
// Не так давно, вместо свойств key и code использовали свойство keyCode.Многие посты на форумах и блогах по - прежнему могут использовать его,
// но будьте осторожны - оно устарело, не используйте свойство keyCode.




//todo ==================================================================================================================================
//! ==========================================================События элементов форм ====================================================
//todo ==================================================================================================================================


//! ======================= Событие submit ========================
// Отправка формы происходит при клике по кнопке с атрибутом type = "submit" или нажатии клавиши Enter, находясь в каком - нибудь её текстовом поле.
// Событие submit можно применить для валидации(проверки) формы перед отправкой, так как на объекте события есть много полезных свойств связанных с элементами формы.
// Сабмит формы перезагружает страницу, поэтому не забывайте отменять действие по умолчанию методом preventDefault().

//======================================== HTML + JS ========================================================================================
{/* <form class="form" autocomplete="off">
  <input type="text" name="login" placeholder="Login">
  <input type="password" name="password" placeholder="Password">
  <button class="btn" type="submit">Register</button>
</form> */}

//=============================================================

// body {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .form {
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: center;
//   padding: 32px;
// }

//=============================================================

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// ИНТЕРЕСНО
// Свойство elements DOM - элемента формы содержит обьект со ссылками на все её элементы у которых есть атрибут name.
// Поэтому в примере мы получаем значение полей обращаясь к login.value и password.value.


//! =================================================== Событие change ================================================

// Происходит после изменения элемента формы.Для текстовых полей или textarea событие произойдёт не при каждом вводе символа,
// а при потере фокуса, что не всегда удобно.Например, пока вы набираете что - то в текстовом поле - события нет, но как только фокус пропал,
// произойдет событие change.Для остальных элементов, например select, чекбоксов и радио - кнопок, событие change срабатывает сразу при выборе значения.

//======================================== HTML + JS ========================================================================================
{/* <p>
  Selected option text: <span class="text-output">none</span>
<p>
<p>
  Selected option value: <span class="value-output">none</span>
<p>

  <select class="pizza-select">
    <option value="four_meats">Four Meats</option>
    <option value="royal_cheese">Royal Cheese</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="smoked_salmon">Smoked Salmon</option>
  </select> */}

//==========================================================================
{/* body {
  margin: 16px;
}

select {
  padding: 4px;
} */}

//=============================================================================
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// ИНТЕРЕСНО
// Обратите внимание на полезные свойства при работе с элементом < select > в примере.
// Разберитесь что хранится в свойствах value, selectedIndex и options.


//! ============================================== Событие input ============================================

// Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента, не дожидаясь потери фокуса.
// На практике input это самое главное событие для работы с текстовыми полями формы.

//======================================== HTML + JS ========================================================================================
{/* <input type="text" class="text-input" />
<p>Text field value: <span class="output"></span></p> */}

//=================================================================

// body {
//   margin: 16px;
//   line-height: 1.5;
//   font-family: sans-serif;
//   letter-spacing: 0.5px;
// }

// p {
//   overflow-wrap: anywhere;
// }

// input {
//   width: 100%;
//   max-width: 320px;
//   padding: 8px;
//   font: inherit;
//   letter-spacing: inherit;
// }

//===================================================================

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

//! ==================================== Метод ForData для сбора всех данных с формы =====================================================

// const form = document.querySelector('.js-register-form'); //* привязали класс

// form.addEventListener('submit', onFormSubmit); //*повесил событие отправка формы - вызвать функцию

//   //? сделаем возможность получить данные с формы и создадим объект с данными ====================================
// function onFormSubmit(event) {
//   event.preventDefault();   //*не будет перезагрузки страницы при отправкe формы

//   const formElements = event.currentTarget.elements; //*путь к данным формы

//   const mail = formElements.email.value;  //* полный путь к значению почты
//   const password = formElements.password.value; //* полный путь к значению пароля
//   const subscription = formElements.subscription.value; //* полный путь к значению подписки

//   const formData = {  //* создал объект в который положил данные с формы
//     mail,
//     password,
//     subscription,
//   };

//   console.log(formData); //*например {mail: 'asd@qwe.poi', password: '123eqw', subscription: 'basic'}
// }

//? ====================== если нужно получить все данные с формы а не какие-то отдельно то проще ForData ============
// function onFormSubmit(event) {
//   event.preventDefault();   //*не будет перезагрузки страницы при отправкe формы

//   const formData = new FormData(event.currentTarget); //* запись в переменную всех данных с формы

//   formData.forEach((value, name) => {  //* демонстрация данных в formData
//     console.log(`name:`, name);
//     console.log(`value:`, value); //* например name: email value: asd@qwe.com name: password value: qweR321&qq name: subscription value: basic
//   })
// }


//! ================================================== События focus и blur ==========================================================

// Элемент получает фокус при клике мыши или переходе клавишей Tab.Момент получения фокуса и потери очень важен,
// при получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения и т.п.
// При потере фокуса - проверить введённые данные.

// При фокусировке элемента происходит событие focus, а когда фокус исчезает, например пользователь кликает в другом месте экрана,
// происходит событие blur.Активировать или отменить фокус можно программно, вызвав в коде одноименные методы focus() и blur() у элемента.

//======================================== HTML + JS ========================================================================================
//! ============================================ данные с input (focus, blur, input, change) (патерн объект ссылок) ======================================================
// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

//* сделал тоже самое через патерн ссылок на объект
// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   license: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// }

// refs.input.addEventListener('focus', onInputFocus); //? событие фокус в инпуте
// refs.input.addEventListener('blur', onInputBlur);  //? событие потеря фокуса в инпуте
// refs.input.addEventListener('input', onInputChange); //? запись в переменную каждый раз когда что-то меняется
// refs.license.addEventListener('change', onLisenceChange); //? при срабатывании чекбокса сделаем кнопку активной

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value; //? запись в спан данных введённых с инпута
// }

// function onLisenceChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

//=========================================================================================================
 
// Фокус может быть только на одном элементе страницы в единицу времени и текущий элемент, на котором фокус, доступен как document.activeElement.

// ИНТЕРЕСНО
// Многие элементы не могут получить фокус.Например, если кликнуть по < div >, то фокусировка на нем не произойдет,
// потому что это не интерактивный элемент.


//todo ==================================================================================================================================
//! ==========================================================События мыши ==============================================================
//todo ==================================================================================================================================
// mouseenter - ховер да
// mouseleave - ховер нет
// mouseover - ховер над вложенным элементом
// mouseout - ховер над вложенным элементом
// mousemove - отслеживает все перемещения мышки ("болтливое")


//todo ==================================================================================================================================
//! ========================================================== Практика с модалкой ======================================================
//todo ==================================================================================================================================

