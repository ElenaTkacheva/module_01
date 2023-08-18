const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  add(product, price, count) {
    this.items.push({
      product,
      price,
      count,
    });
    this.increaseCount();
    this.calculateItemPrice();
  },

  getTotalPrice() {
    this.totalPrice;
  },

  calculateItemPrice() {
    this.totalPrice +=
      this.items[this.items.length - 1].price *
      this.items[this.items.length - 1].qty;
    console.log(this.totalPrice);
  },

  increaseCount() {
    this.count = this.items.reduce((acc, { qty }) => acc + qty, 0);
    console.log(this.count);
  },

  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const basket = JSON.stringify(this.items);
    console.log(basket + "\n" + this.totalPrice);
  },
};

cart.add('apple', 5, 10);
cart.add('pear', 8, 8);
cart.add('nectarin', 6, 12);
cart.print();
cart.totalPrice;
