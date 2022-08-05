let widht = "50.5px";
const result = Number.parseInt(widht);
console.log(result);
// запишет в result челое число (будет идти до первого не числа, и только целое) т.е. 50

let height = "50.5px";
height = Number.parseFloat(height);
console.log(height);
// запишет в height челое число (будет идти до первого не числа) т.е. 50.5

let salary = 2150.234;
salary = Number(salary.toFixed(2));
console.log(salary);
// покажет только 2 цифры после запятой toFixed(2)

