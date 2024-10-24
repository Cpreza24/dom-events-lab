/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let inputOperator = '';
let num1 = '';
let num2 = '';
let result = '';

// const calculations = {
    //     firstNum: '',
    //     secondNum: '',
    //     operator: '', 
    //     equals: '',
    // }
    
    
    /*------------------------ Cached Element References ------------------------*/
    const buttons = document.querySelectorAll('.button');
    const calculator = document.querySelector('#calculator');
    const calculatorDisplay = document.querySelector('.display');
    calculatorDisplay.innerText = 0;
    


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
});


// calculator.addEventListener('click', () => {
//     if (buttonType.innerText === 'equals') {
//         calculatorDisplay.innerText = num1;
//         return calculatorDisplay;
//     }
// })

/*-------------------------------- Functions --------------------------------*/
function handleButtonClick(e) {
    const clickedButtonValue = e.target.innerText;
    //Runs a condition to check if the button clicked IS a number;
    if (!isNaN(clickedButtonValue)) { 
        calculatorDisplay.innerText = '';
        handleNumberClick(clickedButtonValue);
        //console.log(`This was a number button ${clickedButtonValue}`);
    } else if (['+', '-', '*', '/'].includes(clickedButtonValue)) {
        // pass the first series of numbers into num1
        // if num1 value is empty pas it to num1 
        // if num1 is not an empty string, pass the second series of numbers into num2
        inputOperator = clickedButtonValue;
        num1 = parseFloat(calculatorDisplay.innerText);
        calculatorDisplay.innerText = '';
        handleOperatorClick(clickedButtonValue);
    } else if (clickedButtonValue === '=') {
        num2 = parseFloat(calculatorDisplay.innerText);
        console.log(num1, inputOperator, num2);
        switch(inputOperator) {
            case '+': 
                result = num1 + num2;
                console.log(result);
                break;
            case '-':
                result = num1 - num2;
                console.log(result);
                break;
            case '*':
                result = num1 * num2;
                console.log(result);
                break;
            case '/':
                result = num1 / num2;
                console.log(result);
                break;
            default:
                return;
            }
        calculatorDisplay.innerText = result;
    } else if (clickedButtonValue === 'C') {
        // In this segmen the calculator resets
        num2 = '';
        calculatorDisplay.innerText = 0;
        inputOperator = '';
        num1 = '';
    }

}

function handleNumberClick(number) {
    calculatorDisplay.innerText += number;
    //console.log(`This was a number button ${number}`);
};

function handleOperatorClick(operator) {
    inputOperator = operator;
    //console.log(inputOperator);
};