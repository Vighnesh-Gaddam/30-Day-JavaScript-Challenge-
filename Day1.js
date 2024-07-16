// Day 1: Variables and Data Types

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 1922;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name = "vicky";
console.log(name);

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const bol = true;
console.log(bol);

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
var num = 1;
var str = 'vicky';
const bolean = false;
const ob = {
    name: 'Vicky',
    age: 15
};
var hobbies = ['video games', 'chess', 'Code'];

console.log(typeof num);      // number
console.log(typeof str);      // string
console.log(typeof bolean);   // boolean
console.log(typeof ob);      // object
console.log(typeof hobbies);  // object (arrays are objects in JavaScript)

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let n = 5;
console.log(n);  // 5
n = 20;
console.log(n);  // 20

// Task 6: Try reassigning a variable declared with const and observe the error.
const temp = 100;
temp = 50;  // This will cause an error: "Uncaught TypeError: Assignment to constant variable."
console.log(temp);

/* ----------------------------------------------------Feature Request----------------------------------------------------*/

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
var num = 42;
var str = 'Hello, world!';
const bool = true;
const obj = { name: 'Alice', age: 30 };
var arr = [1, 2, 3, 4, 5];

console.log('Value:', num, ', Type:', typeof num);    // Value: 42 , Type: number
console.log('Value:', str, ', Type:', typeof str);    // Value: Hello, world! , Type: string
console.log('Value:', bool, ', Type:', typeof bool);  // Value: true , Type: boolean
console.log('Value:', obj, ', Type:', typeof obj);    // Value: { name: 'Alice', age: 30 } , Type: object
console.log('Value:', arr, ', Type:', typeof arr);    // Value: [1, 2, 3, 4, 5] , Type: object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// let variable reassignment
let changeable = 10;
console.log('Initial value (let):', changeable);  // 10
changeable = 20;
console.log('Reassigned value (let):', changeable);  // 20

// const variable reassignment
const constant = 30;
console.log('Initial value (const):', constant);  // 30
// Uncommenting the following line will cause an error
// constant = 40;  // Uncaught TypeError: Assignment to constant variable.
