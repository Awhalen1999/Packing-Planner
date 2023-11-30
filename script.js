document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the selected gender and climate
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const climate = document.querySelector('input[name="climate"]:checked').value;
  // Store the gender and climate in local storage
  localStorage.setItem('gender', gender);
  localStorage.setItem('climate', climate);

  // Redirect to the checklist page
  window.location.href = 'checklist.html';
});