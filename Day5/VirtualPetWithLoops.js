let actionCounter = 0;
let validityCheck = ["feed", "water", "play", "sleep", "usePotion", "wash"];

let pet = {
    name: "Bob",
    legs: 2,
    hunger: 50,
    thirst: 50,
    happiness: 50,
    energy: 80,
    hygiene: 50,
}

function gameLoop() {
    console.log(pet);

    if (actionCounter == 5){
        console.log("Good morning! It's a new day!");
       }

    actionCounter = 0;

 if (pet.hunger == 100 || pet.thirst == 100 || pet.happiness == 0 || pet.energy == 0) {
    console.log("Game over");
} else {
    let userChoice = prompt("Would you like to feed, water, play, sleep, usePotion or wash?");

    for (let i = 0; i < validityCheck.length; i++) {
        if (userChoice == validityCheck[i]) {
            actionCounter++;
        }
    }

    if (userChoice == "feed"){
        feed();
    }
    if (userChoice == "water") {
        water();
    }
    if (userChoice == "play") {
        play();
    }
    if (userChoice == "sleep") {
        sleep();
    }
    if (userChoice == "usePotion") {
        usePotion();
    }
    if (userChoice == "wash") {
        wash();
    }
  }
}

function feed(amount) {
    pet.hunger = pet.hunger - amount;
    pet.thirst = pet.thirst + amount;
    pet.energy = pet.energy + amount;
    pet.legs = pet.legs + 1;
    console.log(pet.hunger);
    console.log(pet.thirst);
    console.log(pet.energy);
    console.log(pet.legs);
    if (pet.hunger==100) {
        console.log("Your pet ran away to find food...");
        } else {
            console.log(`Your pet's hunger level is ${pet.hunger}`);
             console.log("Your pet is fuller and more... leggy than before!");
        }
    gameLoop();
}

function water(amount) {
    pet.hunger = pet.hunger + 5
    pet.thirst = pet.thirst + amount
    console.log(pet.hunger);
    console.log(pet.thirst);
    if (pet.thirst==100) {
        console.log("Your pet dried up...");
        } else {
             console.log("Your pet drinks the water and feels less thirsty. It does a happy dance!");
             console.log(`Your pet's thirst level is ${pet.thirst}`);
        }
        gameLoop();
}

function play(amount) {
    pet.happiness = pet.happiness + amount
    pet.hunger = pet.hunger - 5
    pet.energy = pet.energy - 5
    pet.thirst = pet.thirst - 5
    pet.hygiene = pet.hygiene - (amount)
    console.log(pet.happiness);
    console.log(pet.hunger);
    console.log(pet.energy);
    console.log(pet.thirst);
    console.log(pet.hygiene);
    if (pet.happiness==100) {
        console.log("Your pet has reached the height of happiness!");
        } else {
            console.log(`Your pet's happiness level is ${pet.happiness}`);
             console.log("Your pet looks at you hopefully... play time?");
        }
        gameLoop();
}

function sleep(amount) {
    pet.energy = pet.energy + amount
    pet.hunger = pet.hunger - amount
    pet.thirst = pet.thirst - amount
    pet.happiness = pet.happiness - amount
    console.log(pet.happiness);
    console.log(pet.hunger);
    console.log(pet.energy);
    console.log(pet.thirst);
    if (pet.energy-=20) {
        console.log("Your pet is sleepy");
    } else {
        console.log(`Your pet's energy level is ${pet.energy}`);
        console.log("Your pet looks at you expectantly");
    } 
    gameLoop();
}

function usePotion(_amount) {
    pet.legs = pet.legs - 2
    pet.hunger = pet.hunger + 5
    pet.thirst = pet.thirst + 5
    console.log(pet.legs);
    console.log(pet.hunger);
    console.log(pet.thirst);
    console.log(`Your pet now has ${pet.legs} legs`);
    if (pet.legs > 10) {
        console.log("There is such a thing as too many legs...");
    } else {
        console.log(`What a lovely little one ${pet.name} is :)`);
    }
    gameLoop();
}

function wash(amount) {
    pet.hygiene = pet.hygiene + amount
    pet.thirst = pet.thirst + 2
    pet.energy = pet.energy - 2
    console.log(pet.hygiene);
    console.log(pet.thirst);
    console.log(pet.energy);
    console.log("Your pet is sparkling with cleanliness");
    console.log(`Your pet's hygiene level is ${pet.hygiene}`);
    gameLoop();
}

// gameLoop();

feed(10);
water(10);
play(10);
sleep(20);
usePotion(1);
wash(20);
