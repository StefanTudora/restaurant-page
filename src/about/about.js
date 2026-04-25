import "./about-style.css";

var menuContent = null;

function getAboutContent() {
    // if (menuContent !== null) {
    //     return menuContent;
    // }
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutContainer.classList.add("container");
    const aboutMessage = document.createElement("p");
    aboutMessage.textContent = "Here is some info about us!";

    aboutContainer.appendChild(aboutMessage);
    
    menuContent = aboutContainer;
    return aboutContainer;
}

export {getAboutContent};
