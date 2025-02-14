// Select the display element
let display = document.getElementById("display");

// Append numbers to the display
function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

// Append operators to the display
function appendOperator(operator) {
    display.innerText += " " + operator + " ";
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}