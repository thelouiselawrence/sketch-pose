console.log("html.js");

import {canvasString, changeCanvasColourMode, clearScene, testThreeJSDemo} from "./canvas.js";

var webappstatus = false;
var darkmode = false;

const homepageString = "home";

const interactiveString = "interactive";
const displayString = "display";


function intializeHomePage() {
    const canvas = document.getElementById(canvasString);
    canvas.className = displayString;
    hideElemment(canvas);
    addAllEventListeners();
}

function addAllEventListeners() {
    addToggleDarkModeButtonEventListener();
    addWebAppButtonEventListener();
}

function addWebAppButtonEventListener() {
    const button = document.getElementById("webappbutton");
    button.addEventListener("click", function(){
        clearScene();
        if (webappstatus) {
            closeWebApp(button);
        } else {
            openWebApp(button);
        }
    });
}

function changeCanvasClass(className) {
    const canvas = document.getElementById(canvasString);
    canvas.className = className;
}

function openWebApp(button) {
    webappstatus = true;
    button.textContent = "Close Web App";
    hideElementsByClass(homepageString);
    changeCanvasClass(interactiveString);
    showElement(canvas);
    testThreeJSDemo();
}

function closeWebApp(button) {
    webappstatus = false;
    button.textContent = "Open Web App";
    showElementsByClass(homepageString);
    changeCanvasClass(displayString);
    hideElemment(canvas);
}

function addToggleDarkModeButtonEventListener() {
    document.getElementById("darkmodetoggle").addEventListener("click", function(){
        toogleDarkMode();
    });
}

function toogleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // TODO toggle canvas background
    darkmode = !darkmode;
    changeCanvasColourMode(darkmode);
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