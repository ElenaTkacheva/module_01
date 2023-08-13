const lowTax = 0.13;
const middleTax = 0.2;
const highTax = 0.3;
const firstLimit = 15000;
const secondLimit = 50000;

let salary = +prompt("Какая ваша заработная плата?");

if (salary >= secondLimit) {
  console.log(`Ваш налог составляет ${salary * highTax} от полученого дохода`);
} else if (salary >= firstLimit) {
  console.log(`Ваш налог составляет ${salary * middleTax} от полученого дохода`);
} else if (salary >= 0) {
  console.log(`Ваш налог составляет ${salary * lowTax} от полученого дохода`);
} else {
  console.log('Ваш налог составляет 0 от полученого дохода');
}
