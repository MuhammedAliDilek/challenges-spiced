console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkbutton = document.querySelector('[data-js="dark-mode-button"]');
darkbutton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const lightbutton = document.querySelector('[data-js="light-mode-button"]');
lightbutton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  // We can't do add("light") cause we dont have body.light in css//
});

const togglebutton = document.querySelector('[data-js="toggle-button"]');
togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
