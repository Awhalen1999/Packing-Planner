let toDoItems = JSON.parse(localStorage.getItem("to-do-items")) || [
  "Confirm rental/booking approvals",
  "Create itinerary for house/pet sitter",
  "Pause any subscription delivery plans",
  "Pre-pay bills",
  "Fill prescriptions/Ensure prescriptions can be refilled",
  "Inform bank of travel plans",
  "Inform cell phone company of travel plans",
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
  "Set lights",
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

    const taskLabel = document.createElement("span");
    taskLabel.textContent = item;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);

    let removeButton;
    if (index >= 26) {
      removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        removeItem(index);
      });
      listItem.appendChild(removeButton);
    }

    listItem.addEventListener("click", function (event) {
      if (
        event.target !== checkbox &&
        (!removeButton || event.target !== removeButton)
      ) {
        checkbox.checked = !checkbox.checked;
        toggleCheck(item, checkbox.checked);
      }
    });

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

window.onload = generateChecklist;

//

const submitButton = document.getElementById("to-do-submit-button");

submitButton.addEventListener("click", function () {
  window.location.href = "to-do-checked-tasks.html";
});

function toggleCheck(item, shouldCheck) {
  const checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
  const itemIndex = checkedItems.indexOf(item);

  if (shouldCheck && itemIndex === -1) {
    checkedItems.push(item);
  } else if (!shouldCheck && itemIndex !== -1) {
    checkedItems.splice(itemIndex, 1);
  }

  localStorage.setItem("to-do-checked", JSON.stringify(checkedItems));
}

const checkAllButton = document.getElementById("to-do-check-all-button");

if (checkAllButton) {
  checkAllButton.addEventListener("click", function () {
    const checkItems = document.querySelectorAll("input[type=checkbox]");

    checkItems.forEach((item) => {
      if (!item.checked) {
        item.checked = true;
        const itemText = item.nextElementSibling.textContent.trim();
        toggleCheck(itemText, true);
      }
    });
  });
}

const uncheckAllButton = document.getElementById("to-do-uncheck-all-button");

if (uncheckAllButton) {
  uncheckAllButton.addEventListener("click", function () {
    const checkItems = document.querySelectorAll("input[type=checkbox]");

    checkItems.forEach((item) => {
      if (item.checked) {
        item.checked = false;
        const itemText = item.nextElementSibling.textContent.trim();
        toggleCheck(itemText, false);
      }
    });
  });
}
