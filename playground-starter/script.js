// To print something in Developed tool: Console
// console.log("Hello, world");

// To pop-up message on the web page
// alert("Hello, Avic. Looks like you are enjoying Javascript");


// A variable is where you can store any data 
let username = "Marivic";
console.log("Hi, " + username);

// Maths operation can also be executed
let num1 = 3;
let num2 = 4;
let product = num1 * num2;
console.log("Product :", product);

// A Function is a block of code that can be called
function example() {
    console.log("This is how you write a function in JS");
}
example();

// Write a function to handle addition and call the function
function addition() {
    let x = 2;
    let y = 6;
    total = x + y;
    console.log("Total =", total);
}
addition();

// Write a function to handle addition and different numbers and call the function
function addition(x,y) {
    total = x + y;
    console.log("Total =", total);
}
addition(10,12);

//Write showName function
function showName() {
    let username = document.getElementById("name-text").value;
    console.log("Hi, " + username)
}




// let pets = ["Chilli","Rex","Roary","Fleur","Bella"];

// pets.forEach((pet) => {
//     if (pet == "Bella") {
//         console.log("I found Bella", pet);
//     }  else if (pet == "Chilli") {
//         console.log("It's Chilli this time");
//     }  else {
//         console.log("All of them are cute")
//     }
// });


// for (let index = 0; index < pets.length; index++) {
//     console.log("Found Pet:", pets[index]);
// }

// pets.forEach((pet) => {
//     console.log("For each | Found Pet", pet);
// });


// console.log("Hello World")

// for (let index = 0; count < 10; count++) {
//     console.log("Found Count", count);
// }

// pets.pop()
// // pets.splice()
// pets.push("Bella")

// console.log("Found Pets", pets)


// function showName() {
//     let inputField = document.getElementById('name-text')
//     // variable name best practices
//     // console.log("The Input Field Is: ", inputField);
//     // console.dir(inputField) - use dir to get all the available options
//     alert ("Hello " + inputField.value)
// }




