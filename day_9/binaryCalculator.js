function operatorAction(event) {
    console.log('kkk');
    var btn = event.target;
  
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}
  
// On clicking equals, evaluate the expression
function evaluateExpression() {
    var result = 0;
    let expression = document.getElementById('res').innerHTML;
    
    document.getElementById('res').innerHTML = "";
  
    if (expression.indexOf("+") != -1) {
        var numbers = expression.split("+");
        var a = parseInt(numbers[0], 2);
        var b = parseInt(numbers[1], 2);
        result = (a + b).toString(2);
    } else if (expression.indexOf("-") != -1) {
        var numbers = expression.split("-");
        var a = parseInt(numbers[0], 2);
        var b = parseInt(numbers[1], 2);
        result = (a - b).toString(2);
    } else if (expression.indexOf("*") != -1) {
        var numbers = expression.split("*");
        var a = parseInt(numbers[0], 2);
        var b = parseInt(numbers[1], 2);
        result = (a * b).toString(2);
    } else if (expression.indexOf("/") != -1) {
        var numbers = expression.split("/");
        var a = parseInt(numbers[0], 2);
        var b = parseInt(numbers[1], 2);
        result = (a / b).toString(2);
    }

    document.getElementById("res").insertAdjacentHTML('beforeend', result);
}
  
// On clicking either 0 or 1, add the corresponding text to the result inner html
document.getElementById('btn0').addEventListener('click', function() {
    document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

// On clicking button clear, clear the results field
document.getElementById('btnClr').onclick = function() {
    (document.getElementById('res').innerHTML) = "";
};

// On clicking any operator, add that operator text to the result inner html
document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

