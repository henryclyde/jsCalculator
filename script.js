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

function operate(n1,op,n2) {

}

function solution() {

}
let divs = [...document.querySelectorAll('div')].filter(div => div.parentNode.classList.contains('buttons'));
divs.forEach((btn) => btn.addEventListener("click", function() {
    document.getElementById('screen').textContent = btn.textContent;
}));