// JS Program to delete a property from Program

let userInput = prompt("Which propety you want to delete?");

let A = {
    name : "Purv",
    surnmae : "Jeja",
    college : "AMC"
};

for(let key in A) 
    if(key == userInput) {
        delete A[key];
        break;
    }

for(let i in A){
    alert(A[i]);
}