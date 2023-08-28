const cart = {
  items: [],
  count: 0,

  add(product, price, count) {
    this.items.push({
      product,
      price,
      count,
    });
    this.increaseCount(count);
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  
  increaseCount(qnty) {
    this.count += qnty;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.count, 0);
  },

  clear() {
    this.items.length = [];
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


