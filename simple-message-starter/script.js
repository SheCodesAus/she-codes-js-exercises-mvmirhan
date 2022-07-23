
window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "*********";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}

function showMessage() {
    let message1 = (document.getElementById("message-text").value);
    let name = (document.getElementById("name").value);
    let message = message1 + " - " + name
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message;
    console.log(message)
}




// // console.log("Script Loaded")

// // window.onload = function () {
// //     console.log("page has loaded")
// // }
// // // Console log does not rely on window to load so it will return first
// // //compared to the previous console log built within window load
// // console.log("Script Loaded")




