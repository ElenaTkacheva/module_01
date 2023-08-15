const generateArray = (length) =>
  [...new Array(length)].map(() => Math.floor(Math.random() * 100) + 1);

console.log(generateArray(10));
