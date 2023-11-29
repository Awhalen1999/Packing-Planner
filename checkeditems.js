window.onload = function() {
  // Get the checked items from local storage
  const checkedItems = JSON.parse(localStorage.getItem('checkedItems'));

  // Get the output div
  const outputDiv = document.getElementById('output');

  // Check if there are any checked items
  if (checkedItems && checkedItems.length > 0) {
    // Create a header
    const header = document.createElement('h2');
    header.textContent = 'Checked Items';
    outputDiv.appendChild(header);

    // Create a ul for the items
    const ul = document.createElement('ul');
    outputDiv.appendChild(ul);

    // Loop through each item
    checkedItems.forEach(item => {
      // Create a li
      const li = document.createElement('li');
      li.textContent = item;

      // Add the li to the ul
      ul.appendChild(li);
    });
  } else {
    outputDiv.textContent = 'No items have been checked';
  }
}

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
