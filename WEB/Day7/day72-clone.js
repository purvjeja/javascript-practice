// JS program to clone a JS object

let A = {
    name : "Purv",
    surnmae : "Jeja",
    college : "AMC",
    office : [1,2,3]
};

let B = {};

for(let i in A){
    B[i] = A[i];
} 

for(let i in A){
    alert(B[i]);
}
