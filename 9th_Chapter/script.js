// DOM Event ✅ 
// Events are signals that something has occurred. (user inputs / actions)
// Event Listeners (listening for events)

// onclick (when an element is clicked)
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});
*/

/*
let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        console.log("Button Clicked");
    });
});
*/

// onmouseenter (when the mouse enters an element)
/*
let btn = document.querySelectorAll("button");

btn.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
        console.log("Mouse Entered");
    });
});
*/

/*
let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayGoodbye);
    btn.addEventListener("dblclick", function () {
        console.log("Double Clicked");
    });
}

function sayHello() {
    alert("Hello");
}

function sayGoodbye() {
    alert("Goodbye");
}
*/

// Activity - Colour Coding Program ✅ 
/*
let btn = document.querySelector("#button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
*/

// Event Listeners for Elements ✅ 
/*
let pera = document.querySelector("p");

pera.addEventListener("click", function () {
    pera.style.backgroundColor = "red";
});

pera.addEventListener("dblclick", function () {
    pera.style.backgroundColor = "blue";
});

function changeColor() {
    pera.style.color = "green";
}
pera.addEventListener("mouseover", changeColor);

function changeBack() {
    pera.style.color = "black";
}
pera.addEventListener("mouseout", changeBack);
*/

/*
let box = document.querySelector(".box");

box.addEventListener("mouseenter", enterBox);

function enterBox() {
    console.log("Mouse Entered");
    box.style.backgroundColor = "yellow";
}

box.addEventListener("mouseleave", leaveBox);

function leaveBox() {
    console.log("Mouse Left");
    box.style.backgroundColor = "green";
}
*/

// this in Event Listeners ✅ 
/*
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let pera = document.querySelector("p");
let btn = document.querySelector("button");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
pera.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
*/

/*
btn.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});

pera.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});

h3.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});

h1.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});
*/

// Keyboard Event Listeners ✅ 
/*
let input = document.querySelector("#input");

input.addEventListener("keydown", function (event) {
    console.log(event);
    console.log("Key Pressed");
});

input.addEventListener("keyup", function (event) {
    console.log(event);
    console.log("Key Released");
});

input.addEventListener("keypress", function (event) {
    console.log(event.code);
    console.log(event.key);
    console.log("Key Pressed");
});
*/

// Form Event Listeners ✅ 
/*
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form Submitted");
});
*/

// Extracting Form Data ✅ 
/*
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(form);

    let username = this.elements[0];
    let password = this.elements[1];

    // let username = document.querySelector("#username");
    // let password = document.querySelector("#password");

    console.log(username.value);
    console.log(password.value);

    alert(`Hi ${username.value}, your password is ${password.value}`);
});
*/
