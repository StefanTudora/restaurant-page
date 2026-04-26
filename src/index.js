import barberLogoSource from "../assets/barber.svg";
import barberBackground from "../assets/background.jpg"

import {getHomeContent} from "./home/home.js"
import {getMenuContent} from "./menu/menu.js"
import {getAboutContent} from "./about/about.js"

import "./style.css";

function addBarberLogo() {
    // Get the header holding the buttons
    const headerElem = document.querySelector("header");

    const logoContent = document.createElement("div");
    logoContent.id = "logo-content"

    // Create the element holding the image
    const barberLogo = document.createElement("img");
    barberLogo.src = barberLogoSource;

    const barberLogoName = document.createElement("p");
    barberLogoName.textContent = "Cuts & Cracks";

    logoContent.appendChild(barberLogo);
    logoContent.appendChild(barberLogoName);

    // Append in front the navbar
    headerElem.prepend(logoContent);
}

function addBackground() {
    const contentPage = document.querySelector("body");
    const backgroundElem = document.createElement("img");
    backgroundElem.src = barberBackground;
    backgroundElem.id = "background-img";
    contentPage.appendChild(backgroundElem);
}

function loadDivIntoContent(subContent) {
    const contentPage = document.querySelector("#content");
    contentPage.replaceChildren();
    contentPage.appendChild(subContent);
}

function attachListeners() {
    const buttonList = document.querySelectorAll("nav > button");
    buttonList.forEach(button => {
        const id = button.id;
        button.addEventListener("click", () => {
            switch(id) {
                case "home":
                    loadDivIntoContent(getHomeContent());
                    break;
                case "menu":
                    loadDivIntoContent(getMenuContent());
                    break;
                case "about":
                    loadDivIntoContent(getAboutContent());   
                    break;
                default:
                    break;
            }
        })
    })
}

addBarberLogo();
addBackground();
attachListeners();
loadDivIntoContent(getHomeContent());