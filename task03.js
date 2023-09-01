'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(sm) {
    if (sm > 0) this._width = sm;
  },
  set height(sm) {
    if (sm > 0) this._height = sm;
  },

  get perimeter() {
    return `${2 * (this._width + this._height)}cm`;
  },
  get area() {
    return `${this._width * this._height}cm`;
  },
};

rectangle.width = 8;
rectangle.height = 10;
console.log(rectangle.perimeter);
console.log(rectangle.area);
