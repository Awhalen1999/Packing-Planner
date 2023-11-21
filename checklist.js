window.onload = async function () {
  const combination = localStorage.getItem("combination");
  if (combination) {
    try {
      const response = await fetch("checklist.json");
      const data = await response.json();
      const checklist = data.checklists.find(
        (list) => list.name === combination
      );
      if (checklist) {
        const output = document.getElementById("output");
        const content = checklist.content
          .map((section) => {
            return `<h2 class="output-title">${
              section.title
            }</h2><ul class="output-items">${section.items
              .map(
                (item) =>
                  `<li class="output-item"><input type="checkbox" class="check-item">${item}</li>`
              )
              .join("")}</ul>`;
          })
          .join("");
        output.innerHTML = content;
        const button = document.getElementById("submit-button");
        button.addEventListener("click", function () {
          const checkboxes = document.querySelectorAll(".check-item");
          let checkedItems = [];
          checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
              checkedItems.push(checkbox.nextSibling.nodeValue.trim());
            }
          });
          localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
          window.location.href = "checkeditems.html";
        });
      } else {
        console.log("Checklist not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};
