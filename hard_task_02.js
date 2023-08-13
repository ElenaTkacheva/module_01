const num1 = +prompt("Введите первое число: ");
const num2 = +prompt("Введите второе число: ");

const minNumber = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log('Введите число!');
    } else {
        if (num1 < num2) return num1;
        return num2;
    }
}
console.log(minNumber(num1, num2));