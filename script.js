const buttons = document.getElementById('buttons');
let displayValue = '';
let mode = 'basic';

function switchMode(newMode) {
    mode = newMode;
    loadButtons();
}

function loadButtons() {
    buttons.innerHTML = ''; // Clear existing buttons
    let btns = [];

    if (mode === 'basic') {
        btns = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'];
    } else if (mode === 'scientific') {
        btns = ['sin', 'cos', 'tan', '^', 'log', 'ln', 'sqrt', 'pi'];
        // add more scientific operations here
    } else if (mode === 'converter') {
        btns = ['m to km', 'g to kg', 'sq m to acre', 'liters to gallons'];
        // add more converters here
    }

    btns.forEach(text => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.onclick = () => handleInput(text);
        buttons.appendChild(btn);
    });
}

function handleInput(input) {
    if (input === '=') {
        calculateResult();
    } else {
        displayValue += input;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

// Initial load
switchMode('basic');
