const num1 = +prompt("Введите первое число: ");
const num2 = +prompt("Введите второе число: ");

const minNumber = (num1, num2) => (num1 < num2) * num1 + (num2 < num1) * num2;

console.log(!minNumber(num1, num2) ? "Введите число" : minNumber(num1, num2));