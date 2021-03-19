// Question
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in thilet s task.

// My Code
while(true){
    let userInput = prompt("Enter a Number?");
    if( userInput > 100 ) {
        if(!userInput){
             break;
        }
        else{
         alert("Your Inputed Number is : " + userInput);   
         break;
        } 
       }
}

// Solution Code 
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);