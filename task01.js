const moneyConverter = evro => evro * 1.2 * 64;

const res1 = moneyConverter(100);
console.log('res1: ', res1);
const res2 = moneyConverter(0);
console.log("res2: ", res2);
const res3 = moneyConverter(5);
console.log("res3: ", res3);
