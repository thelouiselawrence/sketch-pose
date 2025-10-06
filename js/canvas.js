console.log("canvas.js");

import * as THREE from "three";
console.log(THREE);

// import {
// } from "./controls.js";
// import * as CONTROL from "./controls.js";

const canvasString = "canvas";

const darkColour = new THREE.Color( 0x222222);
const lightColour = new THREE.Color( 0xEEEEEE);

var backgroundColour = lightColour;

// variable for scene
const scene = new THREE.Scene();

// variable for camera
const fov = 75; // field of view
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

scene.add(camera);
scene.background = lightColour;

const meshes = [];
const lights = [];
const cameras = [];

// add light
const color = 0xEEEE22;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

window.onresize = function() {
    redrawRenderer(scene, camera);
}

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

function removeMeshFromScene(mesh) {
    mesh.geometry.dispose();
    mesh.material.dispose();
    scene.remove(mesh);
}

function removeAllMeshes() {
    for (var i = meshes.length - 1; i >= 0; i--) {
        let mesh = meshes[i];
        removeMeshFromScene(mesh);
        meshes.pop();
    }
}

function clearScene() {
    // console.log(scene);
    // console.log(scene.children);
    // for( var i = scene.children.length - 1; i >= 0; i--) {
    //     var obj = scene.children[i];
    //     scene.remove(obj);
    // }
    removeAllMeshes();
    // scene.remove(mesh);
    // scene.children = {};
    // mesh = null;
    // while(scene.children.length > 0){
    //     scene.remove(scene.children[0]);
    // }
    // scene.remove.apply(scene, scene.children);
    renderer.dispose();
    // console.log(scene);
    // console.log(scene.children);
}

function changeCanvasColourMode(darkmode) {
    console.log("change background colour");
    if (darkmode) {
        backgroundColour = darkColour;
    } else {
        backgroundColour = lightColour;
    }
    scene.background = backgroundColour;
    // render
    redrawRenderer(scene, camera);
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

var mesh = null;
function testThreeJSDemo() {
    // Object
    // if (mesh == null) {
    // if (meshes.length > 0) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000});
        mesh = new createMesh(geometry, material);
        meshes.push(mesh);
        scene.add(mesh);
    // }

    // Render
    redrawRenderer(scene, camera);
    requestAnimationFrame(render);
}

function render(time) {
    if (mesh != null) {
        time *= 0.001;  // convert time to seconds
        mesh.rotation.x = time;
        mesh.rotation.y = time;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
}

function redrawRenderer(scene, camera) {
    const sizes = getCurrentWindowDimensions();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
}

export {
    canvasString,
    clearScene,
    changeCanvasColourMode,
    testThreeJSDemo
};
