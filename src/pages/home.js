import createElement from "./createElement.js";
import heroImage from "../assets/images/heroImage.png";

export default function loadHome(){
    const content = document.querySelector("#content");

    content.appendChild(createHeroSection());
}

function createHeroSection(){
    const heroSection = createElement("section", "hero-section", "");

    heroSection.appendChild(createTitleHero());
    heroSection.appendChild(createSubtitleHero());
    heroSection.appendChild(createElement("img", "hero-image", "", {src: heroImage}));

    return heroSection;
}

function createTitleHero(){
    return createElement("h2", "hero-title", "Taste the Best Food in Town");
}

function createSubtitleHero(){
    const subtitle = createElement("div", "hero-subtitle", "");
    
    subtitle.appendChild(createElement("p", "p-subtitle", "Fresh ingredients. Handmade dishes. Memorable experiences."));
    subtitle.appendChild(createElement("button", "button-subtitle menu", "View Menu"));
    
    return subtitle;
}