function savedChecklist() {
  const checkedItems = localStorage.getItem('checkedItems');
  const button = document.getElementById('saved-checklist-button');

  if (checkedItems.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
window.onload = savedChecklist;