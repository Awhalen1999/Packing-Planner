window.onload = function () {
  const checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
  const list = document.getElementById("checkedItemsList");
  checkedItems.forEach(function (item) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" class="check-item">${item}`;
    label.classList.add("item-label");
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  list.addEventListener("click", function (event) {
    // Check if a checkbox was clicked
    if (event.target.classList.contains("check-item")) {
      // Get the parent 'li' element
      const listItem = event.target.parentElement.parentElement;

      // If the checkbox is checked, add 'selected' class to the 'li'
      // If it's not checked, remove 'selected' class
      if (event.target.checked) {
        listItem.classList.add("selected");
      } else {
        listItem.classList.remove("selected");
      }
    }
  });
};