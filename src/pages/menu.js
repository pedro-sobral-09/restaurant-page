import createElement from "./createElement.js";
import createFooter from "./footer.js";

export default function loadMenu(){
    const content = document.querySelector("#content");
    content.innerHTML = ``;
    content.appendChild(createMenuSection());
    content.appendChild(createFooter());
}

function createMenuSection(){
    const menuSection = createElement("section", "menu-section");

    menuSection.appendChild(createElement("h2", "", `Our Menu`));
    menuSection.appendChild(createContainerMenu());

    return menuSection;
}

function createContainerMenu() {
    const containerMenu = createElement("div", "menu-flex");

    containerMenu.appendChild(
        createMenuCard(
            "Classic Burger",
            "Juicy beef burger with cheddar cheese and crispy fries.",
            "$14"
        )
    );

    containerMenu.appendChild(
        createMenuCard(
            "Italian Pasta",
            "Creamy pasta with parmesan cheese and fresh herbs.",
            "$18"
        )
    );

    containerMenu.appendChild(
        createMenuCard(
            "Grilled Salmon",
            "Fresh salmon served with vegetables and lemon sauce.",
            "$24"
        )
    );

    containerMenu.appendChild(
        createMenuCard(
            "Caesar Salad",
            "Crisp lettuce, croutons, parmesan and Caesar dressing.",
            "$12"
        )
    );

    containerMenu.appendChild(
        createMenuCard(
            "Margherita Pizza",
            "Stone-baked pizza with mozzarella, basil and tomato sauce.",
            "$20"
        )
    );

    containerMenu.appendChild(
        createMenuCard(
            "Chocolate Cake",
            "Rich chocolate cake with creamy ganache frosting.",
            "$9"
        )
    );

    return containerMenu;
}

function createMenuCard(h3, p, span){
    const div = createElement("div", "menu-card", "")
    div.appendChild(createElement("h3", "", h3));
    div.appendChild(createElement("p", "", p));
    div.appendChild(createElement("span", "", span));
    return div;
}