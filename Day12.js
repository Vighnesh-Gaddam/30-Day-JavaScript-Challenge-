// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("This is an intentional error.");
}

try {
    throwError();
} catch (error) {
    console.log(`Caught an error: ${error.message}`);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function exampleFunction() {
    try {
        console.log("In try block");
        // Uncomment the next line to see how it behaves when an error is thrown
        // throw new Error("An error occurred");
    } catch (error) {
        console.log(`Caught an error: ${error.message}`);
    } finally {
        console.log("Finally block executed");
    }
}

exampleFunction();

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
    if (!input) {
        throw new CustomError("Input cannot be empty");
    }
    return true;
}

try {
    validateInput("");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
let randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5;
        success ? resolve("Promise resolved successfully") : reject("Promise rejected");
    }, 1000);
});

randomPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        let result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Fetch error: ${error}`);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Fetch error: ${error}`);
    }
}

fetchData();