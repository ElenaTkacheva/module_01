'use strict';

(() => {
  const FIGURES_RUS = {
    figure: ['камень', 'ножницы', 'бумага'],
    winner: 0,

    whoWinner() {
      const i = this.figure.indexOf(this.userWord);

      if (this.figure[i] === this.computerWord) {
        this.winner = 0;
      } else if (i === 2 && this.figure[0] === this.computerWord) {
        this.winner = 1;
      } else if (this.figure[i + 1] === this.computerWord) {
        this.winner = 1;
      } else {
        this.winner = 2;
      }
    },

    get getUserWord() {
      return this.userWord;
    },

    set whatUserWord(value) {
      this.userWord = value;
    },

    set whatComputerWord(value) {
      this.computerWord = FIGURES_RUS.figure[value];
    },
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const checkCorrect =
      () => {
        const userWord = prompt(
          `${FIGURES_RUS.figure[0][0].toUpperCase()}` +
          `${FIGURES_RUS.figure.join(', ').substring(1)}?`);

        if (userWord === null) {
          return null;
        }

        for (const item of FIGURES_RUS.figure) {
          if (userWord.toLowerCase()[0] === item[0] &&
            item.includes(userWord.toLowerCase())) {
            FIGURES_RUS.whatUserWord = item;
            return item;
          }
        }
        return checkCorrect();
      };

    return function start() {
      const play = () => {
        const userWorld = checkCorrect();
        if (userWorld === null) {
          return null;
        }

        FIGURES_RUS.whatComputerWord = getRandomNumber(0, 2);
        FIGURES_RUS.whoWinner();

        if (FIGURES_RUS.winner === 0) {
          alert(
            `Игрок: ${FIGURES_RUS.userWord}\n` +
            `Бот: ${FIGURES_RUS.computerWord}\n` +
            `Ничья!`);
        } else if (FIGURES_RUS.winner === 1) {
          alert(`Игрок: ${FIGURES_RUS.userWord}\n` +
            `Бот: ${FIGURES_RUS.computerWord}\n` +
            `Игрок победил! Вы ходите первый`);
          return 0;
        } else {
          alert(`Игрок: ${FIGURES_RUS.userWord}\n` +
            `Бот: ${FIGURES_RUS.computerWord}\n` +
            `Бот победил! Он ходит первый`);
          return 1;
        }
        return play();
      };
      return play();
    };
  };

  window.RSP = game;
})();
