window.onload = function() {
  const checkedItems = JSON.parse(localStorage.getItem('checkedItems')) || [];
  const outputDiv = document.getElementById('output');

  if (checkedItems && checkedItems.length > 0) {
    const header = document.createElement('h2');
    header.textContent = 'Checked Items';
    outputDiv.appendChild(header);

    const ul = document.createElement('ul');
    outputDiv.appendChild(ul);

    checkedItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  } else {
    outputDiv.textContent = 'No items have been checked';
  }

  const list = document.querySelector('ul');

  if (list) {
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
  }
};