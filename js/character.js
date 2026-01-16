import * as THREE from "three";
import { FunctionCall } from "three/examples/jsm/transpiler/AST.js";
import { code } from "three/tsl";


// need to create a skeleton of the joints
// skeleton object
// joint and bone objects

// TODO need binary and floating point versions

function sexCode(sex) {
    // convert boolean to a code
    if (sex == true) {
        return "M";
    }
    if (sex == false) {
        return "F";
    }
}

// stages of growth
// Option A: 5 stages -> head to height ratios are integers (4, 5, 6, 7, 8)
// Option B: 9 stages -> head to height ratios are floating points (increments of 0.5)

function calculateLifeStageA(age) {
    // should return a number between 1 and 5
    // (1) infant, (2) child, (3) tween, (4) teen, (5) adult
    // assumes that all growth stops at 14
    let lifeStage = age + 1;
    if (lifeStage > 16) {
        lifeStage = 16;
    }
    lifeStage = 4 * lifeStage / 15;
    lifeStage = Math.ceil(lifeStage);
    return lifeStage;
}

function calculateLifeStageB(age) {
    // should return a number between 0 and 9
    // assumes that all growth stops at 18
    let lifeStage = age / 2;
    lifeStage = Math.floor(lifeStage);
    if (lifeStage > 9) {
        lifeStage = 9
    }
    return lifeStage;
}

function calculateGrowthStageA(age) {
    let growthStage = calculateLifeStageA(age);
    // growth is optional after this point
    // this corresponds to an of 10+
    if (growthStage > 4) {
        growthStage = 4;
    }
    return growthStage;
}

function calculateGrowthStageB(age) {
    // growth is optional after this point
    // this corresponds to an of 12+
    let growthStage = calculateLifeStageB(age);
    if (growthStage > 6) {
        growthStage = 6;
    }
    return growthStage;
}

function calculateHeadToHeightRatioA(age, longerLimb) {
    let lifeStage = calculateLifeStageA(age);
    let headHeightRatio = lifeStage + 3
    if (lifeStage > 2 & longerLimb === false) {
        // adult only
        headHeightRatio = headHeightRatio - 1;
    }
    return headHeightRatio;
}

function calculateHeadToHeightRatioB() {}

function calculateHeadHeightA(age, sex, longerHead) {
    let headHeight = calculateGrowthStageA(age) + 4;
    let lifeStage = calculateLifeStageA(age, longerHead);
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

function calculateHeadHeightB() {}

function calculateCharacterHeightA(age, sex, longerLimb, longerHead) {
    let headHeight = calculateHeadHeightA(age, sex, longerHead);
    let headHeightRatio = calculateHeadToHeightRatioA(age, longerLimb);
    let characterHeight = headHeight * headHeightRatio;
    return characterHeight;
}

function calculateCharacterHeightB() {}


function createRootJoint(age, sex, head, limb) {

}


// export {
//     Character
// }

function testCharactersA() {
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
                    console.log(sexCode(sex), age);
                    console.log("Life Stage", calculateLifeStageA(age), calculateGrowthStageA(age));
                    console.log("Head Height Ratio", calculateHeadToHeightRatioA(age, limbLength));
                    console.log("Head Height", calculateHeadHeightA(age, sex, headHeight));
                    console.log("Character Height", calculateCharacterHeightA(age, sex, limbLength, headHeight));
                }
            }
        }
    }
}


function testCharactersB() {
    // TODO change A to B
    let ages = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    let sexes = [false, true];
    // add arrays of integers
    let booleans = [false, true];
    // loop through ages
    for (let i = 0; i < ages.length; i++) {
        let age = ages[i];
        // loop through sexes
        for (let j = 0; j < booleans.length; j++) {
            let sex = sexes[j];
            console.log(sexCode(sex), age);
            console.log("Life Stage", calculateLifeStageB(age), calculateGrowthStageB(age));
            // loop through head heights
            for (let k = 0; k < booleans.length; k++) {
                let headHeight = booleans[k];
                // loop through limb lengths
                for (let l = 0; l < booleans.length; l++) {
                    let limbLength = booleans[l];
                    // create character and display details to console
                    // console.log(sexCode(sex), age);
                    // console.log("Life Stage", calculateLifeStageB(age), calculateGrowthStageB(age));
                    // console.log("Head Height Ratio", calculateHeadToHeightRatioB(age, limbLength));
                    // console.log("Head Height", calculateHeadHeightB(age, sex, headHeight));
                    // console.log("Character Height", calculateCharacterHeightB(age, sex, limbLength, headHeight));
                }
            }
        }
    }
}


// testCharactersA();
testCharactersB();



// types of characters
// infants 0-2 years 4 heads
// todders 2-4 years 4.5 heads
// child 4-6 years 5 heads
// child 6-8 years 5.5 heads
// tween 8-10 years 6 heads
// tween 10-12 years 6.5 heads
// teenager 12-14 years 7 heads
// teenager 14-16 years 7.5 heads
// teenager 16-18 8 heads
// adult 18+ years 8.5 heads


// types of characters
// infant 0-2 years 4 heads
// child - toddler 2-6 years 5 heads
// child - tween 6-10 years 6 heads
// teenager 10-14 years 7 heads
// adult 14+ years 8 heads
