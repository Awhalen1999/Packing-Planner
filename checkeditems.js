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
    if (event.target.classList.contains("check-item")) {
      const listItem = event.target.parentElement.parentElement;
      if (event.target.checked) {
        listItem.classList.add("selected");
      } else {
        listItem.classList.remove("selected");
      }
    }
  });
};
