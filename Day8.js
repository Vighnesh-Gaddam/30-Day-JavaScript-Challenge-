// Day 8: ES6+ Features

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = `Vicky`;
let age = 21;
console.log(`Hey I'm ${name} and I'm ${age} years old`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`Hey I'm ${name}
I'm ${age} years old`);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const num = [1, 2, 3];
const [one, two, three] = num;
console.log(one);
console.log(two);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let lib = {
    title: "Hello, My name is JohnCena",
    author: "Shane Burno"
};
const { title, author } = lib;
console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr = ['HI', 'HII', 'HIII'];
let arr2 = [...arr, 'Hello', 'Hey'];
console.log(arr2);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const firstName = 'Vicky';
const agePerson = 21;
const person = {
    firstName,
    age: agePerson,
    greet() {
        console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old.`);
    }
};
console.log(person);
person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = 'age';
const dynamicObject = {
    [propName]: 25,
    name: 'Alice'
};
console.log(dynamicObject);