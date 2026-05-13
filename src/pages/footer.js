import createElement from "./createElement.js";

export default function createFooter(){
    const footer = createElement("footer");
    footer.appendChild(createPFooter());
    return footer;
}

function createPFooter(){
    const p = createElement("p", "");
    p.innerHTML += `Build by <a href="https://github.com/pedro-sobral-09" target="_blank">Pedro Sobral</a>`;
    return p;
}