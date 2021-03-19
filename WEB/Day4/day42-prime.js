// Write the code which outputs prime numbers in the interval from 2 to n

let number = prompt("Enter Range?");
let i=1;

do{
    if(isprime(i)) alert(i); 
    i++;
}
while(i <= number);

function isprime(n){   
    let prime=false;
    let j;
    for( j=1 ; j < i ; j++){
     if(n%j==0) break;
    }
    if(j>=n) prime=true;
    return prime;
}