//Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user["name"];



//Task 2
// True if object has no property otherwise false

let schedule = {};
schedule["8:30"] = "get up";
let i=0;
for (let sch in schedule) i++;
if(i == 0) alert("True");
else alert("False");

//solution code
function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
 }



 //Task 3
 // addition of salaries

 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum = 0;
for (let i in salaries){
    sum+=salaries[i];
}
alert(sum);


//Task 4
let menu = {
    width: 500,
    height: 300,
    title: "menu"
  };
alert(menu.width);
multiplyNumeric(menu);
alert(menu.width);

function multiplyNumeric(objectname){
   for(let key in objectname){
    if(typeof(objectname[key]) == "number") objectname[key]*=2;
   }
}