const friends = ["Mango", "Kiwi", "Poly", "Ajax",]; //? Создали массив
console.table(friends); //? Удобный вывод для массивов
console.log(friends[1]); //* Вывод Kiwi - элемент массива
friends[1] = 'Appel' //* изменил элемент массива
console.log(friends); //*['Mango', 'Appel', 'Poly', 'Ajax']

//* Переберём массив по индексу и по значению
for (let i = 0; i < friends.length; i += 1){
    friends[i] += " + add comething"; //? Добавил + add comething на каждой итерации
    console.log(i, friends[i]); //* Вывод индесков и значений массива 
}

//* Переберём массив по значению (если не нужно изменить значения или не нужны индексы)
for (let oneFriend of friends) {
    console.log(oneFriend); //* Вывод значений массива 
}

