const add = require('./Modules/Task1.js');
const Person = require('./Modules/Task2.js');
const { multiply, divide } = require('./Modules/Task3.js');
const subtract = require('./Modules/Task4.js');
const fetchData = require('./Modules/Task7.js');

console.log("Task 1: Add:", add(5, 3));
console.log("Task 2: Person info:");
Person.info();
console.log("Task 3: Multiply:", multiply(5, 3));
console.log("Task 3: Divide:", divide(10, 2));
console.log("Task 4: Subtract:", subtract(10, 3));