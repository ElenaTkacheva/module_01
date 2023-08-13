let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите второе число: ");

const minNumber = (num1, num2) => {
    if (Number.isInteger(num1) || Number.isInteger(num2)) {
        if (num1 < num2) return num1;
        return num2;
    } else {
        console.log(('Введите число!'));
    }
}
console.log(minNumber(num1, num2));