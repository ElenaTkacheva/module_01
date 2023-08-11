const calculate = (sum, quantity, promo) => {
    let totalSum = sum;

    if (quantity >= 10) {
        totalSum -= sum * 0.03;
    }

    if (sum >= 30000) {
        totalSum -= (sum - 30000) * 0.15;
    }

    if (promo === 'METHED') {
        totalSum -= sum * 0.1;
    }

    if (promo === 'G3H2Z1' && totalSum >= 2000) {
        totalSum -= 500;
    }

    return totalSum;
}

const sum1 = calculate(30000, 3, '');
console.log('sum1: ', sum1);
const sum2 = calculate(10000, 10, '');
console.log("sum2: ", sum2);
const sum3 = calculate(15000, 2, "METHED");
console.log("sum3: ", sum3);
const sum4 = calculate(5000, 1, "G3H2Z1");
console.log("sum4: ", sum4);