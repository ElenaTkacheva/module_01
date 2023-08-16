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

const getAveragePriceGoods = (allСashbox) => allСashbox.reduce(
    ([totalQuant, totalSum], [quant, sum]) => 
    ([totalQuant + quant, totalSum + sum])
    ,
    [0, 0]
  ).reduce((totalQuant, totalSum) => 
  Math.round(+(totalSum / totalQuant).toFixed(2)));


console.log(getAveragePriceGoods(allСashbox));