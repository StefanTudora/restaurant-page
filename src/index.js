import barberLogoSource from "../assets/barber.svg";
import barberBackground from "../assets/background.jpg"

import {getHomeContent} from "./home/home.js"
import {getMenuContent} from "./menu/menu.js"
import {getAboutContent} from "./about/about.js"


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