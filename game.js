'use strict';

(() => {
  const FIGURES_RUS = {
    ножницы: 'камень',
    камень: 'бумага',
    бумага: 'ножницы',
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const lang = Object.keys(FIGURES_RUS);

    const victory = FIGURES_RUS;

    const result = {
      player: 0,
      computer: 0,
      get winner() {
        return this.player > this.computer ? 'Вы выиграли!' :
          this.player < this.computer ? 'Вы проиграли' : 'Ничья!';
      },
    };

    const announceWinner = (userWord, computerWord, winner) => {
      alert(`Компьютер: ${computerWord}
        Игрок: ${userWord}
        Итог игры: ${winner}`);
    };

    const checkCorrect = (str, arr) => {
      let i = 0;
      if (str === null) {
        return null;
      }

      const word = (str) => {
        if (i >= arr.length) {
          return null;
        } else if (str.toLowerCase()[0] === arr[i][0] &&
          arr[i].includes(str.toLowerCase())) {
          return arr[i];
        }
        i++;
        return word(str);
      };
      return word(str.trim());
    };

    const chooseWinner = (userWord, computerWord, winner) => {
      if (userWord === winner) {
        result.player += 1;
        announceWinner(userWord, computerWord, 'Вы выиграли!');
      } else {
        result.computer += 1;
        announceWinner(userWord, computerWord, 'Вы проиграли');
      }
    };

    return function start() {
      const play = () => {
        const userWord = prompt(`${lang.join(', ')}?`);
        const computerWord = lang[getRandomIntInclusive(0, 2)];
        const correctWord = checkCorrect(userWord, lang);

        if (userWord === null) {
          if (confirm('Точно ли вы хотите выйти?')) {
            return null;
          }
        }

        if (correctWord) {
          if (correctWord === computerWord) {
            announceWinner(correctWord, computerWord, 'Ничья!');
          } else {
            chooseWinner(
              correctWord,
              computerWord,
              victory[lang[lang.indexOf(computerWord)]],
            );
          }

          if (!confirm('Еще?')) {
            return null;
          }
        }

        play();
      };

      play();
      announceWinner(result.player, result.computer, result.winner);
    };
  };

  window.RPS = game;
})();
