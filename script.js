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
    } else {
        return divide(first, second);
    }
}

function intializeCalc() {
    numbers.forEach(button => {
        button.addEventListener("click", (event) => {
            // console.log(event.target.innerText)
            if (accumNum !== undefined) {
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
    if (accumNum === undefined && currentNum === undefined) {
        accumNum = displayValue;
        console.log(accumNum);
    } else if (accumNum !== undefined && currentNum === undefined) {
        currentNum = displayValue;
        console.log(currentNum);
        let total = operate(operator, accumNum, currentNum);
        console.log(total);
    } 
}

function displayNumber(newNum) {
    if (displayValue === undefined) {
        displayValue = newNum;
        display.textContent = `${newNum}`;
        displayValue = Number(display.textContent);    
    } else {
        display.textContent = `${displayValue}` + `${newNum}`;
        displayValue = Number(display.textContent);
    }
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
intializeCalc();
activateOperators();