import logo from './logo.svg';
import './App.css';
let numberforproblemthree = 5;

function App() {
  return (
    <div id="App" className="App">
      <header className="App-header">
        <br></br>
        <div id = "menu">
        <button onClick={() => problem1() }>PROBLEM 1</button>
        <button onClick={() => problem2() }>PROBLEM 2</button>
        <button onClick={() => problem3() }>PROBLEM 3</button>
        </div>
        <div id="problems"></div>
      </header>
    </div>
  );
}

function problem1(){
  let problemdivision = document.getElementById('problems');
  problemdivision.innerHTML = " ";
  let divMain =  document.createElement('div');
  divMain.className = "main";
  let problemstatementdivision = document.createElement('div');
  problemstatementdivision.className = "problemstatement";
  problemstatementdivision.innerHTML = "<h3>Problem Statement 1 : To remove image on Button click.</h3>";
  
  let button = document.createElement('button');
  button.innerText = "Click Me";
  button.addEventListener('click',() => { removeImage() });
  
  let image = document.createElement('img');
  image.src = logo;
  image.className = "App-logo";
  image.id="image";
  
  divMain.append(problemstatementdivision);
  divMain.append(image);
  divMain.append(button);
  problemdivision.append(divMain);
}

function removeImage(){
  let imageStatus = document.getElementById('image');
  imageStatus.style.display = (imageStatus.style.display === 'none')? 'block': 'none';
  let imageStatusText = (imageStatus.style.display === 'none')? 'Removed':'Added';
  setTimeout(function(){ alert(`Image ${imageStatusText} Successfully. `) },100);
}

function problem2(){
  let problemdivision = document.getElementById('problems');
  problemdivision.innerHTML = " ";
  let divMain =  document.createElement('div');
  divMain.className = "main";
  let resultDiv = document.createElement('div');
  let problemstatementdivision = document.createElement('div');
  problemstatementdivision.className = "problemstatement";
  problemstatementdivision.innerHTML = "<h3>Problem Statement 2 : To Create Table of any number.</h3>";
  let inputvalue = parseInt(prompt("Enter a number for table?"));
  if(!(isNaN(inputvalue))) {
      let array = calculateTable(inputvalue);
      for(let i of array){
      resultDiv.innerHTML +=  i + "<br>";
      }
      let button = document.createElement('button');
      button.innerHTML = " TRY AGAIN!";
      button.addEventListener('click',() => { problem2() });

      divMain.append(problemstatementdivision); 
      divMain.append(resultDiv);
      divMain.append(button);
      problemdivision.append(divMain);
  }
  else{
    alert("NOT A NUMBER!");
  }
}

function calculateTable(number){
  let arrayoftable = [];
  for(let i=0 ; i<=10 ; i++) arrayoftable.push(number + " * " + i + " = " + i*number);
  return arrayoftable; 
}

function problem3(){
  let problemdivision = document.getElementById('problems');
  problemdivision.innerHTML = " ";
  let divMain =  document.createElement('div');
  divMain.className = "main";
  let problemstatementdivision = document.createElement('div');
  problemstatementdivision.className = "problemstatement";
  problemstatementdivision.innerHTML = "<h3>Problem Statement 3 : To have two buttons : '+' & '-', By clicking should reflect to a default number. </h3>";
  
  let resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  resultDiv.innerHTML = '<h1> Number : ' + numberforproblemthree + '</h1>';

  let buttonAdd = document.createElement('button');
  buttonAdd.innerText = "+";
  buttonAdd.setAttribute('style',"width:40px; height:40px;");
  buttonAdd.addEventListener('click',() => {changeNumber('+')});
  let buttonSub = document.createElement('button');
  buttonSub.setAttribute('style',"width:40px; height:40px; margin-left:20px;");
  buttonSub.innerText = "-";
  buttonSub.addEventListener('click', () => {changeNumber('-')});

  divMain.append(problemstatementdivision);
  divMain.append(resultDiv);
  divMain.append(buttonAdd);
  divMain.append(buttonSub);
  problemdivision.append(divMain);
}
function changeNumber(id){
  if(id === "+"){
    if(numberforproblemthree > 9) alert("Can't Increase more than 10");
    else numberforproblemthree++;
  }
  else{
    if(numberforproblemthree < 1) alert("Can't decrease more than 0");
    else numberforproblemthree--;
  }
  document.getElementById('result').innerHTML = '<h1> Number : ' + numberforproblemthree + '</h1>';
}
export default App;