'use strict';

const min = Math.ceil(1);
const max = Math.floor(100);

const randomNumber = Math.floor(Math.random() * (max - min)) + min;

const guessTheNumber = () => {
  const userNumber = prompt('Введите любое число от 1 до 100');

  switch (true) {
    case isNaN(userNumber):
      alert('Введите число!');
      break;

    case userNumber === null:
      alert('Игра закончена');
      break;

    case parseInt(userNumber) > randomNumber:
      alert('Меньше!');
      break;

    case parseInt(userNumber) < randomNumber:
      alert('Больше!');
      break;

    case parseInt(userNumber) === randomNumber:
      alert('Правильно!');
      false;
  }

  guessTheNumber();
};

const game = () => {
  const number = randomNumber();

  guessTheNumber(number);

  return number;
};

console.log(game());


