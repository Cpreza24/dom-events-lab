/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/
let operator = '';
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

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const buttonType = e.target;
        console.log(e.target.innerText);
        if (buttonType.classList.contains('number')) {
            if (num1 === '') {
                num1 = parseInt(buttonType.innerText);
                return num1;
            } else {
                num2 = parseInt(buttonType.innerText);
                return num2;
            }
        } else if (buttonType.classList.contains('operator')) {
            operator = buttonType.innerText;
            return operator;
        } else if (buttonType.classList.contains('equals')) {
            result = buttonType.innerText;
            return result;
        } else {
            console.log('invalid');
        }
    })
});




// calculator.addEventListener('click', e => {
//     console.log(e.target.innerText)
// })

/*-------------------------------- Functions --------------------------------*/

const getResult = function(firstNum, secondNum, operand) {
    if (firstNum !== '' && secondNum !== '') {
        console.log(firstNum + secondNum);
        return firstNum + secondNum;
    }
}

console.log(getResult(num1, num2));