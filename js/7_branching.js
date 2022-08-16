if (5 > 2) {
    console.log("That's True");
}

if (50 > 200) {
    console.log("50 bigger than 200");
} else {
    console.log("50 smaller than 200");
}

// * Условие по зарплате
const salary = 1500;
if (salary <= 500){
    console.log(`У Вас миниамальный доход ${salary}`)
} else if (salary > 500 && salary < 2000) {
    console.log(`У Вас средний доход ${salary}`)
} else if (salary >= 2000) {
    console.log(`У Вас высокий доход ${salary}`)
}

// !Тернарный оператор - если True тогда после ? , если False тогда после:
const balance = 130;
const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";
console.log(message)