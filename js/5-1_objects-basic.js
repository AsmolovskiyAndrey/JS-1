// ! Создаём объект
const myObject = {
    name: "Мой плейлист",
    tracks: ["Трек-1", "Трек-2", "Трек-3",],
    rating: 4.9,
    trackCount: 3,
};

console.log(myObject); // весь объект {name: 'Мой плейлист', tracks: Array(3), rating: 4.9, trackCount: 3}
console.log(myObject.tracks); // доступ к значению свойства ['Трек-1', 'Трек-2', 'Трек-3']
console.log(myObject['tracks']); // то же самое доступ к значению свойства ['Трек-1', 'Трек-2', 'Трек-3']

//? Подставим значение из переменной в ключ
const myLoveTracks = 'tracks'; // подставим ключ как строку 'tracks'
console.log(myObject[myLoveTracks]); // подставим ключ как переменную myLoveTracks в которой строка 'tracks'

//!  Подставим имя переменной в ключ а её значание в значение ключа
const first = "Первое значение";
const second = 1234.21;
const third = 'google.com';

const myData = {
    first: first,
    second, // ? Если ключ и значения с одинаковым названием то можем использовать сокращённую форму
    // ? то же самое что second: second,
    third: third,
};

console.log(myData); // {first: 'Первое значение', second: 1234.21, third: 'google.com'}

//! Вычисляемое значение
const inputName = "color";
const inputValue = "tomato";

const myColor = {
    [inputName]: inputValue, //? вычислит значение у переменной inputName = "color".
}

console.log(myColor); //? {color: 'tomato'}


//! Изменнение свойств объекта
myColor.secondColor = 'blue'; // если свойства нет оно добавиться
myColor.color = 'red'; // если свойство есть оно перезапишется
console.log(myColor); //? {color: 'red', secondColor: 'blue'}