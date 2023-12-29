let toDoChecklist = [
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

function generateItemHTML(item) {
  return `<li><input type="checkbox">${item}</li>`;
}

toDoChecklist.forEach((item) => {
  toDoChecklistElement.innerHTML += generateItemHTML(item);
});

toDoChecklistElement.addEventListener("change", function (event) {
  if (event.target.matches('input[type="checkbox"]')) {
    let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
    if (event.target.checked) {
      checkedItems.push(event.target.parentElement.textContent.trim());
    } else {
      const index = checkedItems.indexOf(
        event.target.parentElement.textContent.trim()
      );
      if (index !== -1) {
        checkedItems.splice(index, 1);
      }
    }
    localStorage.setItem("to-do-checked", JSON.stringify(checkedItems));
    console.log(checkedItems);
  }
});

const button = document.getElementById("to-do-submit-button");
button.addEventListener("click", function () {
  window.location.href = "./to-do-checked-items.html";
});

function checkCheckboxes() {
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
}

window.onload = function () {
  toDoChecklist = JSON.parse(localStorage.getItem("to-do-checklist")) || [];
  toDoChecklist.forEach((item) => {
    toDoChecklistElement.innerHTML += generateItemHTML(item, false);
  });
  checkCheckboxes();
};

const addItemButton = document.getElementById("to-do-add-item-button");
const addItemInput = document.getElementById("to-do-input");

addItemButton.addEventListener("click", function () {
  const newItem = addItemInput.value.trim();
  if (newItem) {
    toDoChecklist.push(newItem);
    localStorage.setItem("to-do-checklist", JSON.stringify(toDoChecklist));
    toDoChecklistElement.innerHTML += generateItemHTML(newItem, false);
    addItemInput.value = "";
    checkCheckboxes();
  }
});
