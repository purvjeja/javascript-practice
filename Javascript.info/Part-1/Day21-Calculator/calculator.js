let expression = "";
let expressionArea = document.getElementById("calculationArea");
let history = [];

document.getElementById("calculationArea").select();
function calculationButtons(inputId) {
    if (inputId == "9") {
        expression += "9";
        expressionArea.value = expression;
    }
    if (inputId == "8") {
        expression += "8";
        expressionArea.value = expression;
    }
    if (inputId == "7") {
        expression += "7";
        expressionArea.value = expression;
    }
    if (inputId == "6") {
        expression += "6";
        expressionArea.value = expression;
    }
    if (inputId == "5") {
        expression += "5";
        expressionArea.value = expression;
    }
    if (inputId == "4") {
        expression += "4";
        expressionArea.value = expression;
    }
    if (inputId == "3") {
        expression += "3";
        expressionArea.value = expression;
    }
    if (inputId == "2") {
        expression += "2";
        expressionArea.value = expression;
    }
    if (inputId == "1") {
        expression += "1";
        expressionArea.value = expression;
    }
    if (inputId == "0") {
        expression += "0";
        expressionArea.value = expression;
    }
    if (inputId == "sub") {
        expression += " - ";
        expressionArea.value = expression;
    }
    if (inputId == "mul") {
        expression += " * ";
        expressionArea.value = expression;
    }
    if (inputId == "add") {
        expression += " + ";
        expressionArea.value = expression;
    }
    if (inputId == "div") {
        expression += " / ";
        expressionArea.value = expression;
    }
    if (inputId == "dot") {
        expression += ".";
        expressionArea.value = expression;
    }
    if (inputId == "clr") {
        expression = "";
        expressionArea.value = expression;
    }
}

function copyToInput(text) {
    text = text.substring(0,text.indexOf('='));
    expression += text;
    expressionArea.value = text; 
}

function calculationResult() {
    expression =  document.getElementById('calculationArea').value;
    let result = eval(expression);
    expressionArea.value = result;
    history.push(expression + ' = ' + result);
    document.getElementById('history-calculations').innerHTML += "<hr><button id='calculationsMade' onclick='copyToInput(textContent)'><div> <h2 class = 'previousCalculations'>" + expression + ' = ' + result + "</h2> </div> </button>";
    expression = "";
}