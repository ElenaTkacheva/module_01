const generateArray = (length, m, n, parity = '') => {

  const range = Math.abs(n - m) + 1;
  const minNum = Math.min(m, n);

  const newArr = Array.from({ length }, (randomNum, i) => {

  randomNum = Math.floor(Math.random() * range) + minNum;

    switch (parity) {
      case 'odd':
        (randomNum % 2) ? randomNum : randomNum++;
        break;
      case 'even':
        !(randomNum % 2) ? randomNum : randomNum++;
        break;
    }

      return randomNum;
  });

    return newArr;
};

console.log(generateArray(10, -30, 50, 'even'));
console.log(generateArray(8, 100, -100, 'odd'));
console.log(generateArray(12, 90, -1, ''));
