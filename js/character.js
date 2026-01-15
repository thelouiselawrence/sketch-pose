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

// function Genetics(sex) {
//     // this stores data unique to each individual character
//     // sex is a string, either M or F
//     // value for head height
//     // value for limb length
//     this.sex = sex;
//     this.isMale = function() {
//         return this.sex === "M";
//     }
//     this.isFemale = function() {
//         return this.sex === "F";
//     }
// }

function Character(age, sex, head, limb, name) {
    // age is a number, 0 or greater
    this.age = age;
    // sex is a boolean, true for male, false for female
    this.sex = sex;
    // head is a number between 0 and 1, used for calculating measurements
    this.head = head;
    // limb is a number between 0 and 1, used for calculating measurements
    this.limb = limb;
    // name is a string, and is optional, use "" if there is no name
    this.name = name;
    // calculate life stage from age
    this.lifeStage = function() {
        // should return a number between 0 and 5
        let lifeStage = this.age + 1;
        if (lifeStage > 16) {
            lifeStage = 16;
        }
        lifeStage = 4 * lifeStage / 15;
        lifeStage = Math.ceil(lifeStage);
        return lifeStage;
    }
    this.headHeightRatio = function() {
        return this.lifeStage() + 4;
    }



}


// types of characters
// infants 0-2 years 4 heads
// todders 2-4 years 4.5 heads
// child 4-6 years 5 heads
// child 6-8 years 5.5 heads
// tween 10-12 years 6 heads
// tween 12-14 years 6.5 heads
// teenager 14-16 years 7 heads
// teenager 16-18 years 8 heads
// adult 18+ years 8 heads


// types of characters
// infant 0-2 years 4 heads
// child - toddler 2-6 years 5 heads
// child - tween 6-10 years 6 heads
// teenager 10-14 years 7 heads
// adult 14+ years 8 heads



// function Character(age, name) {
//     // age is a number, usually an integer
//     this.age = age;
//     // name is a string, and optional
//     this.name = name;
// }


// function Character(sex, age, tall, name) {
//     // sex is a boolean to represent either male or female, male true, female false
//     // age is a number, usually an integer
//     // tall is a boolean
//     // name is a string, and optional
//     this.sex = sex;
//     this.age = age;
//     this.tall = tall;
//     this.name = name;
//     this.headHeightRatio = function() {
//         return this.age + 4;
//     };
//     this.headHeight = function() {
//         return this.headHeightRatio() + 1

//     };
//     this.characterHeight = function() {

//     };

// }


// function headHeightRatioFromStageOfLife(stage_of_life) {
//     // stage of life should be a number, usually an integer, between 0 and 5
//     return stage_of_life + 4;
// }


// function headHeightRatioFromAgeAsYears(age_as_years) {
//     // age as years should be a number, usually an integer, 0 or greater
//     return
// }


// function createJoint(jointName, jointPosition) {
//     // jointName should be a string
//     // jointPosition should be a THREE.Vector3
//     var joint = {
//         name: jointName,
//         position: jointPosition
//     }
//     return joint;
// }