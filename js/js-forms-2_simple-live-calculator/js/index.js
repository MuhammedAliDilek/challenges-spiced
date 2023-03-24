console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  //console.log(event.target.value);
  const firstValue = parseInt(firstInput.value);
  const secondValue = parseInt(secondInput.value);
  const multiplication = firstValue * secondValue;
  result.textContent = multiplication; // you need this so It will also update when you only change first value
});

secondInput.addEventListener("input", (event) => {
  const firstValue = parseInt(firstInput.value);
  const secondValue = parseInt(secondInput.value);
  const multiplication = firstValue * secondValue;
  console.log(result);
  result.textContent = multiplication;
});
