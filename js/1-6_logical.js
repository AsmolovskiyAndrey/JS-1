console.log(Boolean(0)); //True
console.log(Boolean(-23)); //False

// Логическое И && - вернёт или последнее True или первоe False
console.log(2 && 45 && 'hello'); // hello
console.log(2 && 0 && 'hello'); // 0

// Логическое ИЛИ || - вернёт первое True или последнее False
console.log(2 || 45 || 'hello'); // 2
console.log(false || 0 || null); // null

// Логическое НЕ ! приводит к булевому значению и делает инверсию
console.log(!true); // False
console.log(!1); // False