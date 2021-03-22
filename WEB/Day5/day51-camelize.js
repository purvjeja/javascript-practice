// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

//My code
let userInput = prompt("Enter string?");
camelizer(userInput);

function camelize(str) {
 for (let i in str) {
    let resultstr;
    if( str[i] != "-")
        resultstr.push(str[i]);
    else
        resultstr.push(str[i+1].toUpperCase());
    }
    alert(resultstr);
}

//solution Code
function camelizer(str) {
    alert(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));
}