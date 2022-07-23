// let shoppingListItems = []
let shoppingListItems = ["milk","eggs","bread"]
let listElement = document.getElementById("shopping-list-items");


updateItems()

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);});
}

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    updateItems()
    console.log(shoppingListItems);
}

function clearItems() {
    shoppingListItems=[]
    updateItems()
}

// shoppingListItems.forEach((item) => {
//     let itemElement = document.createElement("ul");
//     itemElement.innerText = item;
//     listElement.appendChild(itemElement);
//     console.log(item)
// });

// function updateItems() {
//     let listElement = document.getElementById("shopping-list-items");
//     listElement.innerHTML = "";
    
//     shoppingListItems.forEach((item) => {
//         let itemElement = document.createElement("li");
//         itemElement.innerText = item;
//         listElement.appendChild(itemElement);});
// }

