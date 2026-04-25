import "./about-style.css";
import barberShopLocationImg from "../../assets/background.jpg"

var aboutContent = null;

function createGrid() {
    const gridContainer = document.createElement("div");
    gridContainer.id = "about-grid-container";
    gridContainer.insertAdjacentHTML('beforeend', "<iframe width=\"600\" height=\"450\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?q=Edinburgh&t=m&z=12&ie=UTF8&iwloc=&output=embed\"></iframe>");
    
    const addressContainer = document.createElement("div");
    const addressInfo = document.createElement("p");
    addressInfo.textContent = "This is a message ";
    addressContainer.appendChild(addressInfo);

    gridContainer.appendChild(addressContainer);

    return gridContainer;
}

function getAboutContent() {
    // if (menuContent !== null) {
    //     // Skip if already created
    //     return menuContent;
    // }
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutContainer.classList.add("container");
    const aboutMessage = document.createElement("p");
    aboutMessage.textContent = "Here's where to find us!";

    aboutContainer.appendChild(aboutMessage);
    aboutContainer.appendChild(createGrid());
    
    aboutContent = aboutContainer;
    return aboutContainer;
}

export {getAboutContent};
