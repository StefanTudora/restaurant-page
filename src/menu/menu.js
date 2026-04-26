
import "./menu-style.css";

import broccoli from "./assets/broccoli-head.jpg";
import neckCrack from "./assets/neck-crack.jpg";
import reverseFade from "./assets/reverse-fade.jpg";
import spineCrack from "./assets/spine-crack.jpg";

var menuContent = null;

const descriptions = [
    "'Meet me at McDonalds' a younglin's classic - 50£",
    "'Doctors special', a certified killer move - 100£",
    "You kids hate you and your wife wants a divorce. As if that wasn't enough, you're loosing your masculine mane with age. Why not go with the reverse fade? You know, since everything is fadding away as it is already. - 100£",
    "You'll never walk with pain in your spine ever again! - 50£",
];

const images = [broccoli, neckCrack, reverseFade, spineCrack];

function getMenuGrid() {
    const gridMenu = document.createElement("div");
    gridMenu.id = "grid-menu";

    for (let idx = 0; idx < descriptions.length; ++idx) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const image = document.createElement("img");
        image.src = images[idx];
        const description = document.createElement("p");
        description.textContent = descriptions[idx];
        menuItem.appendChild(image);
        menuItem.appendChild(description);
        gridMenu.appendChild(menuItem);
    }

    return gridMenu;
}

function getMenuContent() {
    if (menuContent !== null) {
        return menuContent;
    }
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.classList.add("container");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Shall we cut or shall we crack?";

    menuContainer.appendChild(welcomeMessage);
    menuContainer.appendChild(getMenuGrid());
    
    menuContent = menuContainer;
    return menuContainer;
}

export {getMenuContent};
