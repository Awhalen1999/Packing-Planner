window.onload = function() {
  const checkedItems = JSON.parse(localStorage.getItem('checkedItems')) || [];
  const outputDiv = document.getElementById('output');

  if (!outputDiv) {
    console.error('No element with ID "output" found');
    return;
  }

  const ul = document.createElement('ul');
  outputDiv.appendChild(ul);

  checkedItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  ul.addEventListener("click", function (event) {
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