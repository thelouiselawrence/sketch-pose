console.log("canvas.js");

function createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    console.log(document.getElementById("canvas"));
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.absolute = "0px";
    return canvas;
}

function refreshCanvasSize() {
    const canvas = document.getElementById("canvas")
    const dimensions = getCurrentWindowDimensions();
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    return canvas;
}

function getCurrentWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimensions = {
        width: width,
        height: height
    }
    return dimensions
}

export {
    createCanvas,
    refreshCanvasSize,
    getCurrentWindowDimensions
};
