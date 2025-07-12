// async ✅ 
/*
async function greet() {
    // throw "404 Page Not Found";
    return "Hello";
}

greet()
    .then((result) => {
        console.log("Promise was Resolved");
        console.log("Result was: ", result);
    })
    .catch((error) => {
        console.log("Promise was Rejected");
        console.log("Error was: ", error);
    });
*/

// await ✅ 
// pause the exeustion of its srounding async function until the promise is settled (resolved or rejected)
/*
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(num);
        }, 1000);
    });
}

async function main() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

main();
*/

// Change Color using async and await ✅ 
/*
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color changed to " + color);
        }, delay);
    });
}

async function main() {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("black", 1000);
}

main();
*/

// Error Handling using async and await ✅ 
/*
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise was Rejected");
            }

            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color changed to " + color);
        }, delay);
    });
}

async function main() {
    try {
        await changeColor("red", 1000);
        await changeColor("blue", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("black", 1000);
    } catch (error) {
        console.log(error);
    }
    
    let a = 5;
    console.log(a);
    console.log(a + 5);
}

main();
*/

