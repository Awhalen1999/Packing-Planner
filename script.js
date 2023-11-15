function processForm() {
  var radiogender = document.querySelector('input[name="gender"]:checked');
  var radioclimate = document.querySelector('input[name="climate"]:checked');

  if (radiogender && radioclimate) {
    var combination = radiogender.value + radioclimate.value;
    var url;

    switch (combination) {
      case "malewarm":
        url = "checklist_male_warm.html";
        break;
      case "malemild":
        url = "checklist_male_mild.html";
        break;
      case "malecold":
        url = "checklist_male_cold.html";
        break;
      case "femalewarm":
        url = "checklist_female_warm.html";
        break;
      case "femalemild":
        url = "checklist_female_mild.html";
        break;
      case "femalecold":
        url = "checklist_female_cold.html";
        break;
      case "otherwarm":
        url = "checklist_other_warm.html";
        break;
      case "othermild":
        url = "checklist_other_mild.html";
        break;
      case "othercold":
        url = "checklist_other_cold.html";
        break;
      default:
        alert("Invalid combination");
        return;
    }

    window.location.href = url;
  } else {
    alert("Please select an option from both groups.");
  }
}
