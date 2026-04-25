
import "./home-style.css";

var homeContent = null;

// Put everythin in a class, encapsulate so it's easier to use

function getHomeContent() {
    // if (homeContent !== null) {
    //     return homeContent;
    // }
    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    homeContainer.classList.add("container");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Hello!";

    homeContainer.appendChild(welcomeMessage);

    homeContent = homeContainer;
    return homeContainer;
}

export {getHomeContent};
