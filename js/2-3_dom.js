// ! Как получить ссылку на документ
const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('.js-reset');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output_span');

let total = 0;

btnAdd.addEventListener('click', function () { // свяжет кнопку при клике
    console.log('click ahaha');
    const value = Number(valueInput.value); // конвертация в число из строки
    console.log(value);
    total += value;
    outputEl.textContent = total; // заменит сумму в span на total
    valueInput.value = ''; // обнулит ввод при клике
})

btnReset.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
})