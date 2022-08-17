const message = "В этой строке 26 символов.";
console.log(message.length);
// покажет длину строки 26

// Выведем приглашение
// Гость (Фамилия) (Имя) заселится в (класс) класс (номер) номер
const surname = "Asmolovskyi";
const nameGuest = "Andrii";
const clasRoom = "VIP";
const room = 207;
console.log(`Гость ${surname} ${nameGuest} заселится в ${clasRoom} класс ${room} номер`);

// привести всё к маленькому и большому регистру
const brand = "samSunG"
const NormBrandSmall = brand.toLowerCase();
const NormBrandLarge = brand.toUpperCase();
console.log(NormBrandSmall, NormBrandLarge);
// сделаем первую заглавную , остальные маленькие / slice отрезает с 1-го индекса и дальше
const NBrand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
console.log(NBrand);

// поиск в строке с методом includes
const word = "spam";
const word1 = 'реклама';
const stringAll = "Самая большая распродажа обуви. Это не реклама !"
console.log(stringAll.includes(word));  // ответ false 
console.log(stringAll.includes(word1)); // ответ true