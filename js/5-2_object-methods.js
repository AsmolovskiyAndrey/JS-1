// ! Методы в объектох

const playlist = {
    name: "My super list",
    rating: 5,
    tracks: ['Track - 1', 'Track - 2', 'Track - 3',],
    trackCount: 3,
    getName: function() {
        console.log("Ага это метод getName");
    }, // ? Старое написание (можно как ниже без : и function)

    getName1() {
        console.log("Ага это метод getName1");
    },
}
playlist.getName(); // Ага это метод getName

// ? =================THIS===========================
// ? this это ссылка на тот объект который вызвал функцию

const playlist1 = {
    name: "My super list",
    rating: 5,
    tracks: ['Track - 1', 'Track - 2', 'Track - 3',],
    trackCount: 3,
    changeName(newName) {
        this.name = newName;
    },
};

playlist1.changeName('New playlist');
console.log(playlist1); // {name: 'New playlist', rating: 5, tracks: Array(3), trackCount: 3, changeName: ƒ}