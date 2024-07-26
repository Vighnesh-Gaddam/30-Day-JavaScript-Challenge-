// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const Person = {
    name: "Vicky",
    age: 21,
    info: function() {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
};

module.exports = Person;