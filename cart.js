'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

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
    const totalPrice = this.items.reduce((acc, item) =>
      acc + item.price * item.count, 0);

    if (this._discount > 0) {
      return totalPrice - (totalPrice * this._discount / 100);
    }

    return totalPrice;
  },

  set discount(promocode) {
    if (promocode === 'METHED') this._discount = 15;
    if (promocode === 'NEWYEAR') this._discount = 21;
  },

  clear() {
    this.items = [];
    this.count = 0;
    this._discount = 0;
  },

  print() {
    const cart = JSON.stringify(this.items);
    console.log(cart + '\n' + this.totalPrice);
  },
};

cart.add('apple', 5, 10);
cart.add('pear', 10, 3);
cart.add('nectarin', 10, 2);
cart.print();
cart.discount = 'METHED';
cart.print();
cart.discount = 'NEWYEAR';
cart.print();
