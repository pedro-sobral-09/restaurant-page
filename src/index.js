import "./styles/main.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/footer.css";

import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";

loadHome();

const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelectorAll(".btn-menu");

btnHome.addEventListener("click", loadHome);

btnMenu.forEach(btn => {
    btn.addEventListener("click", loadMenu);
});