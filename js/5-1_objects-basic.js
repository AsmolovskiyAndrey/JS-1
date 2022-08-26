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