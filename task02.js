let num = +prompt('Введите число больше 2: ');

if (num < 2) {
    console.log("Пожалуйста, введите число больше 2");
} else {

    const isPrime = (num) => {

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
}


