// ! При наведении на элемент будем его увеличивать
let w = 50;
function bigger() {
    w += 1;
    document.querySelector('.box').style.width = w + 'px';
}

document.querySelector(".box").addEventListener('mousemove', bigger); // работает по наведению

// document.querySelector(".box").oncick = bigger; // работает по клику