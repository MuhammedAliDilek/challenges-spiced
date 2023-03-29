console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let programmingLanguage of programmingLanguages) {
  const li = document.createElement("li");

  li.textContent = programmingLanguage;

  ol.appendChild(li);

  console.log(programmingLanguage);
}
// --^-- write/change code here --^--
