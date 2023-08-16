const guessTheNumber = () => {
  min = Math.ceil(1);
  max = Math.floor(100);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  while (true) {
    let userNumber = prompt("Введите любое число от 1 до 100");

    if (isNaN(userNumber)) {
      alert("Введите число!");
      continue;
    }

    if (userNumber === null) {
      alert("Игра закончена");
      break;
    }

    if (parseInt(userNumber) === randomNumber) {
      alert("Правильно!");
      break;
    } else if (parseInt(userNumber) > randomNumber) {
      alert("Меньше!");
    } else if (parseInt(userNumber) < randomNumber) {
      alert("Больше!");
    }
  }
};

guessTheNumber();
