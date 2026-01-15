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


function Character(age, sex, head, limb, name) {
    // age is a number, 0 or greater
    this.age = age;
    // sex is a boolean, true for male, false for female
    this.sex = sex;
    // head is boolean, or a number between 0 and 1, used for calculating measurements
    this.head = head;
    // limb is a boolean, or a number between 0 and 1, used for calculating measurements
    this.limb = limb;
    // name is a string, and is optional, use "" if there is no name
    this.name = name;
    this.sexCode = function() {
        if (this.sex === true) {
            return "M";
        } else {
            return "F";
        }
    }
    // calculate life stage from age
    this.lifeStage = function() {
        // should return a number between 1 and 5
        // (1) infant, (2) child, (3) tween, (4) teen, (5) adult
        let lifeStage = this.age + 1;
        if (lifeStage > 16) {
            lifeStage = 16;
        }
        lifeStage = 4 * lifeStage / 15;
        lifeStage = Math.ceil(lifeStage);
        return lifeStage - 1;
    }
    this.lifeStage2 = function() {
        let lifeStage = this.lifeStage()
        if (lifeStage > 3) {
            lifeStage = 3;
        }
        return lifeStage;
    }
    this.headHeightRatio = function() {
        let lifeStage = this.lifeStage();
        let headHeightRatio = lifeStage + 4;
        // adjust for height variation in teenagers and adults
        if (lifeStage > 3 & this.limb === false) {
            // adult only
            headHeightRatio = headHeightRatio - 1;
        }
        return headHeightRatio;
    }
    this.headHeight = function() {
        let headHeight = this.lifeStage2() + 5;
        // adjust for height varation in teens and adults, caused by sex differences
        let lifeStage = this.lifeStage();
        if (lifeStage > 3) {
            // adult only
            if (this.sex === true) {
                headHeight = headHeight + 1;
            }
            if (this.head === true) {
                headHeight = headHeight + 1;
            }
        }
        return headHeight;
    }
    this.characterHeight = function() {
        return this.headHeight() * this.headHeightRatio();
    }
}

function characters() {
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
                    let character = new Character(age, sex, headHeight, limbLength, "");
                    console.log(character);
                    console.log(character.sexCode(), character.age);
                    console.log("Life Stage 1", character.lifeStage());
                    console.log("Life Stage 2", character.lifeStage2());
                    console.log("Head to Height Ratio", character.headHeightRatio());
                    console.log("Head Height", character.headHeight());
                    console.log("Character Height", character.characterHeight());

                    // console.log("Life Stage", character.lifeStage(), character.lifeStage2());
                    // console.log("Ratio", character.headHeightRatio());
                    // console.log("Head Height", character.headHeight());
                    // console.log("Character Height", character.characterHeight());
                }
            }

        }
    }

}

characters();


// const age1 = 1;
// console.log(new Character(age1, true, true, true, ""));
// console.log(new Character(age1, true, false, true, ""));
// console.log(new Character(age1, true, false, false, ""));
// console.log(new Character(age1, true, true, false, ""));

// console.log(new Character(age1, false, true, true, ""));
// console.log(new Character(age1, false, false, true, ""));
// console.log(new Character(age1, false, false, false, ""));
// console.log(new Character(age1, false, true, false, ""));

// const age2 = 5;
// console.log(new Character(age2, true, true, true, ""));
// console.log(new Character(age2, true, false, true, ""));
// console.log(new Character(age2, true, false, false, ""));
// console.log(new Character(age2, true, true, false, ""));

// console.log(new Character(age2, false, true, true, ""));
// console.log(new Character(age2, false, false, true, ""));
// console.log(new Character(age2, false, false, false, ""));
// console.log(new Character(age2, false, true, false, ""));


// const age3 = 9;
// console.log(new Character(age3, true, true, true, ""));
// console.log(new Character(age3, true, false, true, ""));
// console.log(new Character(age3, true, false, false, ""));
// console.log(new Character(age3, true, true, false, ""));

// console.log(new Character(age3, false, true, true, ""));
// console.log(new Character(age3, false, false, true, ""));
// console.log(new Character(age3, false, false, false, ""));
// console.log(new Character(age3, false, true, false, ""));


// const age4 = 13;
// console.log(new Character(age4, true, true, true, ""));
// console.log(new Character(age4, true, false, true, ""));
// console.log(new Character(age4, true, false, false, ""));
// console.log(new Character(age4, true, true, false, ""));

// console.log(new Character(age4, false, true, true, ""));
// console.log(new Character(age4, false, false, true, ""));
// console.log(new Character(age4, false, false, false, ""));
// console.log(new Character(age4, false, true, false, ""));


// const age5 = 17;
// console.log(new Character(age5, true, true, true, ""));
// console.log(new Character(age5, true, false, true, ""));
// console.log(new Character(age5, true, false, false, ""));
// console.log(new Character(age5, true, true, false, ""));

// console.log(new Character(age5, false, true, true, ""));
// console.log(new Character(age5, false, false, true, ""));
// console.log(new Character(age5, false, false, false, ""));
// console.log(new Character(age5, false, true, false, ""));




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
