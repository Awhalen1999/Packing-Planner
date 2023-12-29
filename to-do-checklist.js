let toDoChecklist = JSON.parse(localStorage.getItem("toDoChecklist")) || [
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

const toDoList = document.getElementById("to-do-checklist");

function generateItemHTML(item) {
  return `<li><input type="checkbox">${item}</li>`;
}

for (const item of toDoChecklist) {
  toDoList.innerHTML += generateItemHTML(item);
}

const toDoListItems = document.querySelectorAll("#to-do-checklist li");

toDoListItems.forEach((item) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", function () {
    let toDoCheckedItems =
      JSON.parse(localStorage.getItem("to-do-checked")) || [];

    if (this.checked) {
      toDoCheckedItems.push(item.textContent.trim());
    } else {
      const index = toDoCheckedItems.indexOf(item.textContent.trim());
      if (index !== -1) {
        toDoCheckedItems.splice(index, 1);
      }
    }

    localStorage.setItem("to-do-checked", JSON.stringify(toDoCheckedItems));

    console.log(toDoCheckedItems);
  });
  const button = document.getElementById("to-do-submit-button");

  button.addEventListener("click", function () {
    window.location.href = "./to-do-checked-items.html";
  });
});

// custom input

const button = document.getElementById("to-do-add-item-button");
const input = document.getElementById("to-do-input");
const checklist = document.getElementById("to-do-checklist");

button.addEventListener("click", function () {
  const newToDoItem = input.value.trim();

  if (newToDoItem) {
    toDoChecklist.push(newToDoItem);
    localStorage.setItem("toDoChecklist", JSON.stringify(toDoChecklist));

    const newItem = document.createElement("li");
    newItem.innerHTML = `<input type="checkbox">${newToDoItem}`;
    checklist.appendChild(newItem);

    input.value = "";
  }

  console.log(toDoChecklist);
});

window.onload = function () {
  let toDoCheckedItems =
    JSON.parse(localStorage.getItem("to-do-checked")) || [];

  const toDoListItems = document.querySelectorAll("#to-do-checklist li");

  toDoListItems.forEach((item) => {
    const itemText = item.textContent.trim();

    if (toDoCheckedItems.includes(itemText)) {
      const checkbox = item.querySelector('input[type="checkbox"]');
      checkbox.checked = true;
    }
  });
};
