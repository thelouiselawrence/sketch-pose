import * as THREE from "three";

function createEmptyScene() {
    return {
        scene: new THREE.Scene(),
        cameras: [],
        lights: [],
        meshes: [],
        objects: []
    }
}

function createHomeScene() {
    const data = createEmptyScene();

    const fov = 75; // field of view
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;

    const camera = createPerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    const color = 0xEEEE22;
    const intensity = 3;
    const light = createDirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    addLight(data, light);
    addCamera(data, camera);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xFFFF00});
    const mesh = new createMesh(geometry, material);
    addMesh(data, mesh);
    return data;
}

function createAppScene() {
    const data = createEmptyScene();

    const fov = 75; // field of view
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;

    const camera = createPerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    const color = 0xEEEE22;
    const intensity = 3;
    const light = createDirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    addLight(data, light);
    addCamera(data, camera);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xFF0000});
    const mesh = new createMesh(geometry, material);
    addMesh(data, mesh);

    return data;
}


function createDirectionalLight(color, intensity) {
    return new THREE.DirectionalLight(color, intensity);
    // return light;
}

function createPerspectiveCamera(fov, aspect, near, far) {
    return new THREE.PerspectiveCamera(fov, aspect, near, far);
    // return camera;
}

function createMesh(vertices, material) {
    return new THREE.Mesh(vertices, material);
}

function addLight(data, light) {
    data.lights.push(light);
    data.scene.add(light);
}

function addCamera(data, camera) {
    data.cameras.push(camera);
    data.scene.add(camera);
}

function addMesh(data, mesh) {
    data.meshes.push(mesh);
    data.scene.add(mesh);
}

function addObject(data, obj) {
    data.objects.push(obj);
    data.scene.add(obj);
}

// function rotateAll(data) {
//     console.log("ROTATE ANIMATE");
//     const meshes = data.meshes;
//     for (var i = 0; i < meshes.length; i++) {
//         const mesh = meshes[i];
//         mesh.rotation.x += 0.01;
//         mesh.rotation.y += 0.01;
//         mesh.rotation.z += 0.01;
//         renderer.render(scene, cameras[0]);
//     }
// }

export {
    createHomeScene,
    createAppScene,
    // rotateAll
}
