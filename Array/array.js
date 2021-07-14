//var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

//var solution2 = scores[2];

//alert(solution2 + " bubbles");
/*
var flavors = [
  "vanilla",
  "butterscotch",
  "lavender",
  "chocolate",
  "cookie dough",
];

var flavorOfTheDay = flavors[2];

console.log(flavorOfTheDay);

flavors[3] = "vanilla chocolate chip";

console.log(flavors);

var numFlavors = flavors.length;

console.log(numFlavors);

var products = ["Choo Choo", "Ice Mint", "Cake Batter", "Bubblegum"];

var last = products.length - 1;

var recent = products[last];

console.log(recent);
*/
/*
function makePhrases() {
  var words1 = ["24/7", "multi-tier", "30 000 foot", "B-to-B", "win-win"];
  var words2 = ["emprowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "stategy", "vision"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];

  alert(phrase);
}

makePhrases();
*/
/*
var emptyArray = [];
console.log(emptyArray);

var a = [1, 2, 3];
alert(a[3]);
alert(a[a.length - 1]);
*/

var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

//console.log(scores);

//document.write("Bubble solution #0: " + scores[0]);

//var score = 0;

var number = 0;

while (number < scores.length) {
  document.write(
    `bubbleSolution #` + number + ": " + scores[number] + `</br>`
  );
  number = number + 1;
}

document.write("Bubbles tests: " + scoresLength);
