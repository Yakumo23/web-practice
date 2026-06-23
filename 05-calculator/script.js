const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");

let currentInput = "";
let displayInput = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentInput = currentInput + button.textContent;
        displayInput = displayInput + button.textContent;

        display.textContent = displayInput;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentInput === ""){
            return;
        }

        const lastChar = currentInput.slice(-1);

        if (
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "×" ||
            lastChar === "÷" 
        ) {
            return;
        }

        const operator = button.textContent;

        if(operator === "×"){
            currentInput = currentInput + "*";
            displayInput = displayInput + "×";
        }else if (operator === "÷"){
            currentInput = currentInput + "/";
            displayInput = displayInput + "÷";
        }else{
            currentInput = currentInput + operator;
            displayInput = displayInput + operator;
        }

        display.textContent = displayInput;

    });
});

equalButton.addEventListener("click", () => {
    if (currentInput === ""){
        return;
    }

    const lastChar = currentInput.slice(-1);

    if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/" 
    ){
        return;
    }

    const result = eval(currentInput);
    display.textContent = result;

    currentInput = String(result);
    displayInput = String(result);
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    displayInput = "";
    display.textContent = "0";
});