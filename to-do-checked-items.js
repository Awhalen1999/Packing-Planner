let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
let checkedStates =
  JSON.parse(localStorage.getItem("to-do-checked-states")) || {};

let checkedListElement = document.getElementById("to-do-checked-list");

function generateItemHTML(item, isChecked) {
  return `<li><input type="checkbox" ${
    isChecked ? "checked" : ""
  }>${item}</li>`;
}

for (let item of checkedItems) {
  const isChecked = !!checkedStates[item];
  checkedListElement.innerHTML += generateItemHTML(item, isChecked);
}

checkedListElement.addEventListener("change", function (event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const itemText = event.target.parentElement.textContent.trim();
    checkedStates[itemText] = event.target.checked;
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
