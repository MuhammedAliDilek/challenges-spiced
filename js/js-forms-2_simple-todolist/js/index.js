console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
// Task 1
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data.headline, data.task, formData, data);
  addlist(data);
  form.reset(); //reset the inputs you wrote
  form.headline.focus(); //after you click the cursor will go to headline
});

// Task 2
function addlist(formobject) {
  const entry = document.createElement("li");

  const headline = document.createElement("h1");
  headline.textContent = formobject.headline;

  const task = document.createElement("p");
  task.textContent = formobject.task;

  entry.append(headline);
  entry.append(task);

  todoList.append(entry);
}
