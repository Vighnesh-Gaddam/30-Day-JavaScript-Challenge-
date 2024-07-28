// Day 14: Classes

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Task 1: Execution
const person1 = new Person("Vicky", 21);
console.log(person1.greeting()); // "Hello, my name is Vicky and I am 21 years old."

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
}

// Task 2: Execution
person1.updateAge(22); // "Updated age: 22"

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message.
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }

    // Task 6: Add a static property to the Student class to keep track of the number of students created.
    static studentCount = 0;
}

// Task 3: Execution
const student1 = new Student("Vicky", 21, "S12345");
console.log(student1.getStudentId()); // "Student ID: S12345"

// Task 4: Execution
console.log(student1.greeting()); // "Hello, my name is Vicky, I am 21 years old and my student ID is S12345."

// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message.
Person.genericGreeting = function() {
    return "Hello, welcome to our system!";
}

// Task 5: Execution
console.log(Person.genericGreeting()); // "Hello, welcome to our system!"

// Task 6: Execution
const student2 = new Student("John", 23, "S54321");
console.log(`Total number of students: ${Student.studentCount}`); // "Total number of students: 2"

// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name.
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Task 8: Add a setter method to the Person class to update the name properties.
Person.prototype.setFullName = function(name) {
    [this.firstName, this.lastName] = name.split(' ');
    console.log(`Updated full name: ${this.getFullName()}`);
}

// Task 7 & 8: Execution
person1.setFullName("Vicky Sharma"); // "Updated full name: Vicky Sharma"
console.log(person1.getFullName()); // "Vicky Sharma"

// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        }
    }

    get balance() {
        return this.#balance;
    }
}

// Task 10: Execution
const myAccount = new Account(1000);
myAccount.deposit(500); // "Deposited: 500. New balance: 1500"
myAccount.withdraw(200); // "Withdrew: 200. New balance: 1300"
console.log(`Final balance: ${myAccount.balance}`); // "Final balance: 1300"
