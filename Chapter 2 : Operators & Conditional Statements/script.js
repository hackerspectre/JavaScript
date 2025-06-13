// Comments in JS ✅ 
// Part of Code which is not executed

// This is a Single line Comment

/*
This is a
Multiline
Comment
*/

// Operators in JS ✅ 
// Used to perform some operation on data 
// Arithmetic Operators 
// +, -, *, /, % 
/*
let a = 5;
let b = 2;
console.log(a + b); // Output: 7
console.log(a - b); // Output: 3
console.log(a * b); // Output: 10
console.log(a / b); // Output: 2.5
console.log(a % b); // Output: 1
*/

// Increment & Decrement 
// ++, --
/*
let a = 5;
console.log(a++); // Output: 5
console.log(a); // Output: 6
console.log(--a); // Output: 5
console.log(a); // Output: 5
*/

// Assignment Operators 
// =, +=, -=, *=, /=, %=, **=
/*
let a = 5;
let b = 2;
console.log(a = b); // Output: 2
console.log(a += b); // Output: 4
console.log(a -= b); // Output: 2
console.log(a *= b); // Output: 10
console.log(a /= b); // Output: 5
console.log(a %= b); // Output: 1
console.log(a **= b); // Output: 25
*/

// Comparison Operators 
// ==, !=, ===, !==, >, <, >=, <= 
/*
let a = 5;
let b = 2;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a === b); // Output: false
console.log(a !== b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false
*/

// Logical Operators 
// &&, ||, ! 
/*
let a = true;
let b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false
*/

// Conditional Operators 
// if-else, else if, nested if-else, switch, ternary operator
// if-else
/*
let age = 22;
if(age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
*/

// if-else
/*
let mode = "dark-mode";
let color;
if(mode === "dark-mode") {
    color = "black";
} else {
    color = "white";
}
console.log("The color is:", color);
*/

// else if
/*
let color = "red";
if (color === "red") {
    console.log("Stop!");
} else if (color === "yellow") {
    console.log("Slow down!");
} else if (color === "green") {
    console.log("Go!");
} else {
    console.log("Invalid color");
}
*/

/*
let size = "XL";

if (size === "S") {
    console.log("Popcorn price is 50");
} else if (size === "M") {
    console.log("Popcorn price is 100");
} else if (size === "L") {
    console.log("Popcorn price is 200");
} else if (size === "XL") {
    console.log("Popcorn price is 250");
} else {
    console.log("Invalid size");
}
*/

// Nested if-else
/*
let marks = 42;

if (marks >= 33) {
    if (marks >= 90) {
        console.log("Grade is A");
    } else if (marks >= 80) {
        console.log("Grade is B");
    } else if (marks >= 70) {
        console.log("Grade is C");
    } else if (marks >= 60) {
        console.log("Grade is D");
    } else {
        console.log("Grade is F");
    }
} else {
    console.log("Better luck next time!");
}
*/

// switch statement
/*
let day = "Friday";
switch(day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
*/

// Ternary Operator
/*
let age = 22;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);
*/

// Let‘s Practice ✅ 
// Question : 1 | Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not. 
/*
let num = prompt("Enter a Number: ");
if (num % 5 === 0) {
    console.log(num + " is a multiple of 5");
} else {
    console.log(num + " is not a multiple of 5");
}
*/

// Question : 2 | Write a code which can give grades to students according to their scores: 
// If the score is between 90 and 100, the grade is A
// If the score is between 80 and 89, the grade is B
// If the score is between 70 and 79, the grade is C
// If the score is between 60 and 69, the grade is D
// If the score is between 0 and 59, the grade is F
/*
let score = 94;
if (score >= 90 && score <= 100) {
    console.log("Grade is A");
} else if (score >= 80 && score < 90) {
    console.log("Grade is B");
} else if (score >= 70 && score < 80) {
    console.log("Grade is C");
} else if (score >= 60 && score < 70) {
    console.log("Grade is D");
} else {
    console.log("Grade is F");
}
*/

