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
              "Sandals",
              "Boots",
              "Belt",
              "Pajamas",
              "Sweaters",
              "Jacket",
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

  if (checklist == null) {
    outputDiv.textContent = "No checklist available";
    return;
  }

  function displayChecklist() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    checklist.forEach((section) => {
      const sectionHeader = createSectionHeader(section.section);
      const itemsList = createItemsList(section.items, false);

      outputDiv.appendChild(sectionHeader);
      outputDiv.appendChild(itemsList);
    });

    const otherSectionHeader = createSectionHeader("Other");
    outputDiv.appendChild(otherSectionHeader);

    if (otherItems.length > 0) {
      const otherItemsList = createItemsList(otherItems, true);
      outputDiv.appendChild(otherItemsList);
    }
  }

  document
    .getElementById("add-item-button")
    .addEventListener("click", function (event) {
      const newItem = document.getElementById("new-item").value;
      if (newItem) {
        otherItems.push(newItem);
        document.getElementById("new-item").value = "";
        storeCheckedItems();
        storeOtherItems();
        displayChecklist();
      }
    });

  function createSectionHeader(section) {
    const header = document.createElement("h2");
    header.textContent = section;
    return header;
  }

  function createItemsList(items, isOtherItems) {
    const ul = document.createElement("ul");

    let checkedItems = localStorage.getItem("checkedItems");
    if (checkedItems) {
      checkedItems = JSON.parse(checkedItems);
    } else {
      checkedItems = [];
    }

    items.forEach((item, index) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = item;
      if (checkedItems.includes(item)) {
        checkbox.checked = true;
        li.classList.add("checklistSelected");
      }

      checkbox.addEventListener("change", function () {
        if (this.checked) {
          li.classList.add("checklistSelected");
        } else {
          li.classList.remove("checklistSelected");
        }
      });

      li.addEventListener("click", function (event) {
        if (event.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event("change"));
        }
      });

      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(item));

      if (isOtherItems) {
        const removeButton = document.createElement("button");
        removeButton.textContent = "−";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function () {
          otherItems = otherItems.filter((otherItem) => otherItem !== item);
          storeOtherItems();
          storeCheckedItems();
          displayChecklist();
        });

        li.appendChild(removeButton);
      }

      ul.appendChild(li);
    });

    return ul;
  }

  //

  function storeCheckedItems() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const checkedItems = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }

  function storeOtherItems() {
    localStorage.setItem("otherItems", JSON.stringify(otherItems));
  }

  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    storeCheckedItems();
    window.location.href = "checked-items.html";
  });

  const clearButton = document.getElementById("clear-button");

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      localStorage.setItem("checkedItems", JSON.stringify([]));
      localStorage.removeItem("checkedStates");
      window.location.reload();
    });
  }

  const checkAllButton = document.getElementById("check-all-button");

  if (checkAllButton) {
    checkAllButton.addEventListener("click", function () {
      const checkItems = document.querySelectorAll("input[type=checkbox]");

      checkItems.forEach((item) => {
        item.checked = true;
        const listItem = item.parentElement;
        listItem.classList.add("checklistSelected");
      });
    });
  }

  document
    .getElementById("restart-button")
    .addEventListener("click", function (event) {
      const userConfirmed = confirm(
        "Are you sure you want to clear the list? This action cannot be undone."
      );
      if (userConfirmed) {
        localStorage.setItem("checkedItems", JSON.stringify([]));
        localStorage.removeItem("gender");
        localStorage.removeItem("climate");
        localStorage.removeItem("checkedStates");
        localStorage.removeItem("otherItems");
        window.location.href = "./page2.html";
      } else {
        event.preventDefault();
      }
    });
};
