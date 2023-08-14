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

const getAveragePriceGoods = (allСashbox) => allСashbox.map(subArr => subArr.reduce((quant, sum) => +(sum / quant).toFixed(2)));

console.log(getAveragePriceGoods(allСashbox));