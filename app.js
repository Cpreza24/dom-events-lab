/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const operator = '';
const num1 = 0;
const num2 = 0;

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        console.log(e.target.innerText);
    })
});

calculator.addEventListener('click', e => {
    console.log(e.target.innerText)
})

/*-------------------------------- Functions --------------------------------*/
