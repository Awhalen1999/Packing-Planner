window.onload = function () {
  const checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
  const checkedStates = JSON.parse(localStorage.getItem("checkedStates")) || [];
  const outputDiv = document.getElementById("output");

  checkedItems.forEach((item, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-item");

    const checkedState = checkedStates.find((state) => state.item === item);
    if (checkedState) {
      checkbox.checked = checkedState.checked;
      if (checkbox.checked) {
        li.classList.add("checkedItemsSelected");
      }
    }

    const label = document.createElement("label");
    label.textContent = item;

    li.appendChild(checkbox);
    li.appendChild(label);
    outputDiv.appendChild(li);
  });

  outputDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("check-item")) {
      const listItem = event.target.parentElement;
      if (event.target.checked) {
        listItem.classList.add("checkedItemsSelected");
      } else {
        listItem.classList.remove("checkedItemsSelected");
      }

      const checkedStates = Array.from(
        document.querySelectorAll(".check-item")
      ).map((checkbox, index) => ({
        item: checkedItems[index],
        checked: checkbox.checked,
      }));
      localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
    }
  });

  const doneButton = document.getElementById("doneButton");

  if (doneButton) {
    doneButton.addEventListener("click", function () {
      localStorage.setItem("checkedItems", JSON.stringify([]));
      localStorage.removeItem("gender");
      localStorage.removeItem("climate");
      localStorage.removeItem("checkedStates");
      window.location.href = "./index.html";
    });
  }

  document
    .getElementById("uncheck-all-button")
    .addEventListener("click", function () {
      const checkedItems = document.querySelectorAll(".check-item");

      checkedItems.forEach((item) => {
        item.checked = false;
        const listItem = item.parentElement;
        listItem.classList.remove("checkedItemsSelected");
      });
    });

  document
    .getElementById("check-all-button")
    .addEventListener("click", function () {
      const checkedItems = document.querySelectorAll(".check-item");

      checkedItems.forEach((item) => {
        item.checked = true;
        const listItem = item.parentElement;
        listItem.classList.add("checkedItemsSelected");
      });
    });
};
