var display = document.getElementById('display');
var firstNumber = '';
var secondNumber = '';
var operator = '';

function clearCalculator() {
    display.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
  }


function setInputValue(value) {
  if (operator === '') {
    firstNumber += value;
    display.innerHTML = firstNumber;
  } else {
    secondNumber += value;
    display.innerHTML = secondNumber;
  }
}

function setOperator(op) {
  operator = op;
  display.innerHTML = operator;
}

function calculate() {
  var result;
  var num1 = parseFloat(firstNumber);
  var num2 = parseFloat(secondNumber);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.innerHTML = result;
  firstNumber = result
  secondNumber = '';
  operator = '';


}


var typed = new Typed(".auto-type", {
  strings: ["Kalkulator Sederhana ", "Simple Calculator", "Contador sencillo", "シンプルなカウンター"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
})