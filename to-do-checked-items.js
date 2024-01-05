let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
let checkedStates =
  JSON.parse(localStorage.getItem("to-do-checked-states")) || {};

let checkedListElement = document.getElementById("to-do-checked-items-list");

function generateItemHTML(item, isChecked) {
  return `<li><input type="checkbox" ${
    isChecked ? "checked" : ""
  }>${item}</li>`;
}

for (let item of checkedItems) {
  const isChecked = !!checkedStates[item];
  checkedListElement.innerHTML += generateItemHTML(item, isChecked);
}

checkedListElement.addEventListener("click", function (event) {
  if (event.target.matches("li") || event.target.matches("li > span")) {
    const listItem = event.target.matches("li")
      ? event.target
      : event.target.parentElement;
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    const itemText = listItem.textContent.trim();
    checkedStates[itemText] = checkbox.checked;
    localStorage.setItem("to-do-checked-states", JSON.stringify(checkedStates));
  }
});

//

let button = document.getElementById("to-do-checked-items-done-button");

button.addEventListener("click", function () {
  localStorage.removeItem("to-do-checked");
  localStorage.removeItem("to-do-items");
  localStorage.removeItem("to-do-checked-states");

  window.location.href = "index.html";
});

let checkAllButton = document.getElementById("to-do-check-all-button");

checkAllButton.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
});

let uncheckAllButton = document.getElementById("to-do-uncheck-all-button");

uncheckAllButton.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
