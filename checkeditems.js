window.onload = function() {
  const checkedItems = JSON.parse(localStorage.getItem('checkedItems'));
  const outputDiv = document.getElementById('output');

  if (!outputDiv) {
    console.error('No element with ID "output" found');
    return;
  }

  const ul = document.createElement('ul');
  outputDiv.appendChild(ul);

  checkedItems.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check-item');

    const label = document.createElement('label');
    label.textContent = item;

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  });

  ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("check-item")) {
      const listItem = event.target.parentElement;
      if (event.target.checked) {
        listItem.classList.add("checkeditemsselected");
      } else {
        listItem.classList.remove("checkeditemsselected");
      }
    }
  });
};