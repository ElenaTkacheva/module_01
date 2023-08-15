const generateArray = (length, m, n) => {
  const newArr = [...Array(length)];
  const range = Math.abs(n -m) + 1;
  const minNum = Math.min(m, n);

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Math.floor(Math.random() * range) + minNum;
  }
  return newArr;
};

console.log(generateArray(10, -50, 50));
