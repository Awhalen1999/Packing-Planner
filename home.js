function savedChecklist() {
  const gender = localStorage.getItem("gender");
  const climate = localStorage.getItem("climate");
  const button = document.getElementById("saved-checklist-button");

  if (gender && climate) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

const newChecklistButton = document.getElementById("new-checklist-button");

if (newChecklistButton) {
  newChecklistButton.addEventListener("click", function () {
    localStorage.setItem("checkedItems", JSON.stringify([]));
    localStorage.removeItem("gender");
    localStorage.removeItem("climate");
    localStorage.removeItem("checkedStates");
    localStorage.removeItem("otherItems");
    window.location.href = "./page2.html";
  });
}

window.onload = savedChecklist;
