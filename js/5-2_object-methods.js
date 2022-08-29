// !===================== Методы в объектох =============================================

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
    addTrack(newTrack) {
        this.tracks.push(newTrack);
        this.trackCount = this.tracks.length;
    },
    getTrackCount() {
    return this.tracks.length;
    },
};

playlist1.changeName('New playlist'); // изменили значение ключа name через метод (функцию)
playlist1.addTrack('Metallica-Unforgiven'); // добавили значение ключа через метод (функцию)
console.log(playlist1); // {name: 'New playlist', rating: 5, tracks: Array(3), trackCount: 3, changeName: ƒ}
console.log(playlist1.getTrackCount()); // покажет актуальное количество треков 4


// ! ================= итерация объекта ==========================================


// ! Получить массив ключей или значений можно с помощью Object

const feedback = {
    good: 5,
    neutral: 10,
    bad: 2,
};

const keys = Object.keys(feedback); //*  массив ключей
console.log(keys); // ['good', 'neutral', 'bad'] покажем ключи

const values = Object.values(feedback); //*  массив ключей
console.log(values); // [5, 10, 2] покажем значения

for (const key of keys) {
    console.log(`Ключ ${key} : значение ${feedback[key]}`);
} // Покажем ключи и их значения
// Ключ good : значение 5
// Ключ neutral : значение 10
// Ключ bad : значение 2

// ! ====================Массив объектов=================================

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);


// * Доступ к элементам массива

for (const friend of friends) {
    console.log(friend); // {name: 'Mango', online: false} и так по всем
    console.log(friend.name); // доступ к ключам объекта
    console.log(friend.online); // доступ к значениям объекта
    friend.massage = "Hi"; //добавит к каждому элементу новый ключ со значением
}

console.table(friends);

// * Ищем друга по имени - если есть вернём "нашли" если нет вернём "не нашли"

function findFriend(array, nameFriend) {
    for (const friend of array) {
        if (friend.name === nameFriend) {
            return `Нашли ${nameFriend}`;
        }
    }
    return `Не нашли ${nameFriend}`;
}

console.log(findFriend(friends, 'Poly')); // Нашли Poly



// * Создадим новый массив с именами с нашего friends

function createArrayNames(array) {
    const newArrayNames = [];
    for (const friend of array) {
        newArrayNames.push(friend.name);
    }
    return newArrayNames;
}

console.log(createArrayNames(friends)); // ['Mango', 'Kiwi', 'Poly', 'Ajax']

// * Создадим массив с инфой если друг онлайн

function isFriendOnline(array) {
    const newArrayOnline = [];
    for (const friend of array) {
        if (friend.online === true) {
            newArrayOnline.push(friend);
        }
    }
    return newArrayOnline;
}

console.log(isFriendOnline(friends)); // вернёт массив из 2-х объектов


// * Создадим объект с двумя ключами "online" и "offline" и со значениями в виде друзей

function newNormaliseArray(array) {
    const newNormArray = { // ? Создали пустой объект с двумя ключами
        online: [],
        offline: [],
    };

    for (const friend of array) { // ? Добавляем имя в объект с нужным ключом
        if (friend.online) {
            newNormArray.online.push(friend.name)
        } else {
            newNormArray.offline.push(friend.name)
        }
    }

    return newNormArray;
}

console.log(newNormaliseArray(friends));


//! ================concat    spread========================================


//* Объединение массивов

const allarray = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]); //! concat
const allarray1 = [ ...[1, 2, 3],...[4, 5, 6],...[7, 8, 9]]; //! spread
console.log(allarray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(allarray1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ? Распылим массив [1, 2, 3] с помощью ... всё что есть преобразуется в значения и запишется в один массив

const spreadArray = [12, 31,...[1, 2, 3], 6, 7];
console.log(spreadArray); //[12, 31, 1, 2, 3, 6, 7]


// * Найдём самое маленькое и самое большое число в массиве через распыление поскольку без него фун-ия max,min не работает

const numbersToFind = [1, 34, 67, 234, 78, 93, 234, -23, -67, -456, -3];
const maxNumber = Math.max(...numbersToFind); //? распылили массив в значения с которыми может работать max,min
const minNumber = Math.min(...numbersToFind);
console.log(`maxNumber = ${maxNumber},minNumber = ${minNumber}`); // maxNumber = 234,minNumber = -456

