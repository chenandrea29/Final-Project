var breed = prompt("What is your favorite dog breed?\nChoices: pug, husky, bulldog, poodle, corgi, beagle, labrador retriever, golden retriever, german shepherd, pomeranian\n\nMake sure to keep it lowercase.");

// Image Showing Up
if (breed == "pug") {
    document.getElementById("pug").style.display = "block";
} else if (breed == "husky") {
    document.getElementById("husky").style.display = "block";
} else if (breed == "bulldog") {
    document.getElementById("bulldog").style.display = "block";
} else if (breed == "poodle") {
    document.getElementById("poodle").style.display = "block";
} else if (breed == "corgi") {
    document.getElementById("corgi").style.display = "block";
} else if (breed == "beagle") {
    document.getElementById("beagle").style.display = "block";
} else if (breed == "labrador retriever") {
    document.getElementById("labrador-retriever").style.display = "block";
} else if (breed == "golden retriever") {
    document.getElementById("golden-retriever").style.display = "block";
} else if (breed == "german shepherd") {
    document.getElementById("german-shepherd").style.display = "block";
} else if (breed == "pomeranian") {
    document.getElementById("pomeranian").style.display = "block";
} else {
    var breed = prompt("What is your favorite dog breed?\nChoices: pug, husky, bulldog, poodle, corgi, beagle, labrador retriever, golden retriever, german shepherd, pomeranian\n\nMake sure to keep it lowercase.");
}


if (breed == "pug") {
    document.getElementById("pug").style.display = "block";
} else if (breed == "husky") {
    document.getElementById("husky").style.display = "block";
} else if (breed == "bulldog") {
    document.getElementById("bulldog").style.display = "block";
} else if (breed == "poodle") {
    document.getElementById("poodle").style.display = "block";
} else if (breed == "corgi") {
    document.getElementById("corgi").style.display = "block";
} else if (breed == "beagle") {
    document.getElementById("beagle").style.display = "block";
} else if (breed == "labrador retriever") {
    document.getElementById("labrador-retriever").style.display = "block";
} else if (breed == "golden retriever") {
    document.getElementById("golden-retriever").style.display = "block";
} else if (breed == "german shepherd") {
    document.getElementById("german-shepherd").style.display = "block";
} else if (breed == "pomeranian") {
    document.getElementById("pomeranian").style.display = "block";
} else {
    var breed = prompt("What is your favorite dog breed?\nChoices: pug, husky, bulldog, poodle, corgi, beagle, labrador retriever, golden retriever, german shepherd, pomeranian\n\nMake sure to keep it lowercase.");
}


//Happiness Meter
var happyLevel = 0;
var groomTimes = 0;
var walkingTimes = 0;
var playingTimes = 0;
var feedingTimes = 0;
var waterTimes = 0;

document.getElementById("happiness").innerHTML = happyLevel;

function groomDog() {
    if (happyLevel < 100) {
        if (groomTimes < 1) {
            happyLevel += 5;
            document.getElementById("goodGroom").style.display = "block";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        } else {
            happyLevel -= 10;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "block";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        }
        groomTimes ++;
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}

function walkDog() {
    if (happyLevel < 100) {
        if (walkingTimes < 3) {
            happyLevel += 10;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "block";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        } else {
            happyLevel -= 10;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "block";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        }
        walkingTimes += 1;
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}

function playWithDog() {
    if (happyLevel < 100) {
        if (playingTimes < 3) {
            happyLevel += 10;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "block";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        } else {
            happyLevel -= 10;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "block";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        }
        playingTimes += 1;
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}

function feedDog() {
    if (happyLevel < 100) {
        if (feedingTimes < 2) {
            happyLevel += 15;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "block";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        } else {
            happyLevel -= 15;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "block";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        }
        feedingTimes ++;
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}

function giveWaterToDog() {
    if (happyLevel < 100) {
        if (waterTimes < 7) {
            happyLevel += 5;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "block";
            document.getElementById("badWater").style.display = "none";
            document.getElementById("goodLove").style.display = "none";
        } else {
            happyLevel -= 5;
            document.getElementById("goodGroom").style.display = "none";
            document.getElementById("badGroom").style.display = "none";
            document.getElementById("goodWalk").style.display = "none";
            document.getElementById("badWalk").style.display = "none";
            document.getElementById("goodPlay").style.display = "none";
            document.getElementById("badPlay").style.display = "none";
            document.getElementById("goodFeed").style.display = "none";
            document.getElementById("badFeed").style.display = "none";
            document.getElementById("goodWater").style.display = "none";
            document.getElementById("badWater").style.display = "block";
            document.getElementById("goodLove").style.display = "none";
        }
        feedingTimes ++;
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}

function loveDog() {
    if (happyLevel < 100) {
        happyLevel += 10;
        document.getElementById("goodGroom").style.display = "none";
        document.getElementById("badGroom").style.display = "none";
        document.getElementById("goodWalk").style.display = "none";
        document.getElementById("badWalk").style.display = "none";
        document.getElementById("goodPlay").style.display = "none";
        document.getElementById("badPlay").style.display = "none";
        document.getElementById("goodFeed").style.display = "none";
        document.getElementById("badFeed").style.display = "none";
        document.getElementById("goodWater").style.display = "none";
        document.getElementById("badWater").style.display = "none";
        document.getElementById("goodLove").style.display = "block";
        document.getElementById("happiness").innerHTML = happyLevel;
        document.getElementById("superHappy").style.display = "none";
    } else {
        document.getElementById("superHappy").style.display = "block";
    }
}





