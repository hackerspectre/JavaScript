// Loops in JS ✅ 
// Loops are used to execute a piece of code again & again 
// There are three types of loops in JS:
// 1. For Loop 
/*
for(let i=0; i<=5; i++) {
    console.log(i);
}
*/

/*
for(let i=1; i<=5; i++) {
    console.log("Mr. Hacker Bikram");
}
*/

// 2. While Loop 
/*
let i = 0;
while(i<=5) {
    console.log(i);
    i++;
}
*/

/*
let i = 1;
while(i<=5) {
    console.log("Mr. Hacker Bikram");
    i++;
}
*/

// 3. Do-While Loop 
/*
let i = 0;
do {
    console.log(i);
    i++;
} while(i<=5);
*/

/*
let count = 1;
do {
    console.log("Mr. Hacker Bikram");
    count++;
} while(count<=5);
*/

// Break & Continue Statements 
/*
for(let i=0; i<=5; i++) {
    if(i==3) {
        break;
    }
    console.log(i);
}
*/

/*
for(let i=0; i<=5; i++) {
    if (i==3) {
        continue;
    }
    console.log(i);
}
*/

/*
let i = 0;
while(i<=5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}
*/

/*
let i = 0;
while(i<=5) {
    if(i == 3) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
*/

/*
let count = 0;
do {
    if(count == 3) {
        break;
    }
    console.log(count);
    count++;
} while(count<=5);
*/

/*
let count = 0;
do {
    if(count == 3) {
        count++;
        continue;
    }
    console.log(count);
    count++;
} while(count<=5);
*/

// for-of Loop ✅ 
/*
let str = "JavaScript";
for (let char of str) {
    console.log(char);
}
*/

/*
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
*/

// for-in Loop ✅ 
/*
let Student = {
    name: "Bikram",
    age: 22,
    CGPA: 8.4,
    isPass: true,
};

for (let key in Student) {
    console.log("Key=", key, "Value=", Student[key]);
}
*/

/*
let numbers = [1, 2, 3, 4, 5];
for (let i in numbers) {
    console.log(i);
}
*/

// Switch Statement ✅ 
/*
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('Today is not Monday or Tuesday');
}
*/


// Let‘s Practice ✅ 

// Question : 1 | Calculate sum of 1 to n 
/*
let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log(sum);
*/

// Question : 2 | Calculate sum of 1 to n using while loop 
/*
let n = 5;
let sum = 0;

let i = 0;
while(i<=n) {
    sum += i;
    i++;
}

console.log(sum);
*/

// Question : 3 | Print all even numbers from 0 to 100. 
/*
for(let i=0; i<=100; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
*/

// Question : 4 | Print all odd numbers from 0 to 100. 
/*
for(let i=0; i<=100; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}
*/

// Question : 5 | Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. 
/*
let gameNumber = 7;
let guessCount = 0;
while(true) {
    let userGuess = parseInt(prompt("Guess the game number: "));
    guessCount++;
    if(userGuess == gameNumber) {
        alert(`You guessed the number in ${guessCount} attempts`);
        break;
    } else if(userGuess > gameNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }
}
*/

// Using do-while loop
/*
let gameNumber = 7;
let guessCount = 0;
do {
    let userGuess = parseInt(prompt("Guess the game number: "));
    guessCount++;
    if(userGuess == gameNumber) {
        alert(`You guessed the number in ${guessCount} attempts`);
        break;
    } else if(userGuess > gameNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }
} while(true);
*/

// Strings in JS ✅ 
// String is a sequence of characters used to represent text 
/*
let str = "javaScript";
console.log(str);

// String Length 
console.log(str.length);

// String Indices 
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

// String Concatenation 
let str1 = "Hello ";
let str2 = "World!";
console.log(str1 + str2);
// or
console.log(str1.concat(str2));
*/

// String Methods ✅ 
// String methods are used to perform operations on strings
// 1. toUpperCase() - converts a string to uppercase
// 2. toLowerCase() - converts a string to lowercase
// 3. trim() - removes whitespace from the start and end of a string
// 4. charAt() - returns the character at a specified index in a string
// 5. indexOf() - returns the index of the first occurrence of a specified value in a string
// 6. lastIndexOf() - returns the index of the last occurrence of a specified value in a string
// 7. split() - splits a string into an array of substrings
// 8. replace() - replaces a specified value with another value in a string
/*
let str = "Hello World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.charAt(0));
console.log(str.indexOf("World"));
console.log(str.lastIndexOf("World"));
console.log(str.split(" ")); // returns an array of substrings
console.log(str.replace("World", "Universe")); // returns a new string with the replacement
*/

// String Template Literals ✅
// String template literals are a way to create strings that can contain expressions
// They are defined using backticks (``) and can contain placeholders for expressions
// The placeholders are replaced with the values of the expressions when the string is created
// Example: `Hello, ${name}!`
// This will replace the placeholder with the value of the name variable
/*
let name = "Bikram";
let age = 22;
console.log(`Hello, ${name}! You are ${age} years old.`);
// or
console.log(`Hello, ${name}! You are ${age} years old. Your name has ${name.length} characters.`)
*/

// String Methods - Advanced ✅
// 1. startsWith() - returns a boolean indicating whether a string starts with a specified value
// 2. endsWith() - returns a boolean indicating whether a string ends with a specified value
// 3. includes() - returns a boolean indicating whether a string includes a specified value
// 4. repeat() - returns a new string that is a specified number of repetitions of a
// 5. padStart() - returns a new string that is padded with a specified string to
// 6. padEnd() - returns a new string that is padded with a specified string to
// 7. match() - returns an array of matches for a specified pattern in a string
// 8. search() - returns the index of the first occurrence of a specified pattern in a
// 9. replaceAll() - returns a new string with all occurrences of a specified pattern replaced
// 10. matchAll() - returns an iterator of all matches for a specified pattern in a
// 11. trimStart() - returns a new string with whitespace removed from the start of a
// 12. trimEnd() - returns a new string with whitespace removed from the end of a
// 13. normalize() - returns a new string with Unicode normalization applied
// 14. normalizeForm() - returns a new string with Unicode normalization applied in a specified form
// 15. codePointAt() - returns the Unicode code point at a specified index in a
// 16. codePointBefore() - returns the Unicode code point before a specified index in a
// 17. codePointAfter() - returns the Unicode code point after a specified index in a
// 18. fromCodePoint() - returns a string created from a specified Unicode code point

/*
let str = "Hello World!";
console.log(str.slice(0, 5)); 
console.log(str.slice(-5)); 
console.log(str.slice(0, -5)); 
*/

// Let‘s Practice ✅ 
// Ouestion : 1 | Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: user name = “bikram” , username should be “@bikram6” 
/*
let name = prompt("Enter your full name");
let username = "@" + name + name.length;
console.log(username);  // Output: @bikram6
*/

