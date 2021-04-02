let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach=[food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  speedy.eat("apple");
  lazy.eat("Banana");
  alert( speedy.stomach ); 
  alert( lazy.stomach ); 