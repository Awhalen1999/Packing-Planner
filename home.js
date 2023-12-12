function savedChecklist() {
  const gender = localStorage.getItem('gender');
  const climate = localStorage.getItem('climate');
  const button = document.getElementById('saved-checklist-button');

  if (gender && climate) {
    button.disabled = false;
    button.classList.remove('disabled');
  } else {
    button.disabled = true;
    button.classList.add('disabled');
  }

  button.addEventListener('click', function() {
    if (button.disabled) {
      alert('No checklist is currently open');
    }
  });
}
window.onload = savedChecklist;