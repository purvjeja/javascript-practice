// Removing speific item from array 

let userInput = prompt("Enter the array?");
let arraySeparate = userInput.split(",");

let toRemove = prompt("Enter the item which you want to remove?");

for (let elem in arraySeparate) {
     if (elem == toRemove) arraySeparate.splice(arraySeparate.indexOf(elem),1);
}
alert(arraySeparate);