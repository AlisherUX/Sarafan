import loadHeader from "./components/Header.js";
import loadFooter from "./components/Footer.js";
import loadHome from "./pages/Home.js";

function loadPage(page) {
  switch (page) {
    case "home":
      loadHome();
      break;

    default:
      loadHome();
  }
}

function init() {
  loadHeader();
  loadFooter();
  loadPage("home");

  document.getElementById("header").addEventListener("click", (event) => {
    if (event.target.matches("[data-page]")) {
      const page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
