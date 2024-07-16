// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let T1 = 5;
let T2 = 10;
console.log("Addition of T1 and T2:", T1 + T2);  // Output: Addition of T1 and T2: 15

// Task 2: Write a program to subtract two numbers and log the result to the console.
console.log("Subtraction of T1 and T2:", T1 - T2);  // Output: Subtraction of T1 and T2: -5

// Task 3: Write a program to multiply two numbers and log the result to the console.
console.log("Multiplication of T1 and T2:", T1 * T2);  // Output: Multiplication of T1 and T2: 50

// Task 4: Write a program to divide two numbers and log the result to the console.
console.log("Division of T1 and T2:", T1 / T2);  // Output: Division of T1 and T2: 0.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log("Modulus of T1 and T2:", T1 % T2);  // Output: Modulus of T1 and T2: 5

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num = 1;
num += 1;
console.log("Task 6:", num);  // Output: 2

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
num -= 1;
console.log("Task 7:", num);  // Output: 1

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if (T1 > T2) {
    console.log("Task 8: T1 is greater");
} else {
    console.log("Task 8: T2 is greater");
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if (T1 >= 5) {
    console.log("Task 9: T1 is greater than or equal to 5");
}
if (T2 <= 10) {
    console.log("Task 9: T2 is less than or equal to 10");
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("Task 10:", 5 == '5');  // Output: true
console.log("Task 10:", 0 == false);  // Output: true

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (T1 == 5 && T2 == 10) {
    console.log("Task 11: true true");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (T1 == 5 || T2 == 11) {
    console.log("Task 12: true false");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let value = 0;
if (!value) {
    console.log("Task 13: Value is falsy"); // This will run because 0 is falsy
}

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let agee = 18;
let canVote = (agee >= 18) ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log("Task 14:", canVote);  // Output: Yes, you can vote.

/* ----------------------------------------------------Feature Request----------------------------------------------------*/

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let num1 = 10;
let num2 = 3;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.log("Feature 1 - Addition:", addition);          // Output: 13
console.log("Feature 1 - Subtraction:", subtraction);    // Output: 7
console.log("Feature 1 - Multiplication:", multiplication); // Output: 30
console.log("Feature 1 - Division:", division);          // Output: 3.3333333333333335
console.log("Feature 1 - Remainder:", remainder);        // Output: 1

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
num1 = 10;
num2 = 20;

console.log("Feature 2 - Is num1 equal to num2?", num1 == num2);               // Output: false
console.log("Feature 2 - Is num1 strictly equal to num2?", num1 === num2);     // Output: false
console.log("Feature 2 - Is num1 not equal to num2?", num1 != num2);           // Output: true
console.log("Feature 2 - Is num1 strictly not equal to num2?", num1 !== num2); // Output: true
console.log("Feature 2 - Is num1 greater than num2?", num1 > num2);            // Output: false
console.log("Feature 2 - Is num1 less than num2?", num1 < num2);               // Output: true
console.log("Feature 2 - Is num1 greater than or equal to num2?", num1 >= num2); // Output: false
console.log("Feature 2 - Is num1 less than or equal to num2?", num1 <= num2);  // Output: true

let isAdult = true;
let hasLicense = false;

let age = 25;
let hasValidLicense = true;

console.log("Feature 2 - Is the person an adult and has a license?", isAdult && hasLicense);        // Output: false
console.log("Feature 2 - Is the person an adult or has a license?", isAdult || hasLicense);         // Output: true
console.log("Feature 2 - Is the person not an adult?", !isAdult);                                   // Output: false
console.log("Feature 2 - Is the person an adult and has a valid license?", age >= 18 && hasValidLicense); // Output: true
console.log("Feature 2 - Is the person underage or does not have a valid license?", age < 18 || !hasValidLicense); // Output: false

let isEmployed = true;
let hasCriminalRecord = false;

console.log("Feature 2 - Is the person eligible for a loan?", (age >= 18 && isEmployed) || (age >= 18 && !hasCriminalRecord)); // Output: true

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let number = -5;
let result = (number > 0) ? 'Positive' : (number < 0) ? 'Negative' : 'Zero';
console.log("Feature 3 - The number is:", result);  // Output: Negative
