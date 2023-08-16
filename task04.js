const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (allСashbox) => {

  const [endQuant, endSum] = allСashbox.reduce(
    ([startQuant, startSum], [quant, sum]) => {
      return [startQuant + quant, startSum + sum];
    },
    [0, 0]
  );

    return Math.round(+(endSum / endQuant).toFixed(2));
}

console.log(getAveragePriceGoods(allСashbox));