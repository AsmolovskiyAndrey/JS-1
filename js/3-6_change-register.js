//! Напиши скрипт который заменяет регистр каждого символа на противоволожный
// Например "JavaScriot" = "jAVAsCRIPT"
const string = 'JavaScript';
const letters = string.split(''); // сделает массив с буквами
let finallLetters = '';
for (const letter of letters) {
    // if (letter === letter.toLowerCase()) {
    //     finallLetters += letter.toUpperCase();
    // } else {
    //     finallLetters += letter.toLowerCase();
    // }
    // ! Можно так через тернарный оператор
    finallLetters += letter === letter.toLowerCase()
    ? letter.toUpperCase()
    : letter.toLowerCase();
}
console.log(finallLetters);