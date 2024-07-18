function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, first, second) {
    if (operator === "+") {
        return add(first, second);
    } else if (operator === "-") {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else if (operator === "/") {
        return divide(first, second);
    }
}

function intializeCalc() {
    numbers.forEach(button => {
        button.addEventListener("click", (event) => {
            // console.log(event.target.innerText)
            isOperatorLast = false;
            if (isOperatorLast === true) {
                clearDisplay();
            }
            displayNumber(event.target.innerText);
        })
    });
}

function activateOperators() {
    operators.forEach(button => {
        button.addEventListener("click", (event) => {
            calculate(event.target.innerText);
        })
    });
}

function calculate(operator) {
    if (isOperatorLast === false) {
        if (accumNum === undefined && operator !== "=") {
            currentNum = displayValue;
            accumNum = currentNum;
            console.log(accumNum);
            currentNum = undefined;
            lastOperator = operator;
            isOperatorLast = true;
            displayValue = undefined;
        } else if (accumNum !== undefined && operator !== "=") {
            currentNum = displayValue;
            console.log(currentNum);
            accumNum = operate(lastOperator, accumNum, currentNum);
            clearDisplay();
            displayNumber(accumNum);
            console.log(accumNum);
            currentNum = undefined;
            lastOperator = operator;
            isOperatorLast = true;
            displayValue = undefined;
        } else if (accumNum !== undefined && operator === "=") {
            currentNum = displayValue;
            console.log(currentNum);
            accumNum = operate(lastOperator, accumNum, currentNum);
            total = accumNum;
            clearDisplay();
            displayNumber(accumNum);
            console.log(accumNum);
            currentNum = undefined;
            lastOperator = operator;
            isOperatorLast = true;
            displayValue = undefined;
            accumNum = undefined;
        } else {
            currentNum = displayValue;
            accumNum = currentNum;
            total = accumNum;
            console.log(accumNum);
            currentNum = undefined;
            lastOperator = operator;
            isOperatorLast = true;
            displayValue = undefined;
            accumNum = undefined;
        }
    }
    //MUST SIMPLIFY LATER 
    else {
        if (lastOperator === "=") {
            if (operator !== "=") {
                accumNum = total;
                lastOperator = operator;
            } 
        }
        else {
            if (operator === "=") {
                originalNum = currentNum;
                currentNum = accumNum;
                accumNum = operate(lastOperator, accumNum, currentNum);
                total = accumNum;
                clearDisplay();
                displayNumber(accumNum);
                lastOperator = operator;
                displayValue = undefined;
            }
            else {
                lastOperator = operator;
            }
        }
    }
}

function displayNumber(newNum) {
    if (displayValue === undefined) {
        displayValue = newNum;
        display.textContent = `${newNum}`;   
    } else {
        display.textContent = `${displayValue}` + `${newNum}`;
    }
    displayValue = Number(display.textContent);
}

function clearDisplay() {
    displayValue = undefined;
}

const display = document.querySelector("#display-box");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
let accumNum;
let currentNum;
let operator;
let displayValue;
let isOperatorLast = false;
let lastOperator;
let total;
intializeCalc();
activateOperators();