const leapYear = (m, n) => {
  const arr = [];
  const range = Math.abs(n - m);
  const minNum = Math.min(m, n);

  for (let i = minNum; i <= range; i++) {
    if (
      (i % 4 === 0 && i % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      arr.push(i);
    } 
  }

  return arr;
}



console.log(leapYear(-10, 1000));
console.log(leapYear(2000, 1800));