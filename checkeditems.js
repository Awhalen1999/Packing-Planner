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

  const labels = document.querySelectorAll(".item-label");
  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      this.classList.add("selected");
    });
  });
};
