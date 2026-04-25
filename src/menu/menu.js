
import "./menu-style.css";

var menuContent = null;

function getMenuContent() {
    // if (menuContent !== null) {
    //     return menuContent;
    // }
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.classList.add("container");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "MENU!";

    menuContainer.appendChild(welcomeMessage);
    
    menuContent = menuContainer;
    return menuContainer;
}

export {getMenuContent};
