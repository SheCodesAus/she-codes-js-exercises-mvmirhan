function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function multiply(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
}

function divide(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;
}


function add(numberToAdd) {
    // Get DOM element
    let counter = document.getElementById('number')
    
    // Add 1 to the current value
    let newValue = parseInt(counter.innerHTML) + numberToAdd
    
    // Re-assign the value to the DOM element
    counter.innerHTML = newValue
}

function subtract(numberToMinus) {        
    let counter = document.getElementById('number')
    let newValue = parseInt(counter.innerHTML) + numberToMinus
    counter.innerHTML = newValue    
}

 



// // Console set-up
//     // console.dir(counter)
//     // console.log("Number to Add", numberToAdd);

//     // console.log("Type:", typeof counter)