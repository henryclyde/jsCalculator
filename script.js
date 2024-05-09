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
function percent(num) {
    return (num / 100)
}
function posNeg(num) {
    return num * -1;
}
function clear() {
    n1 = undefined;
    op = undefined;
    n2 = undefined;
    screen.textContent = 0;
}

let n1,op,n2,op2;
let resetNum = true;
const screen = document.getElementById('screen');
let screenNum = Number(screen.textContent);

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
        if (resetNum) {
            screen.textContent = btnClicked;
        }
        else screen.textContent = screen.textContent.concat(btnClicked);
        if (n1 && op) n2 = screen.textContent;
    }
    else {
        screen.textContent = btnClicked;
        if (n1 && op) n2 = screen.textContent;
        resetNum = false;
    }
}

function currentOption(btnClicked) {
    switch (btnClicked) {
        case "AC":
            clear();
            break;
        case "+/-":
            screen.textContent = posNeg(Number(screen.textContent));
            break;
        case "%":
            screen.textContent = percent(Number(screen.textContent));
            break;
        default:
            break;
    }
}

function currentOperation(btnClicked) {
    if(!n2) {
        n1 = screen.textContent;
        op = btnClicked;
    }
    else {
        console.log(n1, n2, op);
        screen.textContent = operate(Number(n1),op,Number(n2));
        n1 = screen.textContent;
        n2 = undefined;
    }
    resetNum = true;
}



let btnNum = [...document.querySelectorAll('div')].filter(div => div.classList.contains('number'));
let btnOper = [...document.querySelectorAll('div')].filter(div => div.classList.contains('operator'));
let btnOption = [...document.querySelectorAll('div')].filter(div => div.classList.contains('option'));
let btn = [...document.querySelectorAll('div')].filter(div => div.parentNode.classList.contains('buttons'));

btnNum.forEach((btn) => btn.addEventListener("click", function() {
   inputNum(btn.textContent);
}));

btnOper.forEach((btn) => btn.addEventListener("click", function() {
    currentOperation(btn.textContent);
}));

btnOption.forEach((btn) => btn.addEventListener("click", function() {
    currentOption(btn.textContent);
}));
