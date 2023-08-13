const lowTax = 0.13;
const middleTax = 0.2;
const highTax = 0.3;
const firstLimit = 15000;
const secondLimit = 50000;

let tax = 0;
let balance = +prompt("Какая ваша заработная плата?");


if (balance <= 0) {
    console.log(`Ваш налог составляет: ${tax} `);
} else {
    if (balance > secondLimit) {
        tax = (balance - secondLimit) * highTax;
        balance = secondLimit;
    }

    if (balance > firstLimit) {
        tax += (balance - firstLimit) * middleTax;
        balance = firstLimit;
    }

    if (balance <= firstLimit) {
        tax += balance * lowTax;
    }

    console.log(`Ваш налог составляет: ${tax} `);
}






