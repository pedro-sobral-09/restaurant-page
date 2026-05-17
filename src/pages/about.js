import createElement from "./createElement.js";

export default function loadAbout(){
    const content = document.querySelector("#content");
    content.innerHTML = ``;

    content.appendChild(createAboutSection());
}

function createAboutSection() {
    const aboutSection = createElement("section", "about-section", "");

    aboutSection.appendChild(createElement("h2", "about-title", "About Us"));

    aboutSection.appendChild(createElement( "p", "about-text", "Welcome to Savory Haven — a place where great food, warm hospitality, and unforgettable moments come together."));

    aboutSection.appendChild(createElement( "p", "about-text", "Founded with a passion for creating fresh and flavorful dishes, our restaurant was built to bring people together around the table."));

    aboutSection.appendChild(createElement( "p", "about-text", "Our chefs combine traditional recipes with modern creativity to deliver meals made with high-quality ingredients and bold flavors."));

    aboutSection.appendChild(createElement( "p", "about-text", "Whether you are joining us for a quick lunch, a family dinner, or a special celebration, we aim to make every visit memorable."));

    aboutSection.appendChild(createElement( "p", "about-text", "At Savory Haven, food is more than just a meal — it is a way to connect, celebrate, and create lasting memories."));

    return aboutSection;
}