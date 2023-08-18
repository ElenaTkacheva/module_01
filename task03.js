const generateArray = (length, m, n, ) => {
  const newArr = [];
  const range = Math.abs(n - m) + 1;
  const minNum = Math.min(m, n);
//   if (parity && !["even", "odd"].includes(parity)) return [];

  while (newArr.length < length) {

    const randomNum = Math.floor(Math.random() * range) + minNum;

    if (newArr.includes(!'even')) return newArr;
    if (parity) {
      const evenNum = randomNum % 2;
      if (parity === "even" && evenNum) continue;
      if (parity === "odd" && !evenNum) continue;
    }
    newArr.push(randomNum);
  }
  return newArr;
};

console.log(generateArray(10, -30, 50, 'even'));
console.log(generateArray(8, 100, -100, 'odd'));
