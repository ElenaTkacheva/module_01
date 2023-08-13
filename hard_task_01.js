let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите первое число: ");

const commonDivisor = (num1, num2) => {
  if (num2 > 0) {
    let divisor = num1 % num2;
    return commonDivisor(num2, divisor);
  } else {
    return num1;
  }
};

console.log(
  `наибольший общий делитель двух чисел - ${commonDivisor(num1, num2)}`
);
