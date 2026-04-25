import barberLogoSource from "../assets/barber.svg";
import barberBackground from "../assets/background.jpg"
import "./style.css";

console.log("Hello, there!");

/*
 *  Add the image to the header
 */
function addBarberLogo() {
    // Get the header holding the buttons
    const headerElem = document.querySelector("header");

    // Create the element holding the image
    const barberLogo = document.createElement("img");
    barberLogo.src = barberLogoSource;

    // Append in front the navbar
    headerElem.prepend(barberLogo);
}

function addBackground() {
    const contentPage = document.querySelector("body");
    const backgroundElem = document.createElement("img");
    backgroundElem.src = barberBackground;
    backgroundElem.id = "background-img";
    contentPage.appendChild(backgroundElem);
}

addBarberLogo();
addBackground();