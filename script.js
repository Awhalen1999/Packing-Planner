window.onload = function () {
  document
    .getElementById("options-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const combination = formData.get("gender") + formData.get("climate");

      if (!combination) {
        alert("Please select an option from the gender and climate forms.");
        return;
      }

      localStorage.setItem("combination", combination);
      window.location.href = "checklist.html";
    });
};
