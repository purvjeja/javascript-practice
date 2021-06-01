const createElement = (elementType,elementId,elementClassName,elementInnerText,elementHTMLText,inputElementType) => {
    elementName = document.createElement(elementType);
    if(elementId != 'NA') elementName.id = elementId;
    if(elementClassName != 'NA') elementName.className = elementClassName;
    whichfunctionCall = {'equal'  :  'this.calculateResult(this)',
                              'NA'  :  'this.calculationButtons(this, elementId)',
                              'historyButton'  :  '() => { window.location.href = "#historyof" + this.getCaculatorName()}',
                              'calculationMade'  :  'this.copyToInput.bind(this,elementInnerText)'};
    if(elementType == "button" || elementClassName == "calculationMade") this.elementName.addEventListener("click",eval(this.whichfunctionCall[elementClassName])); 
    if(elementInnerText != 'NA')  elementName.innerText = elementInnerText;
    if(elementHTMLText != 'NA') elementName.innerHTML = elementHTMLText;
    if(inputElementType != 'NA') elementName.type = inputElementType;
    return elementName;
}
class calculator {
    expression = "";
    totalCalculation = 0;

    constructor(calculatorName, whereTo) {
        
        this.calculatorName = calculatorName;
        this.positionOfCalculatorAt = document.querySelector(whereTo);
        
        //Creating Heading Of Calculator
        this.createStructureOfHeading();

        //Creating Calculator Box
        this.createStructureOfCalculatorBox();

        //Creating Calculator Buttons (Operand operators and clear Button)
        this.createStructureOfCalculatorButtons();

        // CreatingHistory Button and History Container       
        this.createHistoryButton();
        this.createStructureOfHistoryContainer();

        this.positionOfCalculatorAt.append(this.mainElement);
    }

    getCaculatorName(){
        return this.calculatorName
    }
    
    createStructureOfHeading(){
        this.calculatorHeading = createElement('h1','NA','NA',`Calculator Name : ${this.calculatorName}`,'NA','NA');
        this.calculationCount = createElement('h1','NA','NA',`Calculations Made : ${this.totalCalculation}`,'NA','NA');
        this.positionOfCalculatorAt.append(this.calculatorHeading);
        this.positionOfCalculatorAt.append(this.calculationCount);
    }

    createStructureOfCalculatorBox(){
        this.mainElement = createElement('NA','mainElement',this.calculatorName,'NA','NA','NA');
        this.calculatorBox =createElement('div','NA','calculator-box','NA','NA','NA');
        this.inputElement = createElement('input','calculationArea','calculation-area','NA','NA','text');
        this.mainElement.append(this.calculatorBox);
        this.calculatorBox.append(this.inputElement);
    }

    createStructureOfCalculatorButtons(){
        this.buttonInputSection = createElement('div','NA','input-section','NA','NA','NA');
        this.calculatorBox.append(this.buttonInputSection);

        // Operand Section
        this.buttonInputOperandSection = createElement('div','NA','operand-section','NA','NA','NA');
        this.buttonInputSection.append(this.buttonInputOperandSection);

        this.button9 = createElement("button",'9','NA','9','NA','NA');
        this.button8 = createElement("button",'8','NA','8','NA','NA');
        this.button7 = createElement("button",'7','NA','7','NA','NA');
        this.button6 = createElement("button",'6','NA','6','NA','NA');
        this.button5 = createElement("button",'5','NA','5','NA','NA');
        this.button4 = createElement("button",'4','NA','4','NA','NA');
        this.button3 = createElement("button",'3','NA','3','NA','NA');
        this.button2 = createElement("button",'2','NA','2','NA','NA');
        this.button1 = createElement("button",'1','NA','1','NA','NA');
        this.buttondot = createElement("button",'dot','NA','.','NA','NA');
        this.button0 = createElement("button",'0','NA','0','NA','NA');
        this.buttonClr = createElement("button",'clr','NA','clr','NA','NA');
        this.buttonInputOperandSection.append(this.button9);
        this.buttonInputOperandSection.append(this.button8);
        this.buttonInputOperandSection.append(this.button7);
        this.buttonInputOperandSection.append(this.button6);
        this.buttonInputOperandSection.append(this.button5);
        this.buttonInputOperandSection.append(this.button4);
        this.buttonInputOperandSection.append(this.button3);
        this.buttonInputOperandSection.append(this.button2);
        this.buttonInputOperandSection.append(this.button1);
        this.buttonInputOperandSection.append(this.buttondot);
        this.buttonInputOperandSection.append(this.button0);
        this.buttonInputOperandSection.append(this.buttonClr);
        
        //Operator Section
        this.buttonInputOperatorSection = createElement('div','NA','operator-section','NA','NA','NA');
        this.buttonInputSection.append(this.buttonInputOperatorSection);
        
        this.buttonAdd =  createElement("button",'add','NA','+','NA','NA');
        this.buttonSub =  createElement("button",'sub','NA','-','NA','NA');
        this.buttonDiv =  createElement("button",'div','NA','/','NA','NA');
        this.buttonMul =  createElement("button",'mul','NA','*','NA','NA');
        this.buttonEquals = createElement("button",'equal','equal','=','NA','NA');
        this.buttonInputOperatorSection.append(this.buttonAdd);
        this.buttonInputOperatorSection.append(this.buttonSub);
        this.buttonInputOperatorSection.append(this.buttonDiv);
        this.buttonInputOperatorSection.append(this.buttonMul);
        this.buttonInputOperatorSection.append(this.buttonEquals);
    }

    createHistoryButton(){
        this.historyButton = createElement('button','NA','historyButton','NA',"<i class='fa fa-history'></i>",'NA');
        this.mainElement.append(this.historyButton);
    }

    createStructureOfHistoryContainer(){
        this.historyContainer = createElement('div',`historyof${calculatorName}`,'history','NA','NA');
        this.mainElement.append(this.historyContainer);
        this.historyContainerContent = createElement('div','NA','historyContainerContent','NA','NA','NA');
        this.historyContainer.append(this.historyContainerContent);
        this.historyContainerContentText = createElement('div','NA','historyText','NA','<h1>HISTORY</h1>');
        this.historyContainerContent.append(this.historyContainerContentText);
        this.historyContainerContentCloseSymbol = createElement('div','NA','crossSymbol','NA',"<a class='close' href='#'>&times;</a>");
        this.historyContainerContent.append(this.historyContainerContentCloseSymbol);
        this.calculatedHistoryArea = createElement('div','history-calculations','NA','NA','NA','NA');
        this.historyContainer.append(this.calculatedHistoryArea);
    }
        

    inputIdType = { 
        "dot" : ".", "add" : "+", "sub" : "-", "mul" : "*", "div" : "/" 
    }

    calculationButtons(inputId) {
        this.expression = (!isNaN(parseInt(inputId))) ? this.expression + inputId : (inputId == "clr") ? "" : this.expression +  this.inputIdType[inputId] ;
        this.inputElement.value = this.expression;
    }

    calculateResult() {
        this.expression = this.inputElement.value;
        try { this.result = eval(this.expression); }
        catch(e){ 
            alert(e.message);
            return 0;
        } 
        this.inputElement.value = this.result;
        this.calculatedHistoryAreaButton(this.expression + ' = ' + this.result);
        this.expression = this.result;
        this.totalCalculation++;
        this.calculationCount.innerText = "Calculations Made : " + this.totalCalculation;
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