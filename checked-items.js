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
    let listItem;
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

    if (event.target.tagName === "LI") {
      const checkbox = event.target.querySelector(".check-item");
      listItem = event.target;
      checkbox.checked = !checkbox.checked;

      if (checkbox.checked) {
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

  document
    .getElementById("doneButton")
    .addEventListener("click", function (event) {
      const userConfirmed = confirm(
        "Are you sure you want to clear the list? This action cannot be undone."
      );
      if (userConfirmed) {
        localStorage.setItem("checkedItems", JSON.stringify([]));
        localStorage.removeItem("gender");
        localStorage.removeItem("climate");
        localStorage.removeItem("checkedStates");
        localStorage.removeItem("otherItems");
        window.location.href = "./index.html";
      } else {
        event.preventDefault();
      }
    });

  document
    .getElementById("uncheck-all-button")
    .addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(".check-item");

      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        const listItem = checkbox.parentElement;
        listItem.classList.remove("checkedItemsSelected");
      });

      const checkedStates = Array.from(checkboxes).map((checkbox) => ({
        item: checkbox.nextSibling.textContent.trim(),
        checked: checkbox.checked,
      }));
      localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
    });

  document
    .getElementById("check-all-button")
    .addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(".check-item");

      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
        const listItem = checkbox.parentElement;
        listItem.classList.add("checkedItemsSelected");
      });

      const checkedStates = Array.from(checkboxes).map((checkbox) => ({
        item: checkbox.nextSibling.textContent.trim(),
        checked: checkbox.checked,
      }));
      localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
    });
};
