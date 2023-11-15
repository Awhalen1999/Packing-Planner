window.onload = function () {
  document
    .getElementById("options-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var form = event.target;
      var formData = new FormData(form);

      var gender = formData.get("gender");
      var climate = formData.get("climate");
      var combination = gender + climate;

      localStorage.setItem("combination", combination);

      window.location.href = "checklist.html";
    });
};
