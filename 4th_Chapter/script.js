// Arrays in JS ✅ 
// Arrays are a collection of values that can be of any data type, including strings, numbers, booleans, objects, and other arrays. They are denoted by square brackets [] and are zero-indexed, meaning the first element is at index 0.
// Arrays are mutable, meaning they can be changed after they are created.

// Create Array 
/*
let heroes = ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"]; 
console.log(heroes);

let marks = [97, 94, 84, 67, 92];
console.log(marks);

let info = ["Bikram", 22, "Delhi"];
console.log(info);
*/


// Array Indices ✅ 
/*
let heroes = ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"]; 
console.log(heroes);
console.log(heroes.length);
console.log(typeof heroes);

console.log(heroes[0])
console.log(heroes[1])
console.log(heroes[2])
console.log(heroes[3])
console.log(heroes[4])
*/

/*
let marks = [97, 94, 84, 67, 92];
console.log(marks);

marks[1] = 87;
console.log(marks);
*/


// Looping over an Array ✅ 
// Print all elements of an array 
/*
let heroes = ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"];
for(i=0; i<heroes.length; i++) {
    console.log(heroes[i]);
}

// or using for...of loop
for(let hero of heroes) {
    console.log(hero);
}

// or using forEach() method
heroes.forEach(hero => {
    console.log(hero);
});
*/


// Let‘s Practice ✅ 
// Question : 1 | For a given array with marks of students -> [85, 97, 44, 37, 76, 60] | Find the average marks of the entire class. 
/*
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let mark of marks) {
    sum += mark;
}

console.log(sum / marks.length);
*/

// Question : 2 | For a given array with prices of 5 items -> [250, 645, 300, 900, 50] | All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. 
/*
let prices = [250, 645, 300, 900, 50];
let finalPrices = [];

for(let price of prices) {
    finalPrices.push(price - (price * 0.1));
}

console.log(finalPrices);
*/


// Array Methods ✅ 
/*
// 1. Push( ) : add to end 
let fruits = ["apple", "banana", "cherry"];
fruits.push("grapes");
console.log(fruits); // ["apple", "banana", "cherry", "grapes"]

// 2. Pop( ) : remove from end 
fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// 3. toString( ) : converts array to string 
console.log(fruits.toString()); // "apple,banana,cherry"

// 4. Concat( ) : joins multiple arrays & returns result 
let fruits1 = ["apple", "banana", "cherry"];
let fruits2 = ["grapes", "mango", "orange"];
console.log(fruits1.concat(fruits2));

// 5. Unshift( ) : add to start 
fruits.unshift("watermelon");
console.log(fruits); // ["watermelon", "apple", "banana", "cherry"]

// 6. shift( ) : delete from start & return 
fruits.shift();
console.log(fruits); // ["apple", "banana", "cherry"]
*/

/*
// Slice( ) : returns a piece of the array 
// slice( startIdx, endIdx )
let fruits = ["apple", "banana", "cherry", "grapes"];
console.log(fruits.slice(1, 3)); // ["banana", "cherry"]
// console.log(fruits.slice(1)); // ["banana", "cherry", "grapes"]
*/

/*
// Splice( ) : adds or removes items from array
// splice( startIdx, deleteCount, item1, item2, ... )
// returns the deleted items

let fruits = ["apple", "banana", "cherry", "grapes"];
console.log(fruits.splice(1, 2)); // ["banana", "cherry"]
console.log(fruits); // ["apple", "grapes"]
*/


// Let‘s Practice ✅ 
// Question : 1 | Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix” 
// a. Remove the first company from the array 
// b. Remove Uber & Add Ola in its place 
// c. Add Amazon at the end 
/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
// a. Remove the first company from the array
companies.shift();
console.log(companies);

// b. Remove Uber & Add Ola in its place
companies.splice(companies.indexOf("Uber"), 1, "Ola");
console.log(companies);

// c. Add Amazon at the end
companies.push("Amazon");
console.log(companies);
*/

