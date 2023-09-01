'use strict';

const rectangle = {
  width: 5,
  height: 5,

  set setWidth(sm) {
    if (sm > 0) this.width = sm;
  },
  set setHeight(sm) {
    if (sm > 0) this.height = sm;
  },

  get perimeterRectangle() {
    return `${2 * (this.width + this.height)}cm`;
  },
  get areaRectangle() {
    return `${this.width * this.height}cm`;
  },
};

rectangle.setWidth = 8;
rectangle.setHeight = 10;
console.log(rectangle.perimeterRectangle);
console.log(rectangle.areaRectangle);
