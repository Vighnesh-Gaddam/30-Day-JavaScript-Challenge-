// Day 15: Closures

// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFnc() {
    let greet = `Hello`;
    function innerFnc() {
        return greet;
    }
    return innerFnc();
}
console.log(outerFnc()); // Output: Hello

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function PrvCounter() {
    let count = 0; 
  
    function increment() {
        count++;
        console.log(count);
    }
  
    function getCount() {
        return count;
    }
  
    return {
        increment: increment,
        getCount: getCount
    };
}
  
const counter = PrvCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
console.log(counter.getCount()); // 3

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueIDGenerator() {
    let lastID = 0;
    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = uniqueIDGenerator();
console.log(generateID()); // 1
console.log(generateID()); // 2
console.log(generateID()); // 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetJohn = createGreeter("John");
console.log(greetJohn()); // Output: Hello, John!

const greetJane = createGreeter("Jane");
console.log(greetJane()); // Output: Hello, Jane!

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    let functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // 0
functionArray[1](); // 1
functionArray[2](); // 2
functionArray[3](); // 3
functionArray[4](); // 4

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log(`Items: ${items.join(', ')}`);
        }
    };
})();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.listItems(); 
itemManager.removeItem("Apple");
itemManager.listItems(); 

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (cached)

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120 (cached)