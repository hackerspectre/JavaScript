// Functions in JavaScript ✅ 
/*
function helloWorld() {
    console.log("Hello World");
}

function printName(name) {
    console.log(name);
}

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function isAdult(age) {
    if (age >= 18) {
        console.log("You are an adult");
    } else {
        console.log("You are not an adult");
    }
}

function addSum(num1, num2) {
    console.log(num1 + num2);
}

// Calling a function
helloWorld();
printName("Mr. Hacker Bikram");
print1to5();
isAdult(20);
addSum(10, 20);
*/

// Qs. Create a function that prints a poem
/*
function printPoem() {
    console.log("Roses are red");
    console.log("Violets are blue");
    console.log("Sugar is sweet");
    console.log("And so are you");
}

printPoem();
*/

// Qs. Create a function to role a dice & always display the value of the dice (1 to 6).
/*
function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + diceValue);
}

rollDice();
*/

// Functions with Parameters & Arguments
// Qs. Create a function that takes 2 parameters and add them together
/*
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

addNumbers(10, 20);
*/

// Qs. Create a function that gives us the average of 3 numbers.
/*
function calculateAverage(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    console.log("The average of " + num1 + ", " + num2 + " and " + num3 + " is " + average);
}

calculateAverage(10, 20, 30);
*/

// Create a function that prints the multiplication table of a number
/*
function printMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

printMultiplicationTable(5);
*/

// return keyword
// return keyword is used to return some value from the function 
/*
function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(10, 20);
console.log(result);
*/

// Qs. Create a function that returns the area of a rectangle
/*
function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(10, 20);
console.log("The area of the rectangle is " + area);
*/

// Qs. Create a Function that returns the sum of numbers from 1 to n
/*
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const sum = calculateSum(5);
console.log("The sum of numbers from 1 to 5 is " + sum);
*/

// Create a function taht returns the concatenation of all strings in an array
/*
function concatenateStrings(strings) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
    return result;
}

const strings = ["Hello", " ", "World", "!"];
const concatenatedString = concatenateStrings(strings);
console.log(concatenatedString);
*/

// Scope 
// Scope determines the accessibility of variables, objects and functions from different parts of the code.
// Global Scope
// Local Scope
// Block Scope
// Lexical Scope

/*
let x = 10; // Global variable

function myFunction() {
    let y = 20; // Local variable
    console.log(x); // Accessing global variable
    console.log(y); // Accessing local variable
}

myFunction();
console.log(x); // Accessing global variable
console.log(y); // Error: y is not defined
*/

// Hoisting
// Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope before code execution.

/*
console.log(x); // undefined
let x = 10; // Global variable
console.log(x); // 10
*/

// Qs. What will be the output of the following code?
/*
let greet = "hello";

function cahngeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerFunction() {
        console.log(greet);
    }
}

console.log(greet);
cahngeGreet();
innerFunction();
*/

// Function Expressions
// Function expressions are anonymous functions that can be assigned to variables or passed as arguments to other functions.
/*
const add = function (num1, num2) {
    return num1 + num2;
};

const result = add(10, 20);
console.log(result);
*/

// High Order Functions
// A function that takes another function as an argument or returns a function as a return value is called a high-order function.

// Qs. Create a function that takes a function as an argument and returns a function as a return value
/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(10, 20, add);
console.log(result);
*/

// Methods
// A method is a function that belongs to an object and is called on that object.

// Qs. Create a function that takes a string as an argument and returns the length of the string
/*
function getLength(str) {
    return str.length;
}

const result = getLength("Hello World");
console.log(result);
*/

