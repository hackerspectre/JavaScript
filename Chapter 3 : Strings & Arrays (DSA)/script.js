// String Methods ✅ 
// Methods - actions that can be performed on objects. 
/*
// str.trim() - removes whitespace from beginning and end of string.
let str1 = "    Bikram Mandal    ";
console.log(str1.trim());

// str.toLowerCase() - converts string to lowercase.
let str2 = "Bikram Mandal";
console.log(str2.toLowerCase());

// str.toUpperCase() - converts string to uppercase.
let str3 = "bikram mandal";
console.log(str3.toUpperCase());

// indexOf() - returns the index of the first occurrence of a substring.
let str4 = "ILoveCoding";
console.log(str4.indexOf("Love"));
console.log(str4.indexOf("j"));
console.log(str4.indexOf("o"));

// Methods Chaining - multiple methods can be chained together to perform actions on a string.
let str5 = "    Hello World    ";
console.log(str5.toUpperCase().trim());

// str.slice() - returns a substring of a string.
let str6 = "Hello World";
console.log(str6.slice(0, 5));
console.log(str6.slice(6, str6.length));
console.log(str6.slice(6));
console.log(str6.slice(-2));

// Replace() - replaces a substring with another substring.
let str7 = "Hello World";
console.log(str7.replace("World", "JavaScript"));
console.log(str7.replace("o", "x"));

// Repeat() - returns a new string with a specified number of copies of an existing string.
let str8 = "Mango";
console.log(str8.repeat(3));

// Practice Questions ✅ 
// Qs. For the given String: let msg = "help!"; | Trim & convert to uppercase.
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Qs. For the str -> let name = "Chandigarh University"; | Predict the output for following.
let name = "Chandigarh College";
console.log(name.slice(0, 10));
console.log(name.indexOf("an"));
console.log(name.replace("Chandigarh", "Punjab"));

// Qs. Separate the "College" part in above string & replace "l" with "t" in it.
let name1 = "Chandigarh College";
console.log(name1.slice(11));
console.log(name1.replace("l", "t"));

console.log(name1.slice(11).replace("l", "t").replace("l", "t"));
*/


// Arrays (Data Structure) ✅ 
/*
let students = ["Bikram", "Rahul", "Saksham"];
console.log(students);
console.log(students[0][0]);
console.log(students[0][1]);

let nums = [2, 4, 6, 8];
console.log(nums);
console.log(nums[0]);
console.log(nums[2]);
console.log(nums.length);
console.log(typeof nums);

// mixed array
let mix = ["Bikram", 2, 8.17, true];
console.log(mix);

// empty array
let empty = [];
console.log(empty);

// Arrays are Mutable
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
fruits[0] = "mango";
console.log(fruits);
fruits[1] = "grapes";
console.log(fruits);
fruits[10] = "kiwi";
console.log(fruits);
fruits[fruits.length] = "watermelon";
console.log(fruits);
console.log(fruits[5]);
console.log(fruits[10]);
console.log(fruits[11]);

// Arrays Methods ✅ 
// push() - adds an element to the end of an array.
let fruits1 = ["apple", "banana", "orange"];
console.log(fruits1);
fruits1.push("mango");
console.log(fruits1);
fruits1.push("grapes");
console.log(fruits1);
fruits1.push("kiwi");
console.log(fruits1);
fruits1.push("watermelon");
console.log(fruits1);

// pop() - removes the last element from an array.
let fruits2 = ["apple", "banana", "orange", "mango", "grapes", "kiwi", "watermelon"];
console.log(fruits2);
fruits2.pop();
console.log(fruits2);
fruits2.pop();
console.log(fruits2);

// shift() - removes the first element from an array.
let fruits3 = ["apple", "banana", "orange", "mango", "grapes", "kiwi", "watermelon"];
console.log(fruits3);
fruits3.shift();
console.log(fruits3);
fruits3.shift();
console.log(fruits3);

// unshift() - adds an element to the beginning of an array.
let fruits4 = ["apple", "banana", "orange", "mango", "grapes", "kiwi", "watermelon"];
console.log(fruits4);
fruits4.unshift("kiwi");
console.log(fruits4);
fruits4.unshift("grapes");
console.log(fruits4);

// Practice Questions ✅ 
// Qs. For the given start state of an array, change it to final form usning methods.
// Start State: months = ["january", "july", "march", "august"];
// Final State: ["july", "june", "march", "august"];
let months = ["January", "july", "march", "august"];
console.log(months);
months.shift();
months.shift();
console.log(months);
months.unshift("june");
months.unshift("july");
console.log(months);

// indexOf & includes Methods 
let primaryColors = ["red", "yellow", "blue"];
console.log(primaryColors);
console.log(primaryColors.indexOf("yellow"));
console.log(primaryColors.indexOf("green"));
console.log(primaryColors.indexOf("Yellow"));

console.log(primaryColors.includes("red"));
console.log(primaryColors.includes("green"));
console.log(primaryColors.includes("Yellow"));

// Concatination & Reverse Methods
let primaryColors1 = ["red", "yellow", "blue"];
let secondaryColors = ["orange", "green", "violet"];
console.log(primaryColors1.concat(secondaryColors));
console.log(primaryColors1);    // .concat() method doesn't change the original array.
console.log(secondaryColors);
console.log(secondaryColors.concat(primaryColors1));
console.log(secondaryColors.concat(primaryColors1).reverse());

console.log(secondaryColors.reverse());
console.log(secondaryColors);   // .reverse() method changes the original array.
console.log(secondaryColors.reverse());

// Slice in Arrays
let cars = ["BMW", "Mercedes", "Audi", "Volvo", "Jaguar"];
console.log(cars);
console.log(cars.slice(1, 4));
console.log(cars.slice(2));
console.log(cars.slice(-3));
console.log(cars.slice(1, -2));
console.log(cars.slice(cars.length-1));

// Splice in Arrays 
let colors = ["red", "yellow", "blue", "green", "violet", "orange"];
console.log(colors);
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "white"));
console.log(colors);

// Sort in Arrays
let car1 = ["BMW", "Mercedes", "Audi", "Volvo", "Jaguar"];
console.log(car1);
console.log(car1.sort());

let numbers = [99, 89, 67, 42, 100, 35];
console.log(numbers);
console.log(numbers.sort());

// Practice Questions ✅ 
// Qs. For the given start state of an array, change it to final form usning splice methods.
// Start State: months = ["january", "july", "march", "august"];
// Final State: ["july", "june", "march", "august"];
let months1 = ["january", "july", "march", "august"];
console.log(months1);
console.log(months1.splice(0, 2, "july", "june"));
console.log(months1);

// Qs. Return the index of the "javascript" from the given array, if it was reverse.
let languages = ["c", "C++", "php","python", "javascript", "c++", "java", "sql"]; 
console.log(languages);
console.log(languages.indexOf("javascript"));
console.log(languages.reverse());
console.log(languages.indexOf("javascript"));

// Array Reference ✅ 
// [1] == [1] - false
// [1] === [1] - false

let arr = ["a", "b", "c"];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push("d");
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arrCopy);
console.log(arr);

arrCopy = ["a", "b", "c"];
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push("d");
console.log(arr);
console.log(arrCopy);
arrCopy.pop();
console.log(arrCopy);
console.log(arr);

// Constants Array ✅ 
const arr1 = ["a", "b", "c"];
console.log(arr1);
arr1.push("d");
console.log(arr1);
arr1.pop();
console.log(arr1);

// Nested Array ✅ 
let nestedArray = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]; 
console.log(nestedArray);
console.log(nestedArray[0][1]);
console.log(nestedArray[1][2]);
console.log(nestedArray[2][0]);

// Practice Questions ✅ 
// Qs. Create a Nested Array to show the following tic-tac-toe game.
let ticTacToe = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
console.log(ticTacToe);

ticTacToe[0][0] = "X";
ticTacToe[0][1] = "O";
ticTacToe[0][2] = "X";
ticTacToe[1][0] = "O";
ticTacToe[1][1] = "X";
ticTacToe[1][2] = "O";
ticTacToe[2][0] = "X";
ticTacToe[2][1] = "O";
ticTacToe[2][2] = "X";
console.log(ticTacToe);
*/
