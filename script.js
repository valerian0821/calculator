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

function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator = "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "*") {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}

function intializeCalc() {
    numbers.forEach(button => {
        button.addEventListener("click", (event) => {
            // console.log(event.target.innerText)
            displayNumber(event.target.innerText);
        })
    });
}

function displayNumber(newNum) {
    if (displayValue === undefined) {
        displayValue = newNum;
        display.textContent = `${newNum}`;    
    } else {
        display.textContent = `${displayValue}` + `${newNum}`;
        displayValue = Number(display.textContent);
    }
}

const display = document.querySelector("#display-box");
const numbers = document.querySelectorAll(".number");
let firstNum;
let secondNum;
let operator;
let displayValue;
intializeCalc();
