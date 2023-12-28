const toDoChecklist = [
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

let toDoChecklistElement = document.getElementById("to-do-checklist");

function generateItemHTML(item) {
  return `<li><input type="checkbox">${item}</li>`;
}

for (let item of toDoChecklist) {
  toDoChecklistElement.innerHTML += generateItemHTML(item);
}

let toDoListItems = document.querySelectorAll("#to-do-checklist li");

toDoListItems.forEach((item) => {
  let checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", function () {
    let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];

    if (this.checked) {
      checkedItems.push(item.textContent.trim());
    } else {
      let index = checkedItems.indexOf(item.textContent.trim());
      if (index !== -1) {
        checkedItems.splice(index, 1);
      }
    }

    localStorage.setItem("to-do-checked", JSON.stringify(checkedItems));

    console.log(checkedItems);
  });
  let button = document.getElementById("to-do-submit-button");

  button.addEventListener("click", function () {
    window.location.href = "./to-do-checked-items.html";
  });
});

// Get the button and input elements from the DOM.
// Get the button, input, and checklist elements from the DOM.
let button = document.getElementById("to-do-add-item-button");
let input = document.getElementById("to-do-input");
let checklist = document.getElementById("to-do-checklist"); // Replace with the id of your checklist element.

// Add an event listener to the button. When the button is clicked, add the inputted text to the checklist.
button.addEventListener("click", function () {
  // Get the inputted text.
  let newItem = input.value.trim();

  // If the inputted text is not empty, add it to the checklist.
  if (newItem) {
    // Get the `to-do-checked` array from local storage.
    let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];

    // Add the new item to the checked items array.
    checkedItems.push(newItem);

    // Save the updated checked items array to local storage.
    localStorage.setItem("to-do-checked", JSON.stringify(checkedItems));

    // Add the new item to the checklist display.
    checklist.innerHTML += `<li><input type="checkbox">${newItem}</li>`;

    // Clear the input field.
    input.value = "";
  }
});
