// JavaScript Objects Literals ✅ 
// Create an object using an object literal
/*
const student = {
    name: "Bikram",
    age: 23,
    marks: 81.17,
    city: "Delhi"
};

let delhi = {
    latitude: 28.7041,
    longitude: 77.1025
};

const items = {
    price : 19.99,
    colors : ["red", "green", "blue"],
    quantity : 10,
    discount : 0.2,
    total : function() {
        return this.price * this.quantity * (1 - this.discount);
    }

};
*/

// Creating an object literal for the properties of therad/twitter post which includes - 
// 1. username
// 2. content
// 3. liks 
// 4. reports
// 5. tags
/*
const post = {
    username : "JohnDoe",
    content : "Hello, world!",
    likes : 145,
    reports : 5,
    tags : ["javascript", "html", "css"]
}

console.log(post);
*/

// Get Values 
/*
const student = {
    name: "Bikram",
    marks: 81.17,
    subjects: ["Maths", "Physics", "Chemistry"]
};

console.log(student.name);
console.log(student.marks);
console.log(student.subjects);
console.log(student.subjects[0]);
*/

/*
const obj = {
    1: "One",
    2: "Two",
    null: "Null",
    undefined: "Undefined",
    NaN: "Not a Number",
    Infinity: "Infinity",
    Symbol: "Symbol",
    true: "True",
    false: "False"
};

console.log(obj);
console.log(obj[1]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[NaN]);
console.log(obj[Infinity]);
console.log(obj[Symbol]);
console.log(obj[true]);
console.log(obj[false]);
*/

// Add & Update Values
/*
const student = {
    name: "Bikram",
    age: 23,
    marks: 81.17,
    city: "Delhi"
};

console.log(student);

student.age = 24;
student.city = "New Delhi";

console.log(student);

//  Add a new key-value pair
student.country = "India";
console.log(student);

// Delete Values
delete student.city;
console.log(student);
*/

// Nested Objects
/*
const student = {
    name: "Bikram",
    age: 23,
    CGPA: 81.17,
    city: "Delhi",
    address: {
        street: "City Road",
        city: "Noida",
        state: "Uttar Pradesh",
        zip: "201301"
    },
    subjects: ["Maths", "Physics", "Chemistry"]
};

console.log(student);
console.log(student.address);
console.log(student.address.city);
console.log(student.address.street);
console.log(student.address.zip);
console.log(student.address.state);
console.log(student.subjects[0]);
*/

// Array of Objects
/*
const students = [
    {
        name: "John Doe",
        age: 20,
        city: "New York"
    },
    {
        name: "Jane Doe",
        age: 21,
        city: "Los Angeles"
    },
    {
        name: "Bob Smith",
        age: 22,
        city: "Chicago"
    }
];

console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[0].city);
console.log(students[1]);
console.log(students[1].name);
console.log(students[1].age);
console.log(students[1].city);
console.log(students[2]);
console.log(students[2].name);
console.log(students[2].age);
console.log(students[2].city);
*/

// Math Objects
/*
const radius = 5;
const area = Math.PI * radius * radius;
console.log(area);

const random = Math.random();
console.log(random);

// Generate a random number between 10 and 20
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange);

const date = new Date();
console.log(date);

const timestamp = Date.now();
console.log(timestamp);

const now = new Date(timestamp);
console.log(now);

// math.abs
const number = -10;
const absoluteValue = Math.abs(number);
console.log(absoluteValue);

// math.ceil
const decimal = 3.14;
const roundedUp = Math.ceil(decimal);
console.log(roundedUp);

// math.floor
const decimal = 3.14;
const roundedDown = Math.floor(decimal);
console.log(roundedDown);

// math.pow
const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log(result);
*/

// Random Integer
/*
const randomInteger = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger);
*/

// Practice Question
// Qs. Generate a random number between 1 and 100
// const randomInteger = Math.floor(Math.random() * 100) + 1;

// Qs. Generate a random number between 21 and 25
/*
const randomInteger = Math.floor(Math.random() * 5) + 21;
console.log(randomInteger);
*/

// Guess the Number Game
/*
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess the number between 1 and 10:"));
while (guess !== secretNumber) {
    if (guess > secretNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }
    guess = parseInt(prompt("Guess the number between 1 and 10:"));
}
alert("Congratulations! You guessed the number!");
*/
