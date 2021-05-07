class calculator {
    expression = "";

    constructor(calculatorName, whereTo) {
        this.totalCalculation = 0;
        this.calculatorName =calculatorName;
        this.positionOfCalculatorAt = document.querySelector(whereTo);
        
        //Creating Heading Of Calculator 
        this.calculatorHeading = this.createElement('h1','NA','NA',`Calculator Name : ${calculatorName}`,'NA','NA');
        this.calculationCount = this.createElement('h1','NA','NA',`Calculations Made : ${this.totalCalculation}`,'NA','NA');

        //Creting Calculator Box
        this.mainElement = this.createElement('NA','mainElement',calculatorName,'NA','NA','NA');
        this.calculatorBox = this.createElement('div','NA','calculator-box','NA','NA','NA');
        this.inputElement = this.createElement('input','calculationArea','calculation-area','NA','NA','text');
        this.buttonInputSection =  this.createElement('div','NA','input-section','NA','NA','NA');

        // Operand Section
        this.buttonInputOperandSection = this.createElement('div','NA','operand-section','NA','NA','NA');
        this.button9 = this.createElement("button",'9','NA','9','NA','NA');
        this.button8 = this.createElement("button",'8','NA','8','NA','NA');
        this.button7 = this.createElement("button",'7','NA','7','NA','NA');
        this.button6 = this.createElement("button",'6','NA','6','NA','NA');
        this.button5 = this.createElement("button",'5','NA','5','NA','NA');
        this.button4 = this.createElement("button",'4','NA','4','NA','NA');
        this.button3 = this.createElement("button",'3','NA','3','NA','NA');
        this.button2 = this.createElement("button",'2','NA','2','NA','NA');
        this.button1 = this.createElement("button",'1','NA','1','NA','NA');
        this.buttondot = this.createElement("button",'dot','NA','.','NA','NA');
        this.button0 = this.createElement("button",'0','NA','0','NA','NA');
        this.buttonClr = this.createElement("button",'clr','NA','clr','NA','NA');
       
        //Operator Section
        this.buttonInputOperatorSection = this.createElement('div','NA','operator-section','NA','NA','NA');
        this.buttonAdd =  this.createElement("button",'add','NA','+','NA','NA');
        this.buttonSub =  this.createElement("button",'sub','NA','-','NA','NA');
        this.buttonDiv =  this.createElement("button",'div','NA','/','NA','NA');
        this.buttonMul =  this.createElement("button",'mul','NA','x','NA','NA');
        this.buttonEquals = this.createElement("button",'equal','equal','=','NA','NA');

        //History Button        
        this.historyButton = this.createElement('button','NA','historyButton','NA',"<i class='fa fa-history'></i>",'NA');

        // History Container
        this.historyContainer = this.createElement('div',`historyof${calculatorName}`,'history','NA','NA');
        this.historyContainerContent = this.createElement('div','NA','historyContainerContent','NA','NA','NA');
        this.historyContainerContentText = this.createElement('div','NA','historyText','NA','<h1>HISTORY</h1>');
        this.historyContainerContentCloseSymbol = this.createElement('div','NA','crossSymbol','NA',"<a class='close' href='#'>&times;</a>");
        this.calculatedHistoryArea = this.createElement('div','history-calculations','NA','NA','NA','NA');
        this.apendingCalculatorClassStructureELements();
    }

    getCaculatorName(){
        return this.calculatorName
    }

    createElement(elementType,elementId,elementClassName,elementInnerText,elementHTMLText,inputElementType){
        this.elementName = document.createElement(elementType);
        if(elementId != 'NA') this.elementName.id = elementId;
        if(elementClassName != 'NA') this.elementName.className = elementClassName;
        this.whichfunctionCall = {'equal'  :  'this.calculateResult.bind(this)',
                                  'NA'  :  'this.calculationButtons.bind(this, elementId)',
                                  'historyButton'  :  '() => { window.location.href = "#historyof" + this.getCaculatorName()}',
                                  'calculationMade'  :  'this.copyToInput.bind(this,elementInnerText)'};
        if(elementType == "button" || elementClassName == "calculationMade") this.elementName.addEventListener("click",eval(this.whichfunctionCall[elementClassName])); 
        if(elementInnerText != 'NA')  this.elementName.innerText = elementInnerText;
        if(elementHTMLText != 'NA') this.elementName.innerHTML = elementHTMLText;
        if(inputElementType != 'NA') this.elementName.type = inputElementType;
        return this.elementName;
    }

    apendingCalculatorClassStructureELements() {    // appending all the elements of calculator
        this.appendingElements(this.positionOfCalculatorAt,this.calculatorHeading);
        this.appendingElements(this.positionOfCalculatorAt,this.calculationCount);
        this.appendingElements(this.positionOfCalculatorAt,this.mainElement);
        this.appendingElements(this.mainElement,this.calculatorBox);
        this.appendingElements(this.calculatorBox,this.inputElement);
        this.appendingElements(this.calculatorBox,this.buttonInputSection);
        this.appendingElements(this.buttonInputSection,this.buttonInputOperandSection);
        this.appendingElements(this.buttonInputOperandSection,this.button9);
        this.appendingElements(this.buttonInputOperandSection,this.button8);
        this.appendingElements(this.buttonInputOperandSection,this.button7);
        this.appendingElements(this.buttonInputOperandSection,this.button6);
        this.appendingElements(this.buttonInputOperandSection,this.button5);
        this.appendingElements(this.buttonInputOperandSection,this.button4);
        this.appendingElements(this.buttonInputOperandSection,this.button3);
        this.appendingElements(this.buttonInputOperandSection,this.button2);
        this.appendingElements(this.buttonInputOperandSection,this.button1);
        this.appendingElements(this.buttonInputOperandSection,this.buttondot);
        this.appendingElements(this.buttonInputOperandSection,this.button0);
        this.appendingElements(this.buttonInputOperandSection,this.buttonClr);
        this.appendingElements(this.buttonInputSection,this.buttonInputOperatorSection);
        this.appendingElements(this.buttonInputOperatorSection,this.buttonAdd);
        this.appendingElements(this.buttonInputOperatorSection,this.buttonSub);
        this.appendingElements(this.buttonInputOperatorSection,this.buttonDiv);
        this.appendingElements(this.buttonInputOperatorSection,this.buttonMul);
        this.appendingElements(this.buttonInputOperatorSection,this.buttonEquals);
        this.appendingElements(this.mainElement,this.historyButton);
        this.appendingElements(this.mainElement,this.historyContainer);
        this.appendingElements(this.historyContainer,this.historyContainerContent);
        this.appendingElements(this.historyContainerContent,this.historyContainerContentText);
        this.appendingElements(this.historyContainerContent,this.historyContainerContentCloseSymbol);
        this.appendingElements(this.historyContainer,this.calculatedHistoryArea);
    }

    appendingElements(to,from){
        to.append(from);
    }

    calculationButtons(inputId) {
        this.inputIdType = {
            "9" : "9", "8" : "8", "7" : "7", "6" : "6", "5" : "5", "4" : "4", "3" : "3", "2" : "2", "1" : "1", "0" : "0", "dot" : ".", 
            "add" : "+", "sub" : "-", "mul" : "*", "div" : "/" ,"clr" : ""
        }
        this.expression = (inputId == "clr") ?  "" : this.expression + this.inputIdType[inputId];
        this.inputElement.value = this.expression;
    }

    errorShow(){
        alert("ERROR : Unexpected Expression!");
        this.expression = "";
        this.inputElement.value = this.expression;
    }

    expressionCheck(){
        this.operators = ['+' , '-' , '*' , '/'];
        if(this.operators.indexOf(this.expression[0]) > 1 || this.operators.indexOf(this.expression[this.expression.length - 1]) > -1) return true;
        return false;
    }

    calculateResult() {
        this.expression = this.inputElement.value;
        if(this.expression == "" ||  this.expressionCheck()) this.errorShow();
        else {
          this.result = eval(this.expression);
          this.inputElement.value = this.result;
          this.calculatedHistoryAreaButton(this.expression + ' = ' + this.result);
          this.expression = this.result;
          this.totalCalculation++;
          this.calculationCount.innerText = "Calculations Made : " + this.totalCalculation;
        }
    }

    copyToInput(textContent){
        textContent = textContent.substring(0,textContent.indexOf('=') - 1);
        this.expression = textContent;
        this.inputElement.value = textContent;
    }

    calculatedHistoryAreaButton(content) {
        this.buttonForExpressionCopy = this.createElement('div','NA','calculationMade',content,'NA','NA');
        this.calculatedHistoryArea.prepend(this.buttonForExpressionCopy);
    }
}

let objectOf = new calculator("Main", "#nCalculators");