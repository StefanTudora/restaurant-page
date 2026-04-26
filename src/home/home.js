
import "./home-style.css";

var homeContent = null;

function getHomeContent() {
    
    if (homeContent !== null) {
        return homeContent;
    }

    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    homeContainer.classList.add("container");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome to Cuts 'n' Cracks,";

    homeContainer.appendChild(welcomeMessage);

    const shopIntro = document.createElement("p");
    shopIntro.textContent = "The only shop in town where \"getting a trim\" might refer to your split ends or your displaced patella. Whether you're looking for a skin fade that turns heads or a skeletal adjustment that lets you actually turn your head, we've got you covered. Sit back, relax, and enjoy a hot towel treatment while we take a little off the top and put a little back in the socket. At Cuts 'n' Cracks, we don't just sharpen your look—we sharpen your posture.";

    homeContainer.appendChild(shopIntro);

    homeContent = homeContainer;
    return homeContainer;
}

export {getHomeContent};
