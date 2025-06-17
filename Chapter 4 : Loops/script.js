// Loops ✅ 
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Do While Loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Nested Loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i, j);
    }
}

// Break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/

// Practice Questions ✅ 
// Qs. Print all odd number (1 to 15)
/*
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Forward Loop
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// Reverse Loop
for (let i = 15; i >= 1; i -= 2) {
    console.log(i);
}
*/

// Qs. Print all even number (1 to 10)
/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 2; i -= 2) {
    console.log(i);
}
*/

// Qs. Print the multiplication table of 5
/*
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}
*/

// Qs. Print the multiplication table of 5 in reverse order
/*
for (let i = 10; i >= 1; i--) {
    console.log(5 * i);
}
*/

// Loops with Arrays ✅ 
/*
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// For Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
*/

// Loops with Nested Arrays ✅ 
/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
        console.log(matrix[i][j]);
    }
}
*/

// for of loop ✅ 
/*
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

for (let fruit of fruits) {
    console.log(fruit);
}

for (let name of "JavaScript") {
    console.log(name);
}
*/

// Nested for of loop ✅ 
/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row of matrix) {
    for (let col of row) {
        console.log(col);
    }
}

for (let row of matrix) {
    for (let col of row.reverse()) {
        console.log(col);
    }
}
*/

// Todo apps only JS ✅ 
// 1. List all todos
// 2. Add a todo
// 3. Delete a todo
// 4. Quit
/*
let todos = [];

while (true) {
    console.log("1. List all todos");
    console.log("2. Add a todo");
    console.log("3. Delete a todo");
    console.log("4. Quit");

    let choice = prompt("Enter your choice: ");

    if (choice === "1") {
        console.log("Todos:");
        console.log(todos);
    } else if (choice === "2") {
        let todo = prompt("Enter the todo: ");
        todos.push(todo);
        console.log("Todo added successfully");
    } else if (choice === "3") {
        let index = prompt("Enter the index of the todo to delete: ");
        todos.splice(index, 1);
        console.log("Todo deleted successfully");
    } else if (choice === "4") {
        console.log("Goodbye!");
        break;
    } else {
        console.log("Invalid choice");
    }
}
*/
