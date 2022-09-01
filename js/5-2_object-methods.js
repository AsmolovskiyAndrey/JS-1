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

// ? При распылении простых типов делается копия а при распылении сложных (объектов) делается копия ссылка

const difficultType = [{ x: 1 }, { y: 2 }, { z: 3 },];
const spreadDiff = [...difficultType];
console.log(difficultType, spreadDiff); // одинаковые массивы, но если изменить в 1-м значение, то поменяется и во 2-м


// * Пример распыления массива с переменными

const lastDayTemperatura = [15, 21, 30];
const toDayTemperatura = [14, 23, 32];
const nextDayTemperatura = [10, 18, 25];

const temperatura = [...lastDayTemperatura, ...toDayTemperatura, ...nextDayTemperatura];
console.log(temperatura); // [15, 21, 30, 14, 23, 32, 10, 18, 25]



//!====================Распыление объектов ======================================

const a = { x: 1, y: 3, }
const b = { x: 5, z: 8, }

const oldSpread = Object.assign({}, a, b); // старый метод (x перзапишется из ключа в переменной b поскольку он позже переменной а)
const newSpread = { ...a, ...b }; // новый метод (x перзапишется из ключа в переменной b поскольку он позже переменной а)

console.log(oldSpread); // {x: 5, y: 3, z: 8}
console.log(newSpread); // {x: 5, y: 3, z: 8}


//!==================================Деструктуризация (распоквка) объекта ========================================================
//! {} = (распакует в фигурные скобки в переменную(-ые) перед равно объект который стоит после =)


const myList = {
    nameList: "My super list",
    rating: 5,
    tracks: ['Track - 1', 'Track - 2', 'Track - 3',],
    trackCount: 3,
    getNah() {
        console.log("Ага это метод getNah");
    },
}

const { nameList, tracks: myTracks, autor = "Без Автора" } = myList; // * запишет в переменные name и tracks значения с таких же ключей в объекте myList
//* создаст переменную myTracks в которую положит значение ключа tracks , autor сделаем значение по умолчанию (если её не будет в myList) подставим её
console.log(nameList, ...myTracks, autor); // My super list Track - 1 Track - 2 Track - 3 Без Автора


//*==========================Глубокая деструктуризация (вложенного объекта)============================================

const deepArray = {
    aaa: 10,
    bbb: 20,
    ccc: 30,
    ddd: 40,
    eee: {
        e1: -10,
        e2: -20,
    }
}

const { aaa, bbb, ccc, ddd, eee: { e1, e2 } } = deepArray;
console.log(aaa, bbb, ccc, ddd, e1, e2); // 10 20 30 40 -10 -20

//*============================================Дестректуризация массивов==============================================


const mas = [12, 45, 500];
const [first, , third] = mas; // пропутим 45 поставив пробел
console.log(first, third); // 12 500


//* =========================================== Rest (сбор) ========================================================

const myList2 = {
    nameList: "My super list",
    rating: 5,
    tracks: ['Track - 1', 'Track - 2', 'Track - 3',],
    trackCount: 3,
    getNah() {
        console.log("Ага это метод getNah");
    },
}


//? достанем только 2-е переменные остальные оставим в объекте restName
const { nameList: newList, rating, ...restName } = myList2;
console.log(newList, rating, restName); // My super list 5 {tracks: Array(3), trackCount: 3, getNah: ƒ}


//!============================================== Патерн объект настроек ==============================================
//? Делается если в функцию передаём 3 и более парамтров чтобы не было ...

// function func(name, surname, age, rating) {
//     console.log(name, surname, age, rating);
// }
// func("Andrii", "Asmolovskyi", "39", "4.7"); // Andrii Asmolovskyi 39 4.7

const myInfo = {
    name: "Andrii",
    surname: "Asmolovskyi",
    age: 39,
    rating: 4.7,
};

//* Деструктуризация внутри функции

function showPatern(params) {
    const { name, surname, ...restArray } = params;
    console.log(name, surname, restArray); // Andrii Asmolovskyi {age: 39, rating: 4.7}
}

showPatern(myInfo);


//* Деструктуризация при объявлении функции

function showPaternIn({ name, surname, ...restArray }) {
    console.log(name, surname, restArray); // Andrii Asmolovskyi {age: 39, rating: 4.7}
}

showPaternIn(myInfo);