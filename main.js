// Initialize variables for the calculator
let firstNumber, secondNumber, operation;

// Function to handle the click of a button
function handleButtonClick(event) {
    // Get the text of the button clicked
    const buttonText = event.target.textContent;

    // If the button text is a number, add it to the display
    if (!isNaN(buttonText)) {
        updateDisplay(buttonText);
    } else if (buttonText === 'C') {
        // If the button text is 'C', clear the display
        clearDisplay();
    } else if (buttonText === '=') {
        // If the button text is '=', perform the calculation
        performCalculation();
    } else {
        // If the button text is not a number or 'C', set the operation
        setOperation(buttonText);
    }
}

// Function to update the display with a new number
function updateDisplay(number) {
    const display = document.querySelector('#display');
    display.textContent = display.textContent + number;
}

// Function to clear the display
function clearDisplay() {
    const display = document.querySelector('#display');
    display.textContent = '';
}

// Function to set the operation
function setOperation(newOperation) {
    // Save the first number and operation
    firstNumber = parseFloat(document.querySelector('#display').textContent);
    operation = newOperation;

    // Clear the display for the next number
    clearDisplay();
}


// Add event listeners for the buttons
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
}


// Function to perform the calculation

function performCalculation() {
    // Get the second number and perform the calculation
    secondNumber = parseFloat(document.querySelector('#display').textContent);

    let result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    }

    // Show the result on the screen
    document.querySelector("#display").textContent = result;
}

