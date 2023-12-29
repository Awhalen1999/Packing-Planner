let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];

let checkedListElement = document.getElementById("to-do-checked-list");

function generateItemHTML(item) {
  return `<li><input type="checkbox" checked>${item}</li>`;
}

for (let item of checkedItems) {
  checkedListElement.innerHTML += generateItemHTML(item);
}

let button = document.getElementById("to-do-checked-items-done-button");

button.addEventListener("click", function () {
  localStorage.removeItem("toDoChecklist");

  window.location.href = "index.html";
});
