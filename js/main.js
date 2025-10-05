// code to call the modules

// TODO canvas.js should call the Three.js module, not main.js

console.log("JavaScript is working");

// import * as THREE from "three";
// console.log(THREE);

import {createCanvas, getCurrentWindowDimensions, redraw} from "./canvas.js";
import {addAllButtonEventListeners} from "./home.js";

addAllButtonEventListeners();

document.getElementById("webappbutton").addEventListener("click", function(){
    const elements = document.getElementsByClassName("intro");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"; // none to hide or block to show
    }

    redraw();

    // const scene = new THREE.Scene();
    // // Object
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000});
    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    // // const width = window.innerWidth;
    // // const height = window.innerHeight;
    // // Camera
    // // const sizes = {
    // //     width: 800,
    // //     height: 600
    // // }
    // // const sizes = {
    // //     width: width,
    // //     height: height
    // // }
    // const sizes = getCurrentWindowDimensions();
    // const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    // camera.position.z = 3;
    // scene.add(camera);
    // // Render

    // // console.log("web app");
    // // hide elements


    // // https://stackoverflow.com/questions/66405508/how-do-you-make-a-canvas-change-size-when-resizing-and-remove-side-bar
    // // https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it

    // // create new canvas
    // // const width = window.innerWidth;
    // // const height = window.innerHeight;

    // const canvas = createCanvas();

    // // const canvas = document.createElement("canvas");
    // canvas.class = "webgl";

    // // canvas.width = width;
    // // canvas.height = height;
    // // canvas.style.left = "0px";
    // // canvas.style.top = "0px";
    // // canvas.style.absolute = "0px";

    // // canvas.id = "canvas";
    // // document.body.appendChild(canvas);
    // // console.log(document.getElementById("canvas"));

    // // const canvas = createCanvas();

    // const renderer = new THREE.WebGLRenderer({
    //     canvas: canvas
    // })
    // renderer.setSize(sizes.width, sizes.height);
    // renderer.render(scene, camera);

    });


// document.querySelector("darkmodetoggle").addEventListener("click", function(e) {
//     // add function to switch between modes
//     document.body.classList.toggle("dark-mode");
// });


// document.querySelector("webappbutton").addEventListener("click", function(e)) {
//     // add function to open web app, including creating new canvas
// }






// function hideElementsByClass(classname) {
//     elements = document.getElementsByClassName(classname);
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = "none";
//     }
// }

// function showElementsByClass(classname) {
//     elements = document.getElementsByClassName(classname);
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = "block";
//     }
// }


// function createCanvas() {
//     width = window.innerWidth;
//     height = window.innerHeight;

//     canvas = document.createElement("canvas");

//     canvas.width = width;
//     canvas.height = height;
//     canvas.style.left = "0px";
//     canvas.style.top = "0px";
//     canvas.style.absolute = "0px";

//     canvas.id = "canvas";
//     document.body.appendChild(canvas);
//     console.log(document.getElementById("canvas"));
// }

// function openWebApp() {
//     // hide elements
//     hideElementsByClass("intro");
//     // create a canvas
//     createCanvas();
// }
