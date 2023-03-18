function sum(){
    let sum1 = document.querySelector('#num1').value
    let sum2 = document.querySelector('#num2').value
    sum1 = Number(sum1)
    sum2 = Number(sum2)
    let sumResult = sum1 + sum2
   let sumUser = document.querySelector('#zeeshan');
   sumUser.innerHTML=sumResult;
}
function product(){
    let sum1 = document.querySelector('#num1').value
    let sum2 = document.querySelector('#num2').value
    sum1 = Number(sum1)
    sum2 = Number(sum2)
    let product = sum1 * sum2
   let sumUser = document.querySelector('#zeeshan');
   sumUser.innerHTML=product;
}
function divide(){
    let sum1 = document.querySelector('#num1').value
    let sum2 = document.querySelector('#num2').value
    sum1 = Number(sum1)
    sum2 = Number(sum2)
    let divide = sum1 / sum2
   let sumUser = document.querySelector('#zeeshan');
   sumUser.innerHTML=divide;
}
function subtract(){
    let sum1 = document.querySelector('#num1').value
    let sum2 = document.querySelector('#num2').value
    sum1 = Number(sum1)
    sum2 = Number(sum2)
    let subtract = sum1 - sum2
   let sumUser = document.querySelector('#zeeshan');
   sumUser.innerHTML=subtract;
}