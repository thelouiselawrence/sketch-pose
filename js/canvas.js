console.log("canvas.js");

import * as THREE from "three";
console.log(THREE);

import * as SCENE from "./scene.js";
// import * as CONTROL from "./controls.js";


// const homeScene = SCENE.createHomeScene();
// const appScene = SCENE.createAppScene();
// var activeScene = homeScene;

const darkColour = new THREE.Color( 0x222222);
const lightColour = new THREE.Color( 0xEEEEEE);

var backgroundColour = lightColour;

var homeScene = null;
var appScene = null;
var activeScene = null;

function createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas // TODO select canvas
    })
    return renderer;
}

function loadAppScene(canvas) {
    if (appScene == null) {
        const renderer = createRenderer(canvas);
        const data = SCENE.createAppScene();
        appScene = {
            renderer: renderer,
            data: data
        }
    }
    activeScene = appScene;
    setBackgroundColour();
    // activeScene.scene.background = backgroundColour;
}

function loadHomeScene(canvas) {
    if (homeScene == null) {
        const renderer = createRenderer(canvas);
        const data = SCENE.createHomeScene();
        homeScene = {
            renderer: renderer,
            data: data
        }
    }
    activeScene = homeScene;
    setBackgroundColour();
    // activeScene.scene.background = backgroundColour;
}

// const homeRenderer = new THREE.WebGLRenderer();
// const appRenderer = new THREE.WebGLRenderer();
// var activeRenderer = null;


// const renderer = new THREE.WebGLRenderer();
// console.log("RENDERER", renderer);


function render() {
    if (activeScene != null) {
        const renderer = activeScene.renderer;
        const scene = activeScene.data.scene;
        const camera = activeScene.data.cameras[0];
        const sizes = getCurrentWindowDimensions();
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        if (activeScene == homeScene) {
            sizes.width = sizes.width / 2;
            sizes.height = sizes.height / 2;
        }
        renderer.setSize(sizes.width, sizes.height);
        // renderer.render(scene, camera);
        renderer.setAnimationLoop( rotateAll );
        // requestAnimationFrame(rotateAll);
    }
    // requestAnimationFrame(rotateAll);
    // renderer.setAnimationLoop( rotateAll );
}

window.onresize = function() {
    render();
}

function changeCanvasColourMode(darkmode) {
    // console.log(backgroundColour);
    if (darkmode) {
        backgroundColour = darkColour;
    } else {
        backgroundColour = lightColour;
    }
    // console.log(backgroundColour);
    // activeScene.scene.background = backgroundColour;
    setBackgroundColour();
    // render
    render();
}

function setBackgroundColour() {
    activeScene.data.scene.background = backgroundColour;
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


function rotateAll() {
    const time = 0.01;

    const renderer = activeScene.renderer;
    const scene = activeScene.data.scene;
    const camera = activeScene.data.cameras[0];
    const meshes = activeScene.data.meshes;

    for (var i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        // console.log("MESH", mesh);
        mesh.rotation.x += time;
        mesh.rotation.y += time;
        mesh.rotation.z += time;
        // renderer.render(scene, camera);
        // requestAnimationFrame(rotateAll);
    }
    renderer.render(scene, camera);
    // requestAnimationFrame(rotateAll);

}


// function render(renderer, scene, camera) {
//     const sizes = getCurrentWindowDimensions();
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();
//     if (activeScene == homeScene) {
//         sizes.width = sizes.width / 2;
//         sizes.height = sizes.height / 2;
//     }
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.render(scene, camera);
// }

// window.onresize = function() {
    // render(activeScene.scene, activeScene.cameras[0]);
// }


// const scenes = [];
// var activeScene = SCENE.createHomeScene();
// scenes.push(activeScene);
// scenes.push(SCENE.createAppScene());

// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas // TODO select canvas
// })

// let renderer = null;

// function createRenderer(canvas) {
//     return new THREE.WebGLRenderer({
//         canvas: canvas
//     });
// }

// function changeRendererCanvas(renderer, canvas) {
//     renderer.canvas = canvas;
//     console.log("RENDERER", renderer);
//     return renderer;
// }



// function loadHomeScene(canvas) {
//     activeScene = homeScene;

//     // changeRendererCanvas(canvas);
//     // renderer.setAnimationLoop(rotateAll());
//     // renderer.setAnimationLoop( animate );
//     // if (renderer == null) {
//     //     renderer = createRenderer(canvas);
//     // }
//     // const activeCamera = activeScene.cameras[0];
//     render(activeScene.scene, activeScene.cameras[0]);
// }

// function loadAppScene(canvas) {
//     activeScene = appScene;

//     // changeRendererCanvas(canvas);
//     // renderer.setAnimationLoop(rotateAll());
//     // renderer.setAnimationLoop( animate );
//     // if (renderer == null) {
//     //     renderer = createRenderer(canvas);
//     // }
//     // const activeCamera = activeScene.cameras[0];
//     render(activeScene.scene, activeScene.cameras[0]);
// }

// function render(scene, camera) {
//     const sizes = getCurrentWindowDimensions();
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();
//     if (activeScene == homeScene) {
//         sizes.width = sizes.width / 2;
//         sizes.height = sizes.height / 2;
//     }
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.render(scene, camera);
// }

// function changeCanvasColourMode(darkmode) {
//     console.log("change background colour");
//     if (darkmode) {
//         backgroundColour = darkColour;
//     } else {
//         backgroundColour = lightColour;
//     }
//     activeScene.background = backgroundColour;
//     // render
//     render(activeScene.scene, activeScene.cameras[0]);
//     // redrawRenderer(scene, camera);
// }

// function getCurrentWindowDimensions() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const dimensions = {
//         width: width,
//         height: height
//     }
//     return dimensions
// }



// function rotateAll() {
//     console.log("ANIMATE");
//     const meshes = activeScene.meshes;
//     for (var i = 0; i < meshes.length; i++) {
//         const mesh = meshes[i];
//         // console.log("MESH", mesh);
//         mesh.rotation.x += 0.01;
//         mesh.rotation.y += 0.01;
//         mesh.rotation.z += 0.01;
//         // console.log(renderer);
//         // console.log(activeScene.scene);
//         // console.log(activeScene.cameras[0]);
//         renderer.render(activeScene.scene, activeScene.cameras[0]);
//     }
// }

// function animate() {
//     console.log("ANIMATE");
//     const meshes = activeScene.meshes;
//     for (var i = 0; i < meshes.length; i++) {
//         const mesh = meshes[i];
//         mesh.rotation.x += 0.01;
//         mesh.rotation.y += 0.01;
//         mesh.rotation.z += 0.01;
//         renderer.render(activeScene.scene, activeScene.cameras[0]);
//     }

//     // if (activeScene == appScene) {
//     //     const meshes = activeScene.meshes;
//     //     for (var i = 0; i < meshes.length; i++) {
//     //         const mesh = meshes[i];
//     //         mesh.rotation.x += 0.01;
//     //         mesh.rotation.y += 0.01;
//     //         mesh.rotation.z += 0.01;
//     //         renderer.render(activeScene.scene, activeScene.cameras[0]);
//     //     }
//     // }
// }


// window.onresize = function() {
//     redrawRenderer(scene, camera);
// }

// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })

// function removeMeshFromScene(mesh) {
//     mesh.geometry.dispose();
//     mesh.material.dispose();
//     scene.remove(mesh);
// }

// function removeLightFromScene(light) {
//     light.dispose();
// }

// function removeAllMeshes() {
//     for (var i = meshes.length - 1; i >= 0; i--) {
//         let mesh = meshes[i];
//         removeMeshFromScene(mesh);
//         meshes.pop();
//     }
// }

// function removeAllLightsFromScene() {
//     for (var i = lights.length - 1; i >= 0; i--) {
//         let light = lights[i];
//         removeLightFromScene(light);
//     }
// }

// function clearScene() {
//     removeAllMeshes();
//     renderer.dispose();
// }

// function changeCanvasColourMode(darkmode) {
//     console.log("change background colour");
//     if (darkmode) {
//         backgroundColour = darkColour;
//     } else {
//         backgroundColour = lightColour;
//     }
//     activeScene.background = backgroundColour;
//     // render
//     redrawRenderer(activeScene, camera);
// }

// function getCurrentWindowDimensions() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const dimensions = {
//         width: width,
//         height: height
//     }
//     return dimensions
// }

// function createMesh(vertices, material) {
//     const mesh = new THREE.Mesh(vertices, material);
//     return mesh;
// }

// var mesh = null;
// function testThreeJSDemo() {
//     // Object
//     // if (mesh == null) {
//     // if (meshes.length > 0) {
//         const geometry = new THREE.BoxGeometry(1, 1, 1);
//         const material = new THREE.MeshPhongMaterial({ color: 0xff0000});
//         mesh = new createMesh(geometry, material);
//         meshes.push(mesh);
//         scene.add(mesh);
//     // }

//     // Render
//     redrawRenderer(scene, camera);
//     requestAnimationFrame(render);
// }

// function render(time) {
//     if (mesh != null) {
//         time *= 0.001;  // convert time to seconds
//         mesh.rotation.x = time;
//         mesh.rotation.y = time;
//         renderer.render(scene, camera);
//         requestAnimationFrame(render);
//     }
// }

// function redrawRenderer(scene, camera) {
//     const sizes = getCurrentWindowDimensions();
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.render(scene, camera);
// }

export {
    changeCanvasColourMode,
    // changeRendererCanvas,
    loadAppScene,
    loadHomeScene,
    createRenderer,
    render
};
