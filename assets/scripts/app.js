const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  debugger;
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, 'yei');
}

addBtn.addEventListener('click', add);
