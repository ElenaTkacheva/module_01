const generateArray = (length, n, m) =>
  [...new Array(length)].map(() => Math.floor(Math.random(n, m) * 100) + 1);

console.log(generateArray(10, -1, -100));
