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

document.addEventListener('DOMContentLoaded', function() {
  const doneButton = document.getElementById('donebutton');

  if (doneButton) {
    doneButton.addEventListener('click', function() {
      localStorage.setItem('checkedItems', JSON.stringify([]));
      window.location.reload();
    });
  }
});

document.getElementById('uncheck-all-button').addEventListener('click', function() {
  const checkedItems = document.querySelectorAll('.check-item');

  checkedItems.forEach(item => {
    item.checked = false;
    const listItem = item.parentElement;
    listItem.classList.remove("checkeditemsselected");
  });
});

document.getElementById('check-all-button').addEventListener('click', function() {
  const checkedItems = document.querySelectorAll('.check-item');

  checkedItems.forEach(item => {
    item.checked = true;
    const listItem = item.parentElement;
    listItem.classList.add("checkeditemsselected");
  });
});
