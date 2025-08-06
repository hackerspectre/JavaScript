// Functions in JS ✅ 
// Block of code that performs a specific task, can be invoked whenever needed 

/*
function print() {
    console.log("Hello JavaScript!");
}
print(); // Output: Hello JavaScript!
*/

/*
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// Invoking the function
greet("Bikram"); // Output: Hello, Bikram! 
*/

/*
function printSum(num1, num2) {
    console.log(num1 + num2);
}
printSum(5, 7); // Output: 12
*/

/*
function printSum(num1, num2) {
    sum = num1 + num2;
    return sum;
}

let val = printSum(5, 7);
console.log(val); // Output: 12
*/


// Arrow Functions ✅ 
// Compact way of writing a function
// Concise syntax for writing functions, introduced in ES6
// Arrow functions are anonymous functions, they don't have a name
// They are used to create small functions, like event handlers, callbacks, etc.
// Syntax: (params) => { code to be executed }
// Example: (param1, param2) => { code to be executed }
// Example: (param1, param2) => param1 + param2
// Example: (param1, param2) => { return param1 + param2; }

/*
const printSum = (num1, num2)=>{
    console.log(num1 + num2);
}
printSum(5, 7); // Output: 12
*/

/*
const printSum = (num1, num2)=>{return num1 + num2;}
console.log(printSum(5, 7)); // Output: 12
*/


// Let‘s Practice ✅ 
// Question : 1 | Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string. 
/*
function printVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log("Number of vowels: " + count);
}

let val = prompt("Type Something: ");
printVowels(val);
*/

// Question : 2 | Create an arrow function to perform the same task. 
/*
const printVowels = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log("Number of vowels: " + count);
}

let val = prompt("Type Something: ");
printVowels(val);
*/


// forEach Loop in Arrays ✅ 
// arr.forEach( callBackFunction ) 
// callBackFunction takes 3 arguments : value, index, array 
// CallbackFunction : Here, it is a function to execute for each element in the array 
// *A callback is a function passed as an argument to another function. 
// *This function is to be executed inside the other function.
/*
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index, array) => {
    console.log(value, index, array);
}); 
*/

/*
// Output : 
// 1 0 [1, 2, 3, 4, 5]
// 2 1 [1, 2, 3, 4, 5]
// 3 2 [1, 2, 3, 4, 5]
// 4 3 [1, 2, 3, 4, 5]
// 5 4 [1, 2, 3, 4, 5]
*/

/*
// Higher-Order Functions : in JavaScript (or any programming language) are functions that either:
1. Take one or more functions as arguments (the function accepts other functions).
2. Return a function as a result.

In simpler terms, these are functions that can work with other functions in some way, making them more flexible and powerful.

// Key Concepts:
1. Passing functions as arguments: You can pass a function as an argument to another function.
2. Returning a function: A function can return another function, which can be later invoked.
*/


// Let‘s Practice ✅ 
// Question : 1 | For a given array of numbers, print the square of each value using the forEach loop. 
/*
let numbers = [2, 4, 6, 8];
numbers.forEach((value) => {
    console.log(value * value);
});

// Output : 4, 16, 36, 64
*/


// Some More Array Methods ✅ 
// 1. map() : This method creates a new array with the results of applying a provided function on every element in this array. It returns a new array with the results of applying the provided function on every element in this array.
// arr.map( callbackFnx( value, index, array ) )
/*
let nums = [51, 78, 64, 92];
nums.map((val) => {
    console.log(val);
});
// Output : 51, 78, 64, 92 
*/

/*
let nums = [51, 78, 64, 92];
let newArr = nums.map((val) => {
    return val;
});
console.log(newArr); // Output : [51, 78, 64, 92]
*/

// 2. filter() : This method creates a new array with all elements that pass the test
// arr.filter( callbackFnx( value, index, array ) )
/*
let nums = [51, 78, 64, 92];
let newArr = nums.filter((val) => {
    return val > 70;
});
console.log(newArr); // Output : [78, 92]
*/

// 3. reduce() : This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// arr.reduce( callbackFnx( accumulator, currentValue, index, array ) )
/*
let nums = [51, 78, 64, 92];
let sum = nums.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(sum); // Output : 285
*/


// Let‘s Practice ✅ 
// Question : 1 | We are given array of marks of students. Filter our of the marks of students that scored 90+. 
// Input : [ 85, 90, 78, 92, 67, 98 ]
// Output : [ 90, 92, 98 ]
/*
let marks = [85, 90, 78, 92, 67, 98];
let filteredMarks = marks.filter((val) => {
    return val > 90;
});
console.log(filteredMarks); // Output : [ 90, 92, 98 ]
*/


// Question : 2 | Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array. 
// Input : 5
// Output : sum = 15, product = 120
/*
let n = 5;
let arr = Array.from({length: n}, (_, i) => i + 1);
let sum = arr.reduce((acc, val) => {
    return acc + val;
});

let product = arr.reduce((acc, val) => {
    return acc * val;
});

console.log(`sum = ${sum}, product = ${product}`); // Output : sum = 15, product = 120
*/

