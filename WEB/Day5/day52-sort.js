// sorting 
let userInput = prompt("Enter Array Elements in one line separated by comma?");
let arr = userInput.split(',');
arr.sort((a, b) => b - a);
alert( arr );