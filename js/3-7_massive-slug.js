// ! Делаем slug в URL названия статьи
// Заголовок состоит только из букв и пробелов
// - Нормализуем строку
// - Разбиваем по словам
// - Сшиваем в строку с разделителем
//- Должно получится top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
// let words = title.split(' '); // сделает массив со словами
// console.log(words);
// let slugWords = words.join('-').toLowerCase();
// console.log(slugWords);
//! или так в 1-у строку
const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);