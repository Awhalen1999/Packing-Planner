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

    // Add an event listener for the click event to the li
    li.addEventListener("click", function (event) {
      // If the checkbox is not the target of the click event, toggle the checkbox
      if (event.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        // Add or remove the checkedItemsSelected class
        if (checkbox.checked) {
          li.classList.add("checkedItemsSelected");
        } else {
          li.classList.remove("checkedItemsSelected");
        }
        // Trigger the change event on the checkbox
        checkbox.dispatchEvent(new Event("change"));
      }
    });

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
