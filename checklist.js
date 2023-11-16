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
                .map(
                  (item) =>
                    `<li><input type="checkbox" class="check-item">${item}</li>`
                )
                .join("")}</ul>`;
            })
            .join("");
          output.innerHTML = content;
          var button = document.createElement("button");
          button.textContent = "Submit";
          button.addEventListener("click", function () {
            var checkboxes = document.querySelectorAll(".check-item");
            var checkedItems = [];
            checkboxes.forEach(function (checkbox) {
              if (checkbox.checked) {
                checkedItems.push(checkbox.nextSibling.nodeValue.trim());
              }
            });
            localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
            window.location.href = "checkeditems.html";
          });
          output.appendChild(button);
        } else {
          console.log("Checklist not found");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
};
