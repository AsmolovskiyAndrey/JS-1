export default function () {
    console.log("Экспорт default в 15-16_Node");
};

//========================= Для 1-го способа

const sqrt = Math.sqrt;
export const square = x => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));

//========================== Для 2-го способа

const sqrt2 = Math.sqrt;
const square2 = x => x * x;
const diag2 = (x, y) => sqrt(square2(x) + square2(y));

export { square2, diag2 };

// ========================= Для 3-го способа

export const a = 123;
export const b = 'asd';