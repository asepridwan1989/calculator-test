'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var input = new Calculator(10)
console.log(input.add(2).substract(2).squareRoot())
