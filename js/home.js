console.log("home.js");

function addAllButtonEventListeners() {
    addToggleDarkModeButtonEventListener();

}

function addToggleDarkModeButtonEventListener() {
    document.getElementById("darkmodetoggle").addEventListener("click", function(){
        toogleDarkMode();
    });
}

function toogleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // TODO toggle canvas background
}


export {
    addAllButtonEventListeners
};