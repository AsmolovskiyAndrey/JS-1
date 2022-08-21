//! Работаем с коллкцией карточек в trello
// метод splice()
// удалить
// добавить
// обновить

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5',];
console.table(cards);

// удалить
const cardToRemove = 'Карточка-3'
const index = cards.indexOf(cardToRemove); // запишем в index карточку для удаления
cards.splice(index, 2); // удалит 2 элемента начиная с index
console.log(cards); // ['Карточка-1', 'Карточка-2', 'Карточка-5']

//добавим в нужное место(перед индексом 2)
cards.splice(2, 0, 'Карточка-2.1', 'Карточка-2.2')
console.log(cards);// ['Карточка-1', 'Карточка-2', 'Карточка-2.1', 'Карточка-2.2', 'Карточка-5']

//заменить
cards.splice(2, 2, 'New_Card', 'asdas') // заменили со 2-го индекса на новые записи (2-е кортачки)
console.log(cards);//['Карточка-1', 'Карточка-2', 'New_Card', 'asdas', 'Карточка-5']