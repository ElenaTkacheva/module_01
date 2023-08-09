const item = prompt("Наименование товара");
const quantity = +(prompt("Количество товара"));
const category = prompt("Категория товара");
const price = +(prompt("Цена товара"));

console.log(typeof item);
console.log(typeof quantity);
console.log(typeof category);
console.log(typeof price);
console.log(
  `На складе ${quantity} единицы товара "${item}" на сумму ${quantity * price} долларов`
);
