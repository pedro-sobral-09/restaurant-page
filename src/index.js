import "./styles/main.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";
import "./styles/contact.css";

import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";
import loadContact from "./pages/contact.js";

loadHome();

const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");
const btnContact = document.querySelector("#btn-contact");

btnHome.addEventListener("click", loadHome);
btnMenu.addEventListener("click", loadMenu);
btnAbout.addEventListener("click", loadAbout);
btnContact.addEventListener("click", loadContact);