const salary = +prompt("Какая ваша заработная плата?");

if (salary >= 50000) {
  console.log(`Ваш налог составляет ${salary * 0.3} от полученого дохода`);
} else if (salary >= 15000) {
  console.log(`Ваш налог составляет ${salary * 0.2} от полученого дохода`);
} else if (salary >= 0) {
  console.log(`Ваш налог составляет ${salary * 0.13} от полученого дохода`);
} else {
  console.log(`Ваш налог составляет 0`);
}
