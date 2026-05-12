export default function createElement(tag, className = "", content = "", attributes = {}){
    const element = document.createElement(tag);

    if (className){
        const classes = className.split(" ");
        
        classes.forEach( elem => {
            element.classList.add(elem);
        });
    }

    if (content){
        element.textContent = content;
    }

    for (let key in attributes){
        element.setAttribute(key, attributes[key]);
    }
    
    return element;
}