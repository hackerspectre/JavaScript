// API (Application Programming Interface) ✅ 
// API is a set of rules that allow different applications to communicate with each other.

// Some random APIs:
// https://catfact.ninja/fact   (some random cat facts)
// https://api.chucknorris.io/jokes/random   (some random jokes)
// https://dog.ceo/api/breeds/image/random   (some random dog images)
// https://github.com/Hipo/university-domains-list   (some random university domains)


// JSON (JavaScript Object Notation) ✅ 
// Website - https://www.json.org/json-en.html 
// JSON Validator - https://jsonlint.com/ 
// JSON is a syntax for storing and exchanging data.


// Accessing Data from JSON ✅ 
// JSON.parse(jsonString) - converts a JSON string into a JavaScript object.
/*
let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
console.log(jsonString);
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name); // "John"
console.log(jsonObject.age); // 30
console.log(jsonObject.city); // "New York"
*/

// JSON.stringify(jsonObject) - converts a JavaScript object into a JSON string.
/*
let jsonObject = {name: "John", age: 30, city: "New York"};
console.log(jsonObject);
let jsonString = JSON.stringify(jsonObject);
console.log(jsonString);
*/

// Testing API Requests ✅ 
// Tools - 1. Postman 2. Insomnia 3. Hoppscotch


// Ajax (Asynchronous JavaScript and XML) ✅ 
// Website - https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX
// Ajax is a way to exchange data with a server asynchronously without having to reload the page.

// Http Verbs ✅ 
// GET - retrieve data from a server
// POST - send data to a server
// PUT - update data on a server
// DELETE - delete data from a server

// Status Codes ✅ 
// 200 - OK
// 201 - Created
// 202 - Accepted
// 204 - No Content
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 500 - Internal Server Error
// 501 - Not Implemented
// 503 - Service Unavailable


// CORS (Cross-Origin Resource Sharing) ✅ 
// Website - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// CORS is a mechanism that allows a browser to allow cross-origin HTTP requests.


// Add information in URLs ✅ 
// https://example.com?name=John&age=30

// Add information in Headers ✅ 
// https://example.com
// {
//     "name": "John",
//     "age": 30
// }

// Add information in Body ✅ 
// https://example.com
// {
//     "name": "John",
//     "age": 30
// }

// Add information in Query Params ✅ 
// https://example.com?name=John&age=30

// Add information in Form Data ✅ 
// https://example.com
// name: John
// age: 30

// Add information in JSON ✅ 
// https://example.com
// {
//     "name": "John",
//     "age": 30
// }

// Search
// https://www.google.com/search?q=javascript

// YouTube
// https://www.youtube.com/results?search_query=javascript

// GitHub
// https://github.com/search?q=javascript

// Random University Domains
// https://github.com/Hipo/university-domains-list
// http://universities.hipolabs.com
// http://universities.hipolabs.com/search?name=india
// http://universities.hipolabs.com/search?name=india&country=delhi


// Https Headers ✅ 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


// Our first Request ✅ 
// using fetch
/*
let url = "https://api.chucknorris.io/jokes/random";
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        console.log("data1 =", data.value);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        console.log("data2 =", data.value);
    })
    .catch((error) => {
        console.log(error);
    });
*/


// Using fatch with async/await
/*
let url = "https://api.chucknorris.io/jokes/random";
async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("data1 =", data.value);
        res = await fetch(url);
        data = await res.json();
        console.log("data2 =", data.value);
    } catch (error) {
        console.log(error);
    }
}
getData();
*/


// Using axios ✅ 
// Library to make HTTP requests from JavaScript.
/*
let url = "https://api.chucknorris.io/jokes/random";

async function getData() {
    try {
        let res = await axios.get(url);
        console.log(res);
        console.log("data1 =", res.data.value);

        res = await axios.get(url);
        console.log(res);
        console.log("data2 =", res.data.value);
    } catch (err) {
        console.log("ERROR - ", err);
    }
}

getData();
*/


// DogPicture API ✅ 
// https://dog.ceo/api/breeds/image/random 
/*
let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", () => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let img = document.querySelector("img");
            img.src = data.message;
        })
        .catch((error) => {
            console.log(error);
        });
});
*/


// Sending Headers with API Requests ✅ 
// https://api.chucknorris.io/jokes/random?category=dev
/*
const url = "https://api.chucknorris.io/jokes/random?category=dev";

async function getData() {
    try {
        const config = {
            headers: {
                "Accept": "application/json"
            }
        };
        let res = await axios.get(url, config);
        console.log(res);
        console.log(res.data.value);
    } catch (error) {
        console.log(error);
    }
}

getData();
*/


// Axios - Update Query String ✅ 
// Activity using Query Strings
// http://universities.hipolabs.com/search?name=india&country=delhi 

// University API using Query Strings ✅ 

let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?";

btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;

    let colleges = await getColleges(country);
    show(colleges);
});

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    colleges.forEach((college) => {
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    });
}

async function getColleges(country) {
    try {
        const config = {
            headers: {
                "Accept": "application/json"
            }
        };
        let res = await axios.get(`${url}country=${country}`, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
