document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked').value;
  const climate = document.querySelector('input[name="climate"]:checked').value;
  localStorage.setItem('gender', gender);
  localStorage.setItem('climate', climate);

  window.location.href = 'checklist.html';
});