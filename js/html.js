console.log("html.js");

import * as CANVAS from "./canvas.js";

// const canvasString = "canvas";

var webappstatus = false;
var darkmode = false;

const homepageString = "home";
// const interactiveString = "interactive";
// const displayString = "display";

const homecanvasString = "homecanvas";
const webappcanvasString = "webappcanvas";

window.onload = function() {
    addAllEventListeners();
    intializeHomePage();
}

function intializeHomePage() {
    hideElemment(document.getElementById(webappcanvasString));
    const canvas = document.getElementById(homecanvasString)
    showElement(canvas);
    CANVAS.loadHomeScene(canvas);
    CANVAS.render();
}

function addAllEventListeners() {
    addToggleDarkModeButtonEventListener();
    addWebAppButtonEventListener();
}

function addWebAppButtonEventListener() {
    const button = document.getElementById("webappbutton");
    button.addEventListener("click", function(){
        // CANVAS.clearScene();
        if (webappstatus) {
            closeWebApp(button);
        } else {
            openWebApp(button);
        }
    });
}

// function changeCanvasClass(className) {
//     const canvas = document.getElementById(canvasString);
//     canvas.className = className;
// }

function openWebApp(button) {
    console.log("open web app", webappstatus);
    webappstatus = true;
    console.log("open web app", webappstatus);
    button.textContent = "Close Web App";
    hideElementsByClass(homepageString);
    hideElemment(document.getElementById(homecanvasString));

    const canvas = document.getElementById(webappcanvasString)
    showElement(canvas);
    CANVAS.loadAppScene(canvas);
    CANVAS.render();
}

function closeWebApp(button) {
    console.log("close web app", webappstatus);
    webappstatus = false;
    console.log("close web app", webappstatus);
    button.textContent = "Open Web App";
    showElementsByClass(homepageString);
    hideElemment(document.getElementById(webappcanvasString));

    const canvas = document.getElementById(homecanvasString)
    showElement(canvas);
    CANVAS.loadHomeScene(canvas);
    CANVAS.render();

}

function addToggleDarkModeButtonEventListener() {
    document.getElementById("darkmodetoggle").addEventListener("click", function(){
        toogleDarkMode();
    });
}

function toogleDarkMode() {
    // console.log("toggle dark mode", darkmode);
    document.body.classList.toggle("dark-mode");
    // console.log("toggle dark mode", darkmode);
    // toggle canvas background
    darkmode = !darkmode;
    CANVAS.changeCanvasColourMode(darkmode);
}

function hideElemment(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "block";
}

function hideElementsByClass(classname) {
    const elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        hideElemment(elements[i]);
    }
}

function showElementsByClass(classname) {
    const elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        showElement(elements[i]);
    }
}

export {
    intializeHomePage
};