// Day 6: Arrays

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(`First element of the array is ${arr[0]}`);
console.log(`Last element of the array is ${arr[arr.length - 1]}`);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(element => {
    console.log(element);
});

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
let row = 1; // Second row (index starts at 0)
let col = 2; // Third column (index starts at 0)
let specificElement = matrix[row][col];
console.log(`Element at row ${row + 1}, column ${col + 1}: ${specificElement}`);