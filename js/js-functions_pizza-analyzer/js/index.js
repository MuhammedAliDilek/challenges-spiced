console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 24;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain = (pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  let area1 = Math.PI * (diameter1 / 2) ** 2;
  let area2 = Math.PI * (diameter2 / 2) ** 2;
  let gain = ((area2 - area1) / area1) * 100;
  let textContent = Math.round(gain);
  output.innerHTML = textContent;
}

calculatePizzaGain(24, 25);

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  let newWidht = (newSize / 24) * 100;
  pizzaElement.style.width = String(newWidht) + "px"; // This line is not mine
}

// Task 3     I didn't do task 3

function updateOutputColor(size1, size2) {
  // write your code here
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
