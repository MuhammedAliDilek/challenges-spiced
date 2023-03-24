console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const listElement = document.createElement("li");
  console.log(toastContainer);
  listElement.classList.add("toast-container__message");
  listElement.textContent = "I am a burned toast!";
  toastContainer.append(listElement);
  //toastContainer.innerHTML =add "burned toast";
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
