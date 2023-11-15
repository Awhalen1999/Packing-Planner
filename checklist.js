window.onload = function () {
  var combination = localStorage.getItem("combination");
  if (combination) {
    fetch("checklist.json")
      .then((response) => response.json())
      .then((data) => {
        var checklist = data.checklists.find(
          (list) => list.name === combination
        );
        if (checklist) {
          var output = document.getElementById("output");
          var content = checklist.content
            .map((section) => {
              return `<h2>${section.title}</h2><ul>${section.items
                .map((item) => `<li><input type="checkbox">${item}</li>`)
                .join("")}</ul>`;
            })
            .join("");
          output.innerHTML = content;
        } else {
          console.log("Checklist not found");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
};