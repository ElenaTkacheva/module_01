'use strict';

(() => {
  const MARBLES = {
    userCount: 5,
    botCount: 5,
    playerOne: 'Игрок',
    playerTwo: 'Бот',

    corrNumber() {
      if (this.userCount > 10) {
        this.userCount = 10;
        this.botCount = 0;
      }

      if (this.botCount > 10) {
        this.userCount = 0;
        this.botCount = 10;
      }
    },

    changeCount(ballCount, computerQuestion) {
      const multiplyer = this.playerOne === 'Бот' ? 1 : -1;

      if (ballCount % 2 === computerQuestion) {
        this.botCount -= ballCount * multiplyer;
        this.userCount += ballCount * multiplyer;
      } else {
        this.botCount += ballCount * multiplyer;
        this.userCount -= ballCount * multiplyer;
      }
      this.corrNumber();
    },

    reset() {
      this.userCount = 5;
      this.botCount = 5;
    },

    get getCount() {
      return `Количество шариков: 
        Бот: ${this.botCount}
        Игрок: ${this.userCount}`;
    },

    get winner() {
      if (this.userCount >= 10) {
        return `Вы победили!\n${this.getCount}`;
      }
      return `Бот победил!\n${this.getCount}`;
    },

    set whoPlayerOne(player) {
      this.playerOne = player;
    },

    set whoPlayerTwo(player) {
      this.playerTwo = player;
    },
  };

  const startRSP = window.RSP();

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const checkCorrNumber = () => {
      const userNum = prompt('Загадайте число шариков');

      if (userNum === null) {
        return null;
      }

      if (!Number.isNaN(parseInt(userNum))) {
        if (userNum > MARBLES.userCount) {
          alert('Число должно быть меньше');
        } else if (userNum < 1) {
          alert('Загадайте как минимум 1');
        } else {
          return +userNum;
        }
      } else {
        alert('Введите число!');
      }
      return checkCorrNumber();
    };

    const whoMove = (move) => {
      if (move === null) {
        return [null, null];
      }

      if (move % 2 === 0) {
        const playerOne = checkCorrNumber();
        const playerTwo =
        MARBLES.userCount === 1 ? 1 : getRandomNumber(0, 1);
        MARBLES.whoPlayerOne = 'Игрок';
        MARBLES.whoPlayerTwo = 'Бот';

        return [playerOne, playerTwo];
      }

      const playerOne = getRandomNumber(1, MARBLES.botCount);
      const playerTwo = +!confirm('Число четное?');
      MARBLES.whoPlayerOne = 'Бот';
      MARBLES.whoPlayerTwo = 'Игрок';

      return [playerOne, playerTwo];
    };

    return function start(move = 0) {
      const play = (move) => {
        const [playerOne, playerTwo] = whoMove(move);

        if (playerOne === null) {
          return null;
        }

        MARBLES.changeCount(playerOne, playerTwo);

        switch (true) {
          case MARBLES.userCount <= 0:
          case MARBLES.userCount >= 10:
            alert(MARBLES.winner);
            if (confirm('Сыграем еще разок?')) {
              MARBLES.reset();
              return 1;
            }
            return null;
          case playerOne % 2 === playerTwo:
            alert(`${MARBLES.playerTwo} угадал!\n${MARBLES.getCount}`);
            break;
          default:
            alert(`${MARBLES.playerTwo} ошибся\n${MARBLES.getCount}`);
        }
        return play(++move);
      };

      while (true) {
        const result = play(startRSP());
        if (result === null) {
          return null;
        }
      }
    };
  };

  window.marbles = game;
})();
