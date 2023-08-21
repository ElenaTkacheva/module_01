const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(product, price, count) {
    this.items.push({
      product,
      price,
      count,
    });
    this.increaseCount(count);
    this.calculateItemPrice();
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + (item.price * item.count), 0);
  },

  increaseCount() {
    this.count = this.items.reduce((acc, { qty }) => acc + qty, 0);
  },

  clear() {
    this.items.length = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const cart = JSON.stringify(this.items);
    console.log(cart + "\n" + this.totalPrice);
  },
};

cart.add('apple', 5, 10);
cart.add('pear', 13, 3);
cart.add('nectarin', 12, 2);
cart.print();
cart.add('carrot', 3, 1);
cart.print();


