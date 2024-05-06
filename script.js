function add(n1,n2) {
    return n1 + n2;
}
function subtract(n1,n2) {
    return n1-n2;
}
function multiply(n1,n2) {
    return n1 * n2;
}
function divide(n1,n2) {
    return n1 / n2;
}
let n1,op,n2,op2;
let resetNum = false;

const screen = document.getElementById('screen');

function operate(num1,op,num2) {
    switch (op) {
        case "÷":
            return divide(num1,num2);
            break;
        case "x":
            return multiply(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "+":
            return add(num1,num2);
            break;
        default:
            break;
    }
}

function inputNum(btnClicked) {
    if(!resetNum) {
        if (screen.textContent == 0) screen.textContent = btnClicked;
        else screen.textContent = screen.textContent.concat(btnClicked);
        if (n1 && op) n2 = screen.textContent;
    }
    else {
        screen.textContent = btnClicked;
        if (n1 && op) n2 = screen.textContent;
        resetNum = false;
    }
        // else if (n1 !== undefined && op !== undefined && n2 !== undefined) {
    //     screen.textContent = screen.textContent.concat(btnClicked);
    //     n2 = screen.textContent;
    // }
}

function currentOption(btnClicked) {
    switch (btnClicked) {
        case "AC":
            n1 = undefined;
            op = undefined;
            n2 = undefined;
            screen.textContent = 0;
            break;
        case "+/-":
            console.log("plus minus");
            break;
        case "%":
            console.log("percent");
            break;
        default:
            break;
    }
}

function currentOperation(btnClicked) {
    if(!n2) {
        n1 = screen.textContent;
        op = btnClicked;
        resetNum = true;
    }
    else { //finish the calculation, since it's the second press of an operation key
        console.log(n1, n2, op);
        // n2 = screen.textContent; // if operation is chosen, lock num2 before operating
        screen.textContent = operate(Number(n1),op,Number(n2));
        n1 = screen.textContent;
        n2 = undefined;
        resetNum = true; //reset baord when numbers are typed.

    }
    // else {
    //     screen.textContent = operate(Number(n1),op,Number(n2));
    //     console.log(Number("answer: " + operate(Number(n1),op,Number(n2))));
    //     console.log(Number(op))
    //     console.log(Number(n2))
    // }
}



let btnNum = [...document.querySelectorAll('div')].filter(div => div.classList.contains('number'));
let btnOper = [...document.querySelectorAll('div')].filter(div => div.classList.contains('operator'));
let btnOption = [...document.querySelectorAll('div')].filter(div => div.classList.contains('option'));
let btn = [...document.querySelectorAll('div')].filter(div => div.parentNode.classList.contains('buttons'));

btnNum.forEach((btn) => btn.addEventListener("click", function() {
   inputNum(btn.textContent);
}));

btnOper.forEach((btn) => btn.addEventListener("click", function() {
    // if (n1 !== undefined && op !== undefined && screen.textContent !== 0) operate(Number(n1),op,Number(n2));
    // else currentOperation(btn.textContent);
    currentOperation(btn.textContent);
}));

btnOption.forEach((btn) => btn.addEventListener("click", function() {
    currentOption(btn.textContent);
}));

//create dor loops for dofferent types of buttons.
