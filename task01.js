'use strict';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const guessTheNumber = (num) => {
  const userNumber = prompt('Введите любое число от 1 до 100');

  switch (true) {
    case isNaN(userNumber):
      alert('Введите число!');
      break;

    case userNumber === null:
      alert('Игра закончена');
      return;

    case parseInt(userNumber) > num:
      alert('Меньше!');
      break;

    case parseInt(userNumber) < num:
      alert('Больше!');
      break;

    case parseInt(userNumber) === num:
      alert('Правильно!');
      return;
  }

  guessTheNumber(num);
};

const game = () => {
  const number = randomNumber();
  guessTheNumber(number);

  return `Загаданное число ${number}`;
};

console.log(game());


