window.onload = function () {
  var checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
  var list = document.getElementById("checkedItemsList");
  checkedItems.forEach(function (item) {
    var listItem = document.createElement("li");
    var label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" class="check-item">${item}`;
    label.classList.add("item-label");
    listItem.appendChild(label);
    list.appendChild(listItem);
  });

  var labels = document.querySelectorAll(".item-label");
  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      this.classList.add("selected");
    });
  });
};