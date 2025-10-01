// code for basic button responses on the main page

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function hideElementsByClass(classname) {
    elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function showElementsByClass(classname) {
    elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}

// https://stackoverflow.com/questions/66405508/how-do-you-make-a-canvas-change-size-when-resizing-and-remove-side-bar
// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it

function createCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas = document.createElement("canvas");


    canvas.width = width;
    canvas.height = height;
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.absolute = "0px";

    canvas.id = "canvas";
    document.body.appendChild(canvas);
    console.log(document.getElementById("canvas"));
}

function openWebApp() {
    // hide elements
    hideElementsByClass("intro");
    // create a canvas
    createCanvas();
}