import createElement from "./createElement.js";
import heroImage from "../assets/images/heroImage.png";
import createFooter from "./footer.js";
import loadMenu from "./menu.js";

export default function loadHome(){
    const content = document.querySelector("#content");
    content.innerHTML = ``;

    content.appendChild(createHeroSection());
    content.appendChild(createFeatureSection());
    content.appendChild(createQuoteSection());
    content.appendChild(createFooter());

    addEventForViewMenu();
}

function createHeroSection(){
    const heroSection = createElement("section", "hero-section", "");

    heroSection.appendChild(createHeroTitle());
    heroSection.appendChild(createHeroSubtitle());
    heroSection.appendChild(createElement("img", "hero-image", "", {src: heroImage}));

    return heroSection;
}

function createHeroTitle(){
    return createElement("h2", "hero-title", "Taste the Best Food in Town");
}

function createHeroSubtitle(){
    const subtitle = createElement("div", "hero-subtitle", "");
    
    subtitle.appendChild(createElement("p", "p-subtitle", "Fresh ingredients. Handmade dishes. Memorable experiences."));
    subtitle.appendChild(createElement("button", "button-subtitle btn-menu", "View Menu"));
    
    return subtitle;
}

function createFeatureSection(){
    const featureSection = createElement("section", "feature-section", "");

    featureSection.appendChild(createFeatureTitle());
    featureSection.appendChild(createCards());

    return featureSection;
}

function createFeatureTitle(){
    return createElement("h2", "feature-title", "Why Choose Us?", "");
}

function createCards(){
    const container = createElement("div", "feature-container-cards", "", "");

    container.appendChild(createElement("p", "feature-card", "We use high-quality fresh ingredients every day to deliver authentic flavors.", ""));
    container.appendChild(createElement("p", "feature-card", "A warm and welcoming space perfect for friends, family, and special moments.", ""));
    container.appendChild(createElement("p", "feature-card", "Our chefs combine passion and creativity to craft unforgettable dishes.", ""));

    return container;
}

function createQuoteSection(){
    const quoteSection = createElement("section", "quote-section");

    quoteSection.appendChild(createElement("h2", "quote-section-title", "Founded with a passion for great food..."));
    quoteSection.appendChild(createBlockQuote());

    return quoteSection;
}

function createBlockQuote(){
    const blockQuote = createElement("blockquote", "block-quote");

    blockQuote.appendChild(createElement("p", "quote", `"Bringing people together through exceptional food."`));

    return blockQuote;
}

function addEventForViewMenu(){
    const btnMenu = document.querySelectorAll(".btn-menu");

    btnMenu.forEach(btn => {
        btn.addEventListener("click", loadMenu);
    });
}