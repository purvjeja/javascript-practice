import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div id="App" className="App">
      <header className="App-header">
        
        <div id="menu" className="problem">
        <Problem1 /> <hr />
        <Problem2 /> <hr />
        <Problem3 />
        </div>
        <div id="problems" className="problem">
        </div>
      </header>
    </div>
  );
}
// function Names(props){
//   return <h1>Hello, {props.name} {props.surname}</h1>; 
// }

function Problem1(){
  var status = useState('none');  
  const imagetoggling = (status) => { document.getElementById('image').style.display = status; }

  return (
      <div>
      <h1>Problem 1</h1>
      <h3>To toggle image</h3>
      <img id="image" src={logo} alt="React"/> <br />
      <button  onClick={() => {status = ((status === 'none')?'block':'none');  imagetoggling(status);}}> Toggle </button>
      </div>
  )      
}

function Problem2(){
  const [multiplicationTable,setMultiplicationTableValue] = useState([]);
  
  function calculateTable(){
    const arrayoftable = [];
    const inputvalue = parseInt(prompt("Enter a number for table?"));
    if((isNaN(inputvalue))) {
      alert("NOT A NUMBER!"); 
      setMultiplicationTableValue([]);
      return;
    }
    for(let i=0 ; i<=10 ; i++)  arrayoftable.push(inputvalue + " * " + i + " = " + i * inputvalue);
    setMultiplicationTableValue(arrayoftable);
  }
  return(
    <div>
      <h1>Problem 2</h1>
      <h3>To Create Multiplication Table of any number.</h3>
      { multiplicationTable.map((result) => <p>{result}</p>)}
      <button onClick={calculateTable}> {(multiplicationTable.length === 0) ?'Calculate':'Calculate Again'} </button>
    </div>
  )
}

function Problem3(){
  const [currentNumber,setCurrentNumber] = useState(5);
  const incrementNumber = () =>{
    if(currentNumber + 1 > 10) {
      alert("Can't Increase");
      return;
    }
    setCurrentNumber(currentNumber + 1);
  } 
  const decrementNumber = () => {
    if(currentNumber - 1 < 0){ 
      alert("Can't Decrease");
      return;
    }
    setCurrentNumber(currentNumber - 1);
  }
  return(
    <div>
      <h1>Problem 2</h1>
      <h3>Increment or Decrement a Number</h3>
      <button onClick={incrementNumber}> +  </button>
      <h1>{currentNumber}</h1>
      <button onClick={decrementNumber}> - </button>
    </div>
  )
}

export default App;