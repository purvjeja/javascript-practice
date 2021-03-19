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