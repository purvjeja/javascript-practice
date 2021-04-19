// Task 1
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.
sumInput();

function sumInput(){
    let userInput;
    let array=[];
    while(true){
        userInput = parseInt(prompt("Enter Number?"));
        if(!userInput || isNaN(userInput)) 
          break;
        else
          array.push(userInput);
    }
    let sum = 0;
    for(let i=0 ; i<array.length ; i++){
       sum +=array[i]; 
    }
    alert("Sum is : " + sum);
}


// Task 2
//Code From Solution
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );