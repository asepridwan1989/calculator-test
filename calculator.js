"use strict";

class Calculator {
  //write your code here
  constructor(num) {
    this.number = num;
  }
  add(val) {
    this.number += val;
    return this;
  }
  substract(val) {
    this.number -= val;
    return this;
  }
  multiply(val) {
    this.number *= val;
    return this;
  }
  divide(val) {
    this.number /= val;
    return this;
  }
  square(
    this.number = Math.pow(this.number, 2);
    return this;
  }
  squareRoot() {
    var tmp = this.number;
    this.number = Math.sqrt(tmp);
    return this;
  }
  circle() {
    const pi = 3.14;
    var radius = this.number / 2;
    this.number = 2 * pi * radius;
    return this;
  }
  circleArea() {
    const pi = 3.14;
    var radius = this.number / 2;
    this.number = pi * (radius * radius);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
let num = 10;
let input = new Calculator(num);
console.log(
  "dari calc.js",
  input
    .add(2)
    .substract(2)
    .squareRoot()
);
//console.log(input.circleArea());
module.exports = {
  Calculator
};
