// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.


let calculator = {
    num1 : 0,
    num2 : 0,
    read : function() {
        this.num1 = parseInt(prompt("Enter Number 1?"));
        this.num2 = parseInt(prompt("Enter Number 2?"));
    },
    sum() {return (this.num1 +this.num2);},
    mul() {return (this.num1*this.num2);}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());    

// solution code
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );