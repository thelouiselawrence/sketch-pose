import * as THREE from "three";
import { code } from "three/tsl";


// need to create a skeleton of the joints
// skeleton object
// joint objects



// function Joint(name, position, rotation) {
//     // name should be a string
//     // position should be a THREE.Vector3
//     this.name = name;
//     this.position = position;
// }
// function Bone(name, position, rotation) {

// }

function codeForSex(sex) {
    if (sex == true) {
        return "M";
    }
    if (sex == false) {
        return "F";
    }
}

function calculateLifeStage1(age) {
    // should return a number between 1 and 5
    // (1) infant, (2) child, (3) tween, (4) teen, (5) adult
    let lifeStage = age + 1;
    if (lifeStage > 16) {
        lifeStage = 16;
    }
    lifeStage = 4 * lifeStage / 15;
    lifeStage = Math.ceil(lifeStage);
    return lifeStage;
}

function calculateLifeStage2(age) {
    let lifeStage = calculateLifeStage1(age);
    if (lifeStage > 4) {
        lifeStage = 4;
    }
    return lifeStage;
}

function calculateHeadToHeightRatio(age, longerLimb) {
    let lifeStage = calculateLifeStage1(age);
    let headHeightRatio = lifeStage + 3
    if (lifeStage > 2 & longerLimb === false) {
        // adult only
        headHeightRatio = headHeightRatio - 1;
    }
    return headHeightRatio;
}

function calculateHeadHeight(age, sex, longerHead) {
    let headHeight = calculateLifeStage2(age) + 4;
    let lifeStage = calculateLifeStage1(age, longerHead);
    if (lifeStage > 4) {
        // adult only
        if (sex === true) {
            headHeight = headHeight + 1;
        }
        if (longerHead === true) {
            headHeight = headHeight + 1;
        }
    }
    return headHeight;
}

function calculateCharacterHeight(age, sex, longerLimb, longerHead) {
    let headHeight = calculateHeadHeight(age, sex, longerHead);
    let headHeightRatio = calculateHeadToHeightRatio(age, longerLimb);
    let characterHeight = headHeight * headHeightRatio;
    return characterHeight;
}



function createRootJoint(age, sex, head, limb) {

}



// function Character(age, sex, head, limb, name) {
//     // age is a number, 0 or greater
//     this.age = age;
//     // sex is a boolean, true for male, false for female
//     this.sex = sex;
//     // head is boolean, or a number between 0 and 1, used for calculating measurements
//     this.head = head;
//     // limb is a boolean, or a number between 0 and 1, used for calculating measurements
//     this.limb = limb;
//     // name is a string, and is optional, use "" if there is no name
//     this.name = name;
//     this.sexCode = function() {
//         if (this.sex === true) {
//             return "M";
//         } else {
//             return "F";
//         }
//     }
//     // calculate life stage from age
//     this.lifeStage = function() {
//         // should return a number between 0 and 4
//         // (0) infant, (1) child, (2) tween, (3) teen, (4) adult
//         let lifeStage = this.age + 1;
//         if (lifeStage > 16) {
//             lifeStage = 16;
//         }
//         lifeStage = 4 * lifeStage / 15;
//         lifeStage = Math.ceil(lifeStage);
//         return lifeStage - 1;
//     }
//     this.lifeStage2 = function() {
//         let lifeStage = this.lifeStage()
//         if (lifeStage > 3) {
//             lifeStage = 3;
//         }
//         return lifeStage;
//     }
//     this.headHeightRatio = function() {
//         let lifeStage = this.lifeStage();
//         let headHeightRatio = lifeStage + 4;
//         // adjust for height variation in teenagers and adults
//         if (lifeStage > 3 & this.limb === false) {
//             // adult only
//             headHeightRatio = headHeightRatio - 1;
//         }
//         return headHeightRatio;
//     }
//     this.headHeight = function() {
//         let headHeight = this.lifeStage2() + 5;
//         // adjust for height varation in teens and adults, caused by sex differences
//         let lifeStage = this.lifeStage();
//         if (lifeStage > 3) {
//             // adult only
//             if (this.sex === true) {
//                 headHeight = headHeight + 1;
//             }
//             if (this.head === true) {
//                 headHeight = headHeight + 1;
//             }
//         }
//         return headHeight;
//     }
//     this.characterHeight = function() {
//         return this.headHeight() * this.headHeightRatio();
//     }
// }

// function createCharacter(age, sex, head, limb, name) {
//     let character = new Character(age, sex, head, limb, name);
//     return character;
// }

// export {
//     Character
// }

function testCharacters() {
    let ages = [1, 5, 9, 13, 17, 21];
    let booleans = [false, true];
    // loop through ages
    for (let i = 0; i < ages.length; i++) {
        let age = ages[i];
        // loop through sexes
        for (let j = 0; j < booleans.length; j++) {
            let sex = booleans[j];
            // loop through head heights
            for (let k = 0; k < booleans.length; k++) {
                let headHeight = booleans[k];
                // loop through limb lengths
                for (let l = 0; l < booleans.length; l++) {
                    let limbLength = booleans[l];
                    // create character and display details to console
                    console.log(codeForSex(sex), age);
                    console.log("Life Stage", calculateLifeStage1(age), calculateLifeStage2(age));
                    console.log("Head Height Ratio", calculateHeadToHeightRatio(age, limbLength));
                    console.log("Head Height", calculateHeadHeight(age, sex, headHeight));
                    console.log("Character Height", calculateCharacterHeight(age, sex, limbLength, headHeight));
                }
            }
        }
    }
}

testCharacters();




// types of characters
// infants 0-2 years 4 heads
// todders 2-4 years 4.5 heads
// child 4-6 years 5 heads
// child 6-8 years 5.5 heads
// tween 10-12 years 6 heads
// tween 12-14 years 6.5 heads
// teenager 14-16 years 7 heads
// teenager 16-18 years 7.5 heads
// adult 18+ years 8 heads


// types of characters
// infant 0-2 years 4 heads
// child - toddler 2-6 years 5 heads
// child - tween 6-10 years 6 heads
// teenager 10-14 years 7 heads
// adult 14+ years 8 heads
