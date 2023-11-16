window.onload = function () {
  var checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
  var list = document.getElementById("checkedItemsList");
  checkedItems.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
};
