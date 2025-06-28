// Array Methods ✅ 

// 1. forEach()
// 2. map()
// 3. filter()
// 4. some()
// 5. every()
// 6. reduce()

/*
// forEach()
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});

// map()
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// filter()
const even = numbers.filter((number) => number % 2 === 0);
console.log(even);

// some()
const hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven);

// every()
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven);

// reduce()
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);
*/

// Qs. Find maximum number in an array using reduce()
/*
const numbers = [1, 2, 3, 4, 5];
const maxNumber = numbers.reduce((max, number) => Math.max(max, number), numbers[0]);
console.log(maxNumber);
*/

// Qs. Check if all numbers in our array are multiples of 10 or not.
/*
const numbers = [10, 20, 30, 40, 50];
const areAllMultiplesOfTen = numbers.every((number) => number % 10 === 0);
console.log(areAllMultiplesOfTen);
*/

// Qs. Create a function to find the min numbers in an array.
/*
const numbers = [1, 2, 3, 4, 5];
const minNumber = numbers.reduce((min, number) => Math.min(min, number), numbers[0]);
console.log(minNumber);
*/

// Default parameters
/*
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add()); // 0
console.log(add(1)); // 1
console.log(add(1, 2)); // 3
*/

// Spread operator
/*
// Sperad with array literal
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Spread with object literal
const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }

const chars = [..."hello"];
console.log(chars); // ["h", "e", "l", "l", "o"]
*/

// Rest
// Allows a function to take an indenefinite number of arguments and bundles them into an array.
/*
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
*/

// Destructuring
// Allows you to extract values from arrays or objects and assign them to variables.
/*
// Destructuring with Objects
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;
console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"
*/

