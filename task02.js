'use strict';

const recursion = (array) => {
  const newNum = Math.floor(Math.random() * 11);
  array.push(newNum);
  const sum = array.reduce((acc, num) => acc + num);
  if (sum >= 50) {
    return array;
  } else return recursion(array);
};

console.log(recursion([8, 10, 12]));
