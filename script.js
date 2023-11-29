window.onload = function () {
  document
    .getElementById("options-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const gender = formData.get("gender");
      const climate = formData.get("climate");

      if (!gender || !climate) {
        alert("Please select an option from the gender and climate forms.");
        return;
      }

      localStorage.setItem("gender", gender);
      localStorage.setItem("climate", climate);
      window.location.href = "./checklist.html";
    });
};
