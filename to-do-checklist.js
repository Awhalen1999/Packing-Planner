let toDoItems = JSON.parse(localStorage.getItem("to-do-items")) || [
  "Confirm rental/booking approvals",
  "Create itinerary for house/pet sitter",
  "Pause any subscription delivery plans",
  "Pre-pay bills",
  "Fill prescriptions/Ensure you can refill prescriptions",
  "Inform your bank of travel plans",
  "Inform your cell phone company of travel plans",
  "Dispose of perishable foods",
  "Do laundry",
  "Double-check flight and accommodation check-in times",
  "Online check-in for flights",
  "Ensure electronics are fully charged",
  "Withdraw some cash (small bills)",
  "Inform trusted neighbors of travel plans",
  "Empty garbage",
  "Hide a spare key",
  "Double-check luggage weight",
  "Water house plants",
  "Set thermostat",
  "Double-check travel documents",
  "Check lights",
  "Turn off water and gas",
  "Unplug electronics",
  "Make sure doors and windows are locked",
  "Arrange transportation to the airport",
  "Enjoy your trip!",
];

const toDoChecklistElement = document.getElementById("to-do-checklist");
const addItemButton = document.getElementById("to-do-add-item-button");
const addItemInput = document.getElementById("to-do-input");

function generateChecklist() {
  toDoChecklistElement.innerHTML = "";

  toDoItems.forEach((item, index) => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isChecked(item);
    checkbox.addEventListener("change", () => toggleCheck(item));

    const taskLabel = document.createElement("span");
    taskLabel.textContent = item;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);

    if (index >= 26) {
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeItem(index));
      listItem.appendChild(removeButton);
    }

    toDoChecklistElement.appendChild(listItem);
  });
}

function isChecked(item) {
  const checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
  return checkedItems.includes(item);
}

function toggleCheck(item) {
  const checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
  const itemIndex = checkedItems.indexOf(item);

  if (itemIndex !== -1) {
    checkedItems.splice(itemIndex, 1);
  } else {
    checkedItems.push(item);
  }

  localStorage.setItem("to-do-checked", JSON.stringify(checkedItems));
}

function removeItem(index) {
  const item = toDoItems[index];
  toDoItems.splice(index, 1);
  localStorage.setItem("to-do-items", JSON.stringify(toDoItems));

  if (isChecked(item)) {
    toggleCheck(item);
  }

  generateChecklist();
}

addItemButton.addEventListener("click", function () {
  const newItem = addItemInput.value.trim();
  if (newItem) {
    toDoItems.push(newItem);
    localStorage.setItem("to-do-items", JSON.stringify(toDoItems));
    addItemInput.value = "";
    generateChecklist();
  }
});

const submitButton = document.getElementById("to-do-submit-button");

submitButton.addEventListener("click", function () {
  window.location.href = "to-do-checked-items.html";
});

window.onload = generateChecklist;
