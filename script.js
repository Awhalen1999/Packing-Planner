document
  .getElementById("options-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const climateInput = document.querySelector(
      'input[name="climate"]:checked'
    );

    if (!genderInput || !climateInput) {
      alert("Please select an option from both gender and climate forms");
      return;
    }

    const gender = genderInput.value;
    const climate = climateInput.value;
    localStorage.setItem("gender", gender);
    localStorage.setItem("climate", climate);

    window.location.href = "checklist.html";
  });
