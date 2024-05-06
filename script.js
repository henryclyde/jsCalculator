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
let n1,op,n2;
const screen = document.getElementById('screen');

function operate(n1,op,n2) {

}

function inputadd(btnClicked) {
    if(true) {
       // n1 = parseInt(btnClicked.textValue)
       screen.textContent = screen.textContent.concat(btnClicked.textContent);
    }
}
let btnNum = [...document.querySelectorAll('div')].filter(div => div.classList.contains('grayBtn'));
let btnOp = [...document.querySelectorAll('div')].filter(div => div.classList.contains('grayBtn'));
let btn = [...document.querySelectorAll('div')].filter(div => div.parentNode.classList.contains('buttons'));
btnNum.forEach((btn) => btn.addEventListener("click", function() {
   // document.getElementById('screen').textContent = btn.textContent;
   inputadd(btn);
}));

//creat dor loops for dofferent types of buttons.