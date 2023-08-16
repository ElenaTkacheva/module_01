const leapYear = (m, n) => {
  let arr = [];
  for (let i = m, j = 0; i <= n; i++, j++) {
    arr[j] = i;
  }

  return arr
    .map((year) =>
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
        ? year
        : false
    )
    .filter((year) => parseInt(year));
}

console.log(leapYear(-10, 2000));