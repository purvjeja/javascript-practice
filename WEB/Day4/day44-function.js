// Task 1

userAge = prompt("Enter Age?");
alert(checkAge(userAge));

function checkAge(age) {
   let check =  (age > 18) ? true : confirm('Did parents allow you?')  
   return check;
}

// Task 2
// function which returns minimum out of 2 numbers
function min(num1,num2) {
    let result;
    result = (num1 < num2) ? num1 : num2;
    return result;
}

// Task 3
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
