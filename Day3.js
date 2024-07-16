// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
checkNumber(5); // Example usage

// Task 2: Write a program to check if a person is eligible to vote (age >= 18)
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}
checkVotingEligibility(20); // Example usage

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements
function findLargest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log(`The largest number is ${a}.`);
        } else {
            console.log(`The largest number is ${c}.`);
        }
    } else {
        if (b >= c) {
            console.log(`The largest number is ${b}.`);
        } else {
            console.log(`The largest number is ${c}.`);
        }
    }
}
findLargest(10, 20, 15); // Example usage

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7)
function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
}
getDayOfWeek(3); // Example usage

// Task 5: Write a program that uses a switch case to assign a grade based on a score
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;
        case (score >= 80):
            console.log("Grade: B");
            break;
        case (score >= 70):
            console.log("Grade: C");
            break;
        case (score >= 60):
            console.log("Grade: D");
            break;
        case (score < 60):
            console.log("Grade: F");
            break;
        default:
            console.log("Invalid score.");
    }
}
assignGrade(85); // Example usage

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd
function checkEvenOdd(num) {
    const result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log(result);
}
checkEvenOdd(7); // Example usage

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
isLeapYear(2020); // Example usage

// Feature Request 1: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
checkNumber(5); // Example usage

// Feature Request 2: Create a script to check if a person is eligible to vote based on their age and log the result.
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}
checkVotingEligibility(20); // Example usage

// Feature Request 3: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
}
getDayOfWeek(3); // Example usage

// Feature Request 4: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;
        case (score >= 80):
            console.log("Grade: B");
            break;
        case (score >= 70):
            console.log("Grade: C");
            break;
        case (score >= 60):
            console.log("Grade: D");
            break;
        case (score < 60):
            console.log("Grade: F");
            break;
        default:
            console.log("Invalid score.");
    }
}
assignGrade(85); // Example usage

// Feature Request 5: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
isLeapYear(2020); // Example usage

