class calculator {

    constructor(calculatorName) {
        this.createCalculator(calculatorName);
    }

    calculationButtons(eventType){
        console.log("clicked");
    }

    createCalculator(calculatorName){
        this.mainElement = document.createElement('div');
        this.mainElement.className = calculatorName;
        document.getElementById('nCalculators').append(this.mainElement);

        this.calculatorBox = document.createElement('div');
        this.calculatorBox.className = 'calculator-box';
        this.mainElement.append(this.calculatorBox);

        this.inputElement = document.createElement('input');
        this.inputElement.type = 'text';
        this.inputElement.id = "calculationArea"
        this.inputElement.className = "calculation-area";
        this.calculatorBox.append(this.inputElement);

        this.buttonInputSection = document.createElement('div');
        this.buttonInputSection.className = "input-section";
        this.calculatorBox.append(this.buttonInputSection);

       
        // Operand Section
       
        this.buttonInputOperandSection = document.createElement('div');
        this.buttonInputOperandSection.className = "operand-section";
        this.buttonInputSection.append(this.buttonInputOperandSection);

        this.button9 = document.createElement('button');
        this.button9.id = "9";
        this.button9.onclick = "calculationButtons("+ 9 +")";
        this.button9.innerHTML = "9";
        this.buttonInputOperandSection.append(this.button9);
        
        this.button8 = document.createElement('button');
        this.button8.id = "8";
        this.button8.onclick = "calculationButtons("+ 8 +")";
        this.button8.innerHTML = "8";
        this.buttonInputOperandSection.append(this.button8);
        
        this.button7 = document.createElement('button');
        this.button7.id = "7";
        this.button7.onclick = "calculationButtons("+ 7 +")";
        this.button7.innerHTML = "7";
        this.buttonInputOperandSection.append(this.button7);

        this.button6 = document.createElement('button');
        this.button6.id = "6";
        this.button6.innerHTML = "6";
        this.button6.onclick = "calculationButtons("+ 6 +")";
        this.buttonInputOperandSection.append(this.button6);

        this.button5 = document.createElement('button');
        this.button5.id = "5";
        this.button5.innerHTML = "5";
        this.button5.onclick = "calculationButtons("+ 5 +")";
        this.buttonInputOperandSection.append(this.button5);
          
        this.button4 = document.createElement('button');
        this.button4.id = "4";
        this.button4.innerHTML = "4";
        this.button4.onclick = "calculationButtons("+ 4 +")";
        this.buttonInputOperandSection.append(this.button4);
        
        this.button3 = document.createElement('button');
        this.button3.id = "3";
        this.button3.onclick = "calculationButtons("+ 3 +")";
        this.button3.innerHTML = "3";
        this.buttonInputOperandSection.append(this.button3);
        
        this.button2 = document.createElement('button');
        this.button2.id = "2";
        this.button2.onclick = "calculationButtons("+ 2 +")";
        this.button2.innerHTML = "2";
        this.buttonInputOperandSection.append(this.button2);
        
        this.button1 = document.createElement('button');
        this.button1.id = "1";
        this.button1.onclick = "calculationButtons("+ 1 +")";
        this.button1.innerHTML = "1";
        this.buttonInputOperandSection.append(this.button1);

        this.buttondot = document.createElement('button');
        this.buttondot.id = "dot";
        this.buttondot.innerHTML = ".";
        this.buttondot.onclick = "calculationButtons(dot)";
        this.buttonInputOperandSection.append(this.buttondot);
        
        this.button0 = document.createElement('button');
        this.button0.id = "0";
        this.button0.onclick = "calculationButtons("+ 0 +")";
        this.button0.innerHTML = "0";
        this.buttonInputOperandSection.append(this.button0);
        
        this.buttonClr = document.createElement('button');
        this.buttonClr.id = "clr";
        this.buttonClr.innerHTML = "Clr";
        this.buttonClr.onclick = "calculationButtons(clr)";
        this.buttonInputOperandSection.append(this.buttonClr);
        
       
        //Operator Section

        this.buttonInputOperatorSection = document.createElement('div');
        this.buttonInputOperatorSection.className = "operator-section";
        this.buttonInputSection.append(this.buttonInputOperatorSection);

        this.buttonAdd = document.createElement('button');
        this.buttonAdd.id = "add";
        this.buttonAdd.onclick = "calculationButtons(add)";
        this.buttonAdd.innerHTML = "+";
        this.buttonInputOperatorSection.append(this.buttonAdd);
        
        this.buttonSub = document.createElement('button');
        this.buttonSub.id = "sub";
        this.buttonSub.onclick = "calculationButtons(sub)";
        this.buttonSub.innerHTML = "-";
        this.buttonInputOperatorSection.append(this.buttonSub);
        
        this.buttonDiv = document.createElement('button');
        this.buttonDiv.id = "div";
        this.buttonDiv.onclick = "calculationButtons(div)";
        this.buttonDiv.innerHTML = "/";
        this.buttonInputOperatorSection.append(this.buttonDiv);
        
        this.buttonMul = document.createElement('button');
        this.buttonMul.id = "mul";
        this.buttonMul.onclick = "calculationButtons(mul)";
        this.buttonMul.innerHTML = "*";
        this.buttonInputOperatorSection.append(this.buttonMul);
        
        this.buttonEquals = document.createElement('button');
        this.buttonEquals.id = "equals";
        //this.buttonEquals.onclick = "calculationButtons('H')";
        this.buttonEquals.onclick = function() { this.calculationButtons("H") };
        this.buttonEquals.innerHTML = "=";
        this.buttonInputOperatorSection.append(this.buttonEquals);

        this.historyButtonDivision = document.createElement('div');
        this.mainElement.append(this.historyButtonDivision);

        this.historyButton = document.createElement('button');
        this.historyButton.onclick = "location.href ='#history'";
        this.historyButton.innerHTML = "<i class='fa fa-history'></i>";
        this.historyButtonDivision.append(this.historyButton);

        
        // History Container

        this.historyContainer = document.createElement('div');
        this.historyContainer.id = "history";
        this.historyContainer.className = "history";
        this.mainElement.append(this.historyButton);

        this.historyContainerContent = document.createElement('div');
        this.historyContainerContent.setAttribute("style","display:flex;");
        this.historyContainer.append(this.historyContainerContent);

        this.historyContainerContentText = document.createElement('div');
        this.historyContainerContentText.innerHTML = "<h1>HISTORY</h1>";
        this.historyContainerContent.append(this.historyContainerContentText);

        this.historyContainerContentCloseSymbol = document.createElement('div');
        this.historyContainerContentCloseSymbol.setAttribute("style","position: absolute; top: 0px; right: 10px;");
        this.historyContainerContentCloseSymbol.innerHTML = "<a class='close' href='#'>&times;</a>";
        this.historyContainerContent.append(this.historyContainerContentCloseSymbol);

        this.calculatedHistoryArea = document.createElement('div');
        this.calculatedHistoryArea.id = "history-calculations";
        this.historyContainer.append(this.historyContainerContent);
    }

}
let objectOf = new calculator("main");
console.log(objectOf);