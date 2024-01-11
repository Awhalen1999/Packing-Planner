const gender = localStorage.getItem("gender");
const climate = localStorage.getItem("climate");
const navContainer = document.getElementById("nav-container");

const checklistLink =
  !gender || !climate ? "./no-checklist.html" : "./checklist.html";

const navHTML = `
      <nav class="main-nav">
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="${checklistLink}">Checklist</a></li>
          <li><a href="./to-do-checklist.html">To-Do Checklist</a></li>
          <li><a href="./weather-app.html">Check the Weather</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./contact.html">Contact Me</a></li>
        </ul>
      </nav>`;

navContainer.innerHTML = navHTML;
