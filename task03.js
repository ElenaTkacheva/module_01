const generateArray = (length, m, n, parity) => {
  const newArr = [];
  const range = Math.abs(n - m) + 1;
  const minNum = Math.min(m, n);

  while (newArr.length < length) {
    const randomNum = Math.floor(Math.random() * range) + minNum;

    if (
      (randomNum % 2 === 0 && parity === "even") ||
      (randomNum % 2 === 1 && parity === "odd")
    ) {
      newArr.push(randomNum);
    }
  }
  return newArr;
};

console.log(generateArray(10, -30, 50, 'even'));
console.log(generateArray(8, 100, -1000, 'odd'));
