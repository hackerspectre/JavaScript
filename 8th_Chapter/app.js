// DOM (Document Object Model) ✅ 
// The DOM represents a document as a tree of objects. Each node in the tree is called an element. It allows us to access and manipulate the structure and content of the document.
/*
console.dir(document);
console.dir(document.all);
console.dir(document.all[8]);
console.dir(document.all[8].innerHTML);
console.dir(document.all[8].innerHTML = "Peter Parker");
*/

// Selecting elements from the DOM ✅ 
// document.getElementById()
// Returns the element as an object or null (if not found)
/*
console.dir(document.getElementById("mainImg"));
console.dir(document.getElementById("mainImg").src);
document.getElementById("mainImg").src = "assets/creation_1.png";
console.dir(document.getElementById("mainImg").src);
*/

// document.getElementsByClassName()
// Returns the elements as an HTML Collection or empty collection (if not found)
/*
console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[0]);
console.dir(document.getElementsByClassName("oldImg")[0].src);
document.getElementsByClassName("oldImg")[0].src = "assets/spiderman_img.png";
console.dir(document.getElementsByClassName("oldImg")[0].src);
*/
/*
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`Value of smallImages[${i}]: ${smallImages[i].src} changed`);
}
*/

// document.getElementsByTagName()
// Returns the elements as an HTML Collection or empty collection (if not found)
/*
console.dir(document.getElementsByTagName("img"));
console.dir(document.getElementsByTagName("img")[0]);
console.dir(document.getElementsByTagName("img")[0].src);
document.getElementsByTagName("img")[0].src = "assets/creation_1.png";
console.dir(document.getElementsByTagName("img")[0].src);
*/

// Query Selector ✅ 
// document.querySelector()
/*
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("h1").innerHTML);

console.dir(document.querySelector("#description"));
console.dir(document.querySelector("#description").innerHTML);

console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector(".oldImg").src);

console.dir(document.querySelector("div a"));
console.dir(document.querySelector("div a").innerHTML);
*/

// document.querySelectorAll()
/*
console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll("div a")[0]);
console.dir(document.querySelectorAll("div a")[0].innerHTML);

console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll(".oldImg")[0]);
console.dir(document.querySelectorAll(".oldImg")[0].src);
*/

// Setting Content in Object ✅ 
// Using Properties & Methods

// innerText
// Show the visiable text contained in a node
/*
console.dir(document.querySelector("p").innerText);
console.dir(document.querySelector("p").innerText = "Hi I'm Peter Parker!");
*/

// innerHTML
// Shows the full markup of a node
/*
console.dir(document.querySelector("p").innerHTML);
console.dir(document.querySelector("p").innerHTML = "Hi I'm <b>Peter Parker!</b>");
*/

// innerContent
// Shows all the full text
/*
console.dir(document.querySelector("p").textContent);
console.dir(document.querySelector("p").textContent = "Hi I'm Peter Parker!");
*/

/*
let heading = document.querySelector("h1");
console.dir(heading.innerText);

// heading.innerHTML = "<u>Spider-Man</u>";
// console.dir(heading.innerHTML);

heading.innerHTML = `<u>${heading.innerText}</u>`;
console.dir(heading.innerHTML);
*/

// Manipulating Attributes ✅ 
// src, id, class, href, style

// obj.getAttribute("attr")
/*
let mainImg = document.getElementById("mainImg");
console.dir(mainImg.getAttribute("src"));
*/

// obj.setAttribute("attr", "value")
/*
mainImg.setAttribute("src", "assets/creation_1.png");
console.dir(mainImg.getAttribute("src"));
*/

// Manipulating Styles ✅ 
// obj.style.cssProperty = "value"
/*
let description = document.getElementById("description");
console.dir(description.style.backgroundColor);
description.style.backgroundColor = "yellow";
console.dir(description.style.backgroundColor);

let mainImg = document.getElementById("mainImg");
console.dir(mainImg.style.width);
mainImg.style.width = "50%";
console.dir(mainImg.style.width);

let images = document.getElementsByClassName("oldImg");
for (let i = 0; i < images.length; i++) {
    images[i].style.width = "50%";
    console.log(`Value of images[${i}]: ${images[i].style.width} changed`);
}
*/

// Manipulating Classes ✅ 
// obj.classList.add("class")
// obj.classList.remove("class")
// obj.classList.toggle("class")
// obj.classList.contains("class")
/*
let mainImg = document.getElementById("mainImg");
console.dir(mainImg.classList);
mainImg.classList.add("newClass");
console.dir(mainImg.classList);
mainImg.classList.remove("newClass");
console.dir(mainImg.classList);
mainImg.classList.toggle("newClass");
console.dir(mainImg.classList);
mainImg.classList.toggle("newClass");
console.dir(mainImg.classList);
console.dir(mainImg.classList.contains("newClass"));

let images = document.getElementsByClassName("oldImg");
for (let i = 0; i < images.length; i++) {
    images[i].classList.add("newClass");
    console.log(`Value of images[${i}]: ${images[i].classList} changed`);
}

let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].classList.add("newClass");
    console.log(`Value of links[${i}]: ${links[i].classList} changed`);
}
*/

// Navigating the DOM Tree ✅ 
// obj.parentNode
// obj.children
// obj.firstElementChild
// obj.lastElementChild
// obj.nextElementSibling
// obj.previousElementSibling
// obj.parentElement
/*
let description = document.getElementById("description");
console.dir(description.parentNode);
console.dir(description.children);
console.dir(description.firstElementChild);
console.dir(description.lastElementChild);
console.dir(description.nextElementSibling);
console.dir(description.previousElementSibling);
console.dir(description.parentElement);
*/

// Creating Elements ✅ 
// document.createElement()
/*
let box = document.createElement("div");
box.classList.add("box");
console.dir(box);

let boxLink = document.createElement("a");
boxLink.classList.add("boxLink");
console.dir(boxLink);
*/

// Adding Elements to the DOM Tree ✅ 
// obj.appendChild()
// obj.insertBefore()
/*
let box = document.createElement("div");
box.classList.add("box");
console.dir(box);

let boxLink = document.createElement("a");
boxLink.classList.add("boxLink");
console.dir(boxLink);

let description = document.getElementById("description");
console.dir(description.parentNode);
description.parentNode.insertBefore(box, description);
console.dir(description.parentNode);
box.appendChild(boxLink);
console.dir(box);
*/

// Removing Elements from the DOM Tree ✅ 
// obj.remove()
// obj.removeChild()
/*
let description = document.getElementById("description");
console.dir(description.parentNode);
description.parentNode.removeChild(description);
console.dir(description.parentNode);
*/

