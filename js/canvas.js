console.log("canvas.js");

import * as THREE from "three";
console.log(THREE);

const canvasString = "canvas";

const darkColour = new THREE.Color( 0x222222);
const lightColour = new THREE.Color( 0xeeeeee);

var backgroundColour = lightColour;

// variable for scene
const scene = new THREE.Scene();

// variable for camera
const fov = 75; // field of view
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 3;

scene.add(camera);
scene.background = lightColour;

function changeCanvasColourMode(darkmode) {
    console.log("change background colour");
    // scene.background.color = colour;
    //clearColour = colour;
    if (darkmode) {
        backgroundColour = darkColour;
    } else {
        backgroundColour = lightColour;
    }
    scene.background = backgroundColour;
    // TODO render
    render(scene, camera);
}


function refreshCanvasSize() {
    // https://stackoverflow.com/questions/66405508/how-do-you-make-a-canvas-change-size-when-resizing-and-remove-side-bar
    // https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it

    const canvas = document.getElementById(canvasString)
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


function createMesh(vertices, material) {
    const mesh = new THREE.Mesh(vertices, material);
    return mesh;
}

// function createPerspectiveCamera(fov, aspect, near, far) {
//     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     return camera;
// }

// function createDefaultPerspectiveCamera() {
//     const fov = 75; // field of view
//     const aspect = 2;  // the canvas default
//     const near = 0.1;
//     const far = 5;
//     const camera = createPerspectiveCamera(fov, aspect, near, far);
//     camera.position.z = 3;
//     return camera;
// }



// TODO canvas.js should call the Three.js module, not main.js

function testThreeJSDemo() {
    // const scene = new THREE.Scene();

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Render
    render(scene, camera);
}

function render(scene, camera) {
    const sizes = getCurrentWindowDimensions();
    const canvas = document.getElementById(canvasString);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    // renderer.setClearColorHex(clearColour, alpha);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
}

export {
    canvasString,
    changeCanvasColourMode,
    refreshCanvasSize,
    getCurrentWindowDimensions,
    testThreeJSDemo
};
