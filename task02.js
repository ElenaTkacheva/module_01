let num = +prompt('Введите число больше 2: ');

const isPrime = (num) => {
    if (num < 2) return false;

    for (let b = 2; b < num; b++) {
        if (num % b === 0) {
            return false;
        }
    }

    return true;
}

console.log(
    isPrime(num) ? `${num} - это простое число` : `${num} - это составное число`
);
