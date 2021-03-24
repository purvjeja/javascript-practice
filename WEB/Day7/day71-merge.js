// Javascript Program to merge two arrays and remove duplicate items 

let userInputArray1 = prompt("Enter Array 1? (write comma separeted values)");
let userInputArray2 = prompt("Enter Array 2? (write comma separeted values)");

let Array1 = userInputArray1.split(",");
let Array2 = userInputArray2.split(",");
for(let i = 0 ; i < Array1.length ; i++) {
    for(let j = 0 ; j < Array2.length ; j++){
        if(Array1[i] == Array2[j]) Array2.splice(j,1);
    }
}

let Array = Array1.concat(Array2);
alert(Array);