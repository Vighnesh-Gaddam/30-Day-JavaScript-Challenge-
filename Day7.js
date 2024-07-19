// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Path to Success",
    author: "James Skie",
    year: 2024
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.info = function() {
    return `Title: ${this.title}, Author: ${this.author}`;
};
console.log(book.info());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(year) {
    this.year = year;
    return this.year;
};
console.log(book.updateYear(2023));
console.log(book);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "White House",
    books: [
        { title: "Hello", author: "Vicky" },
        { title: "Namaste", author: "James" },
        { title: "Bonjour", author: "Mike" }
    ]
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Title: ${book.title}`);
});

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `Title: ${this.title}, Year: ${this.year}`;
};
console.log(book.getTitleAndYear());

// Activity 5: Object Iteration

// Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
