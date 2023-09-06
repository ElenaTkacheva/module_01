'use strict';

const arr = [8, 10, 12];

const recursion = (arr, maxSum = 50) =>
  (arr.reduce((sum, num) => sum + num) > maxSum ?
    [...arr] :
    recursion([...arr, Math.floor(Math.random() * 11)], maxSum));

console.log(recursion(arr), arr);
