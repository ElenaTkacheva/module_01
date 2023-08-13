const taxScale = [
    [.3, 50000],
    [.2, 15000],
    [.13, 0]
]

const balance = +prompt("Какая ваша заработная плата?");
let tax = 0;
let rest = balance;

for (let i = 0; i < taxScale.length; i++) {
    const [rate, limit] = taxScale[i];

    if (rest > limit) {
        tax += (rest - limit) * rate;
        rest = limit;
    }
}


    // if (rest > secondLimit) {
    //     tax = (rest - secondLimit) * highTax;
    //     rest = secondLimit;
    // }

    // if (rest > firstLimit) {
    //     tax += (rest - firstLimit) * middleTax;
    //     rest = firstLimit;
    // }

    // if (rest > 0) {
    //     tax += rest * lowTax;
    //     rest = 0;
    // }

    console.log(`Ваш налог составляет: ${tax} `);







