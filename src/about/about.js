import "./about-style.css";
import barberShopLocationImg from "../../assets/background.jpg"

var aboutContent = null;

function createGrid() {
    const gridContainer = document.createElement("div");
    gridContainer.id = "about-grid-container";
    gridContainer.insertAdjacentHTML('beforeend', "<iframe width=\"600\" height=\"450\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?q=Edinburgh&t=m&z=12&ie=UTF8&iwloc=&output=embed\"></iframe>");
    
    const addressContainer = document.createElement("div");
    addressContainer.id = "address-container"

    const addressInfoLabel = document.createElement("p");
    addressInfoLabel.textContent = "Address:";
    addressContainer.appendChild(addressInfoLabel);

    const addressInfo = document.createElement("p");
    addressInfo.textContent = "84 Thistle & Marrow Wynd Edinburgh, EH2 9BX";
    addressContainer.appendChild(addressInfo);

    const tipsInfo = document.createElement("p");
    tipsInfo.textContent = "The Location: Tucked away just off the cobblestones of a fictional side street in the New Town, look for the traditional barber pole—just ignore the fact that our red stripes represent actual bloodletting history. If you hear a loud CRACK followed by a sigh of relief, you've found the right door.";
    addressContainer.appendChild(tipsInfo);

    const scheduleInfo = document.createElement("p");
    scheduleInfo.textContent = "Working hours: 9 - 20 from Monday till Friday";
    addressContainer.appendChild(scheduleInfo);

    gridContainer.appendChild(addressContainer);

    return gridContainer;
}

function getAboutContent() {
    if (aboutContent !== null) {
        return aboutContent;
    }
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
