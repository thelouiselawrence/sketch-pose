console.log("canvas.js");

import * as THREE from "three";
console.log(THREE);

function createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    console.log(document.getElementById("canvas"));
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.absolute = "0px";
    // window.addEventListener("resize", refreshCanvasSize, false);
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

function redraw() {
    testThreeJSDemo();

}

// TODO canvas.js should call the Three.js module, not main.js

function testThreeJSDemo() {
    const scene = new THREE.Scene();

    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Camera
    const sizes = getCurrentWindowDimensions();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Render
    const canvas = createCanvas();
    canvas.class = "webgl";
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
}

export {
    createCanvas,
    refreshCanvasSize,
    getCurrentWindowDimensions,
    redraw
};
