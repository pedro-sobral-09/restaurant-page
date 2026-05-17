import createElement from "./createElement.js";

export default function loadContact(){
    const content = document.querySelector("#content");
    content.innerHTML = ``;

    content.appendChild(createContactSection());
}

function createContactSection() {
    const contactSection = createElement("section", "contact-section", "");

    contactSection.appendChild(createElement("h2", "contact-title", "Contact Us"));

    contactSection.appendChild(createElement("p", "contact-text", "We would love to hear from you. Feel free to contact us for reservations, questions, or feedback."));

    contactSection.appendChild(createElement("p", "contact-text", "Phone: (555) 123-4567"));

    contactSection.appendChild(createElement("p", "contact-text", "Email: contact@savoryhaven.com"));

    contactSection.appendChild(createElement("p", "contact-text", "Address: 123 Flavor Street, Downtown City, NY 10001"));

    contactSection.appendChild(createElement("p", "contact-text", "Opening Hours: Monday - Sunday | 11:00 AM - 11:00 PM"));

    return contactSection;
}