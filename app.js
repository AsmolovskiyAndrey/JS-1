console.log("Привет из Node.js");

const Joi = require('joi'); //?импорт данных из библиотеки
const shortid = require('shortid'); //?импорт данных из библиотеки

console.log(shortid.generate());
// //* сгенерирует пароль (например JdA9UFdxG)

const passwordMy = Joi.string().min(3).max(10).alphanum();
// //* проверит чтобы пароль был строкой от 3-х до 10-ти символов(без спец символов)

console.log(passwordMy.validate('qweqwe12'));