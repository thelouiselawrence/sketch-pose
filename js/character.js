import * as THREE from "three";

// need to create a skeleton of the joints
// skeleton object
// joint objects

function Joint(name, position) {
    // name should be a string
    // position should be a THREE.Vector3
    this.name = name;
    this.position = position;
}



// function createJoint(jointName, jointPosition) {
//     // jointName should be a string
//     // jointPosition should be a THREE.Vector3
//     var joint = {
//         name: jointName,
//         position: jointPosition
//     }
//     return joint;
// }