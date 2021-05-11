/*var dogName = "Rover";
var dogWeight = 23;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}*/

/*function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

bark("Rover", 23);
bark("Spot", 13);
bark("Spyke", 53);
bark("Lady", 17);
bark("Juno", 20);
bark("Scottie", -1);
bark("Dino", 0, 0);
bark("Fido", "20");
bark("Lady", 10);
bark("Bruno", 21);

function whatShallIWear(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear a t-shirt");
  }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

saveMyProfile("Krissy", 1991, 3.81, false);

function saveMyProfile(name, birthday, GPA, newUser) {
  if (birthday >= 2004) {
    //для родившихся в 2004 году и позже
  }
  //остальной код функции
}

var student = "Krissy";
var year = 1991;
var GPA = 381 / 100;
var status = "existUser";
var isNewUser = status == "newuser";
saveMyProfile(student, year, GPA, isNewUser);
*/

/*function cook(degrees, mode, duration) {
  //код функции
}

cook(425.0, "bake", 45);

cook(350.0, "broil", 10);
*/

/*function doIt(param) {
  param = 2;
}

var test = 1;
doIt(test);
console.log(test);*/

/*var age = 7;
function addOne(x) {
  console.log((x = x + 1));
}

addOne(age);

console.log(age);
*/

/*function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3);

makeTea(4, "Earl Grey", 42, "hey ma!");

function barkAtMoon() {
  console.log("Woooo!");
}

barkAtMoon();*/

/*function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I am not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I am not a refrigerator";
  } else {
    message = "That's a very comfortable temperature";
    //setMode("bake");
    //setTemp(degrees);
  }
  return message;
}

var status = bake(350);*/

/*function calculateArea(r) {
  var area;
  if (radius < 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

var radius = 5.2;

var theArea = calculateArea(radius);

console.log("The area is " + theArea);*/

/*function addScore(level, score) {
  var bonus = level * score * 0.1;
  return score + bonus;
}

var result = addScore(2, 4);

console.log(result);*/

/*var avatar;
var levelThreshold = 1000;

function getScore (points) {
  var score;
  var i = 0;
  while (i < levelThreshold) {
    //Код
    i = i + 1;
  }
  return score;
}*/

var avatar = "generic";
var scill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
  var level = points / pointsPerLevel;

  if (level == 0) {
    return "TeddyBear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorrila";
  }
}

function updatePoints(bonus, newPoints) {
  var i;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
