const item = prompt("Наименование товара");
const quantity = Number(prompt("Количество товара"));
const price = Number(prompt("Цена товара"));

if (isNaN(quantity) || isNaN(price)) {
  console.log("Вы ввели некорректные данные");
} else {
  console.log(
    `На складе ${quantity} единицы товара "${item}" на сумму ${
      quantity * price
    } долларов`
  );
}
