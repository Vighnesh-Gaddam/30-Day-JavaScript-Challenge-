// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function OddEven(a) {
    if (a % 2 === 0) {
        console.log(`${a} is Even`);
    } else {
        console.log(`${a} is Odd`);
    }
}
OddEven(4); // Example usage

// Task 2: Write a function to calculate the square of a number and return the result.
function square(a) {
    return a * a; // Return the result
}
console.log(`Square of 5 is ${square(5)}`); // Example usage

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNumber = function (a, b) {
    if (a > b) {
        console.log(`${a} is Greater than ${b}`);
    } else {
        console.log(`${b} is Greater than ${a}`);
    }
};
maxNumber(10, 20); // Example usage

// Task 4: Write a function expression to concatenate two strings and return the result.
const concateString = function (a, b) {
    return a + " " + b; // Return the concatenated string
};
console.log(concateString('hello', 'vicky')); // Example usage

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const ArFnc = (a, b) => {
    return a + b; // Return the sum
};
console.log(`Addition of 5 and 6 = ${ArFnc(5, 6)}`); // Example usage

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const FindChar = (str, char) => {
    const result = str.includes(char);
    return result; // Return the result
};
console.log(FindChar('vicky', 'v')); // Example usage

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const DefaultValue = (a, b = 10) => {
    return a * b; // Return the product
};
console.log(`Product of 5 and default value = ${DefaultValue(5)}`); // Example usage

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const DefaultAge = (name, age = 10) => {
    return `Hello, ${name}. You are ${age} years old.`; // Return the greeting message
};
console.log(DefaultAge('Alice')); // Example usage

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function HigherFnc(fnc, n) {
    for (let i = 0; i < n; i++) {
        fnc();
    }
}
function LowerFnc() {
    console.log("hello");
}
HigherFnc(LowerFnc, 5); // Example usage

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function HigherOrderFnc(fnc1, fnc2, value) {
    return fnc2(fnc1(value)); // Return the final result
}
const double = x => x * 2;
const square = x => x * x;
const result = HigherOrderFnc(double, square, 3); 
console.log(result); // Example usage
