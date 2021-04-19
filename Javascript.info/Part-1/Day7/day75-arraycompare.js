// JS Program to compare elements of two array

let userInputArray1 = prompt("Enter Array 1? (write comma separeted values)");
let userInputArray2 = prompt("Enter Array 2? (write comma separeted values)");

let Array1 = userInputArray1.split(",");
let Array2 = userInputArray2.split(",");
let length = (Array2.length > Array1.length) ? Array2.length : Array1.length;

for(let i=0; i < length  ; i++){
   (Array1[i] == Array2[i] ) ? alert(" Same ") : alert(" Not Same ") ;  
   console.log(i);
}