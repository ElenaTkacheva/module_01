'use strict';

const recursion = (array) => {
  const newArray = [Math.floor(Math.random() * 11), ...array];

  return newArray.reduce((acc, num) => acc + num) >= 50 ?
    newArray : recursion(newArray);
};

console.log(recursion([8, 10, 12]));
