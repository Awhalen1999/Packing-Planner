const toDoChecklistElement = document.getElementById("to-do-checklist");

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

toDoChecklistElement.addEventListener("change", function (event) {
  if (event.target.matches('input[type="checkbox"]')) {
    let checkedItems = JSON.parse(localStorage.getItem("to-do-checked")) || [];
    if (event.target.checked) {
      checkedItems.push(event.target.nextElementSibling.textContent);
    } else {
      const index = checkedItems.indexOf(
        event.target.nextElementSibling.textContent
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

window.onload = function () {
  checkCheckboxes();
};

const addItemButton = document.getElementById("to-do-add-item-button");
const addItemInput = document.getElementById("to-do-input");

addItemButton.addEventListener("click", function () {
  const newItem = addItemInput.value.trim();
  if (newItem) {
    const newItemHTML = `<li><input type="checkbox"><span>${newItem}</span></li>`;
    toDoChecklistElement.innerHTML += newItemHTML;
    addItemInput.value = "";
    checkCheckboxes();
  }
});
