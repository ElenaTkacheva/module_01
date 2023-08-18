const leapYear = (m, n) => {
  const range = Math.abs(n - m);
  const minNum = Math.min(m, n);

  const arr = Array.from({ length: range + 1 }, (year, i) => {
    return minNum + i;
  }).filter(
    (year) =>
      (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
  );

  return arr;
}



console.log(leapYear(-10, 1000));
console.log(leapYear(2000, 1800));