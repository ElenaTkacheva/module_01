const calculate = (sum, quantity, promo) => {
    let totalSum = sum;

    if (quantity >= 10) {
        totalSum -= sum * 0.03;
        console.log(`Товаров больше 10, сумма к оплате ${totalSum}`);
    }

    if (sum >= 30000) {
        totalSum -= (sum - 30000) * 0.15;
        console.log(`Сумма больше 30000, к оплате ${totalSum}`);
    }

    if (promo === 'METHED') {
        totalSum -= sum * 0.1;
        console.log(`Промокод равен "METHED", сумма к оплате ${totalSum}`);
    }

    if (promo === 'G3H2Z1' && totalSum >= 2000) {
        totalSum -= 500;
        console.log(`Промокод равен "G3H2Z1", сумма к оплате ${totalSum}`);
    }

    console.log(`Сумма к оплате ${totalSum}`);
}

calculate();