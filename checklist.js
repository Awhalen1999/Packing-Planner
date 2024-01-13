window.onload = function () {
  const gender = localStorage.getItem("gender");
  const climate = localStorage.getItem("climate");

  const checklist = getChecklist(gender, climate);
  const outputDiv = document.getElementById("output");
  let otherItems = JSON.parse(localStorage.getItem("otherItems")) || [];
  displayChecklist();

  function getChecklist(gender, climate) {
    switch (gender + "-" + climate) {
      case "male-warm":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts",
              "Pants",
              "Shorts",
              "Hat/beanie",
              "Swimsuit/swim trunks",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Shaving kit",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Cologne/fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "male-mild":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts",
              "Pants",
              "Shorts",
              "Hat/beanie",
              "Swimsuit/swim trunks",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Shaving kit",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Cologne/fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "male-cold":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Base layer",
              "Socks",
              "Shirts",
              "Pants",
              "Shorts",
              "Hat/beanie",
              "Swimsuit/swim trunks",
              "Shoes",
              "Boots/snow-boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Snowsuit/snow-pants",
              "Gloves/mittens",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Shaving kit",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Cologne/fragrance",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "female-warm":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/skirts",
              "Dress",
              "Hat/beanie",
              "Swimsuits/bikinis",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Perfume/fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "female-mild":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/skirts",
              "Dress",
              "Hat/beanie",
              "Swimsuits/bikinis",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Perfume/fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "female-cold":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/skirts",
              "Dress",
              "Hat/beanie",
              "Swimsuits/bikinis",
              "Shoes",
              "Boots/snow-boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Snowsuit/snow-pants",
              "Gloves/mittens",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Perfume/fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "other-warm":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/bottoms",
              "Hats",
              "Swimsuits",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "other-mild":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/bottoms",
              "Hat/beanie",
              "Swimsuits",
              "Shoes",
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Fragrance",
              "Sunscreen",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      case "other-cold":
        return [
          {
            section: "Clothing",
            items: [
              "Underwear",
              "Base layer",
              "Socks",
              "Shirts/tops",
              "Pants",
              "Shorts/bottoms",
              "Hat/beanie",
              "Swimsuits",
              "Shoes",
              "Boots/snow-boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
              "Snowsuit/snow-pants",
              "Gloves/mittens",
              "Glasses",
              "Sun glasses",
            ],
          },
          {
            section: "Toiletries",
            items: [
              "Toothbrush",
              "Toothpaste",
              "Floss",
              "Mouthwash",
              "Razor/shaving supplies",
              "Shampoo/conditioner",
              "Body wash",
              "Hair brush/comb",
              "Hair gel/hair spray",
              "Moisturizer/skin care",
              "Deodorant",
              "Fragrance",
              "Nail clippers/file",
              "Hairdryer",
              "Contacts/case/solution",
              "Makeup",
              "Hygiene products",
              "Towels",
            ],
          },
          {
            section: "Personal Items",
            items: [
              "Medications",
              "Ear plugs",
              "Wallet/purse",
              "Day-pack/backpack",
              "Travel pillow",
              "Pen/pencil",
              "Book",
              "Journal",
              "Reusable water bottle",
              "First aid supplies",
              "Keys",
              "Umbrella",
            ],
          },
          {
            section: "Electronics",
            items: [
              "Computer/tablet",
              "Mouse/keyboard",
              "Phone",
              "Camera/SD-cards",
              "Headphones/earbuds",
              "Chargers",
            ],
          },
          {
            section: "Travel Documents",
            items: [
              "Passport",
              "Identification card",
              "Driver's license",
              "Credit card",
              "Airline tickets",
              "Travel insurance",
              "Car rental documents",
              "Hotel/home rental documents",
              "Money/currency",
            ],
          },
        ];
      default:
        return "unknown";
    }
  }

  if (!checklist) {
    outputDiv.textContent = "No checklist available";
    return;
  }

  document
    .getElementById("add-item-button")
    .addEventListener("click", addNewItem);

  function displayChecklist() {
    outputDiv.innerHTML = "";

    checklist.forEach((section) => {
      outputDiv.appendChild(createSectionHeader(section.section));
      outputDiv.appendChild(createItemsList(section.items, false));
    });

    if (otherItems.length > 0) {
      outputDiv.appendChild(createSectionHeader("Other"));
      outputDiv.appendChild(createItemsList(otherItems, true));
    }
  }

  function addNewItem(event) {
    const newItem = document.getElementById("new-item").value;
    if (newItem) {
      otherItems.push(newItem);
      document.getElementById("new-item").value = "";
      storeOtherItems();
      displayChecklist();
    }
  }

  function createSectionHeader(section) {
    const header = document.createElement("h2");
    header.textContent = section;
    return header;
  }

  function createItemsList(items, isOtherItems) {
    const ul = document.createElement("ul");
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    items.forEach((item) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item;
      checkbox.checked = checkedItems.includes(item);
      checkbox.addEventListener("change", toggleCheck);

      if (checkbox.checked) {
        li.classList.add("checklistSelected");
      }

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(item));

      if (isOtherItems) {
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", (event) => {
          event.stopPropagation();
          removeItem(item);
        });
        li.appendChild(removeButton);
      }

      li.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
        toggleCheck.call(checkbox);
      });

      ul.appendChild(li);
    });

    return ul;
  }

  function toggleCheck() {
    const item = this.value;
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    if (this.checked) {
      checkedItems.push(item);
      this.parentElement.classList.add("checklistSelected");
    } else {
      checkedItems = checkedItems.filter((checkedItem) => checkedItem !== item);
      this.parentElement.classList.remove("checklistSelected");
    }

    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }

  function removeItem(item) {
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
    if (checkedItems.includes(item)) {
      checkedItems = checkedItems.filter((checkedItem) => checkedItem !== item);
      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
    }

    otherItems = otherItems.filter((otherItem) => otherItem !== item);
    storeOtherItems();
    displayChecklist();
  }

  function storeOtherItems() {
    localStorage.setItem("otherItems", JSON.stringify(otherItems));
  }

  //

  document
    .getElementById("check-all-button")
    .addEventListener("click", checkAll);

  document
    .getElementById("uncheck-all-button")
    .addEventListener("click", uncheckAll);

  document.getElementById("restart-button").addEventListener("click", restart);

  function checkAll() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
      toggleCheck.call(checkbox);
    });
  }

  function uncheckAll() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      toggleCheck.call(checkbox);
    });
  }

  function restart() {
    if (
      confirm(
        "Are you sure you want to restart? This will clear all your current progress."
      )
    ) {
      localStorage.setItem("checkedItems", JSON.stringify([]));
      localStorage.removeItem("gender");
      localStorage.removeItem("climate");
      localStorage.removeItem("checkedStates");
      localStorage.removeItem("otherItems");

      window.location.href = "./page2.html";
    }
  }

  //

  document
    .getElementById("checked-items-button")
    .addEventListener("click", function () {
      window.location.href = "checked-items.html";
    });

  document
    .getElementById("submit-button")
    .addEventListener("click", function () {
      window.location.href = "checked-items.html";
    });
};
