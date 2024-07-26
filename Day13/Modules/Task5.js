// Task 5: Create a module that exports multiple consTants and functions. Import the entire module as an object in another script and use its properties.
const add = require('./Task1');
const Person = require('./Task2');
const { multiply, divide } = require('./Task3');
const subtract = require('./Task4');

console.log("Add:", add(5, 3));
Person.info();
console.log("Multiply:", multiply(5, 3));
console.log("Divide:", divide(10, 2));
console.log("Subtract:", subtract(10, 3));

