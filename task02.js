let num = +prompt('Введите число: ');

const isPrime = (num) => {
    if (!Number.isInteger(num) || num < 2) return false;

    for (let b = 2; b < num; b++) {
        if (num % b === 0) return false;
    }
    return true;
}

console.log(
    isPrime(num) ? `${num} - это простое число` : `${num} - это не простое число`
    );



