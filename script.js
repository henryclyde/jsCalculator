function add(n1,n2) {
    return n1+n2;
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

const screen = document.getElementById('screen');

function operate(n1,op,n2) {
    
    switch (op) {
        case "÷":
            screen.textContent = divide(n1,n2);
            break;
        case "x":
            screen.textContent = multiply(n1,n2);
            break;
        case "-":
            screen.textContent = subtract(n1,n2);
            break;
        case "+":
            screen.textContent = add(n1,n2);
            break;
        default:
            break;
    }
}

function inputNum(btnClicked) {
    if (screen.textContent == 0) screen.textContent = btnClicked;
    else screen.textContent = screen.textContent.concat(btnClicked);
}

function currentOption(btnClicked) {
    switch (btnClicked) {
        case "AC":
            n1,op,n2 = undefined;
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
    // if(op !== undefined) {
    //     op2 = btnClicked;
    //     operate(n1,op,n2)
    //     op = op2;
    //     op2 = undefined;
    // }
    n1 = screen.textContent;
    op = btnClicked;

    if(n1 !== undefined) {
        n1 = Number(screen.textContent);
        screen.textContent = '0';
        op = btnClicked;
    }
    
}



let btnNum = [...document.querySelectorAll('div')].filter(div => div.classList.contains('number'));
let btnOper = [...document.querySelectorAll('div')].filter(div => div.classList.contains('operator'));
let btnOption = [...document.querySelectorAll('div')].filter(div => div.classList.contains('option'));
let btn = [...document.querySelectorAll('div')].filter(div => div.parentNode.classList.contains('buttons'));

btnNum.forEach((btn) => btn.addEventListener("click", function() {
   inputNum(btn.textContent);
}));

btnOper.forEach((btn) => btn.addEventListener("click", function() {
    if (n1 !== undefined && op !== undefined && screen.textContent !== undefined) operate(n1,op,n2);
    else currentOperation(btn.textContent);
}));

btnOption.forEach((btn) => btn.addEventListener("click", function() {
    currentOption(btn.textContent);
}));

//create dor loops for dofferent types of buttons.
