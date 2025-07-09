// Call Stack in JavaScript ✅ 
/*
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();
*/

// JS is Single Threaded ✅ 
/*
setTimeout(() => {
    console.log("Chandigarh University");
}, 2000);

console.log("Hello, I'm Bikram from Chandigarh University");
*/

// JS is Asynchronous ✅ 
// Callback Hell -> Callback Nesting

// let h1 = document.querySelector("h1");
/*
function changeColor() {
    h1.style.color = "red";
    setTimeout(() => {
        h1.style.color = "green";
        setTimeout(() => {
            h1.style.color = "blue";
            setTimeout(() => {
                h1.style.color = "yellow";
            }, 1000);
        }, 1000);
    }, 1000);
}

changeColor();
*/

/*
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("yellow", 1000);
        });
    });
});
*/

/*
function savetoDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
        success(data);
    } else {
        failure(data);
    }
}

savetoDB("Bikram", (data) => {
    console.log("Data saved to DB: " + data);
    savetoDB("Chandigarh University", (data) => {
        console.log("Data saved to DB: " + data);
        savetoDB("Chandigarh", (data) => {
            console.log("Data saved to DB: " + data);
        }, (data) => {
            console.log("Unable to save data to DB: " + data);
        });
    }), (data) => {
        console.log("Unable to save data to DB: " + data);
    }
}, (data) => {
    console.log("Unable to save data to DB: " + data);
});
*/

// Promise in JavaScript ✅ 
// then() and catch()
// Pending -> Resolved -> Rejected
// Promise Chaining -> Improve Version
// Results and Errors in Promise
// The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*
function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve(data);
        } else {
            reject(data);
        }
    });
}

savetoDB("Bikram").then((data) => {
    console.log("Data saved to DB: " + data);
    return savetoDB("Chandigarh University");
}).then((data) => {
    console.log("Data saved to DB: " + data);
    return savetoDB("Chandigarh");
}).then((data) => {
    console.log("Data saved to DB: " + data);
}).catch((data) => {
    console.log("Unable to save data to DB: " + data);
})
*/

// Async and Await in JavaScript ✅ 
// Async -> Await
/*
async function getData() {
    let data = await savetoDB("Bikram");
    console.log("Data saved to DB: " + data);
    data = await savetoDB("Chandigarh University");
    console.log("Data saved to DB: " + data);
    data = await savetoDB("Chandigarh");
    console.log("Data saved to DB: " + data);
}

getData();

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve(data);
        } else {
            reject(data);
        }
    });
}
*/

// Promise -> Let's apply promises to our callback hell ✅ 
/*
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

changeColor("red", 1000).then(() => changeColor("green", 1000)).then(() => changeColor("blue", 1000)).then(() => changeColor("yellow", 1000));
*/
