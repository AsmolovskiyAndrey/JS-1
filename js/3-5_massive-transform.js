//! Напиши скрипт которые объединит все элементы в одну строку
//пусть элементы будут разделены запятой
// - Сначала через FOR
// - Потом через join()

// - Сначала через FOR
const friends = ['Andrii', 'Kris', 'Kira', 'Alina'];
let string = '';
for (const friend of friends) {
    string += `${friend} ,`
}
string = string.slice(0, -1); // отрезал последнюю запятую
console.log(string); // Andrii ,Kris ,Kira ,Alina

// - Потом через join()
const friends1 = ['Andrii', 'Kris', 'Kira', 'Alina'];
const string1 = friends1.join(', ');
console.log(string1); // Andrii ,Kris ,Kira ,Alina