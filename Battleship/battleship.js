var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc; //позиция корабля
var location2 = location1 + 1; //позиция корабля
var location3 = location2 + 1; //позиция корабля
var guess; //значение текущей попытки
var hits = 0; //количество точных попаданий
var guesses = 0; //количество попыток
var isSunk = false; //потоплен ли корабль?

while (isSunk == false) {
  guess = prompt("Ready,fire!(enter a number 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats =
  "You took " +
  guess +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);

/*var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var randomLoc = Math.floor(Math.random() * 5);
alert(randomLoc);
*/
/*var inStock;
var onSale;
if (inStock == true) {
  if (onSale == true) {
    alert("buy, buy, buy!");
  }
}

if (inStock == true && onSale == true) {
  alert("buy, buy, buy!");
}

var price;

if (inStock == true && (onSale == true || price < 60)) {
  alert("buy!");
}

if (inStock) {
  alert("buy");
}*/

/*if (guess < 0 || guess > 6) {
  alert("Please enter a valid cell number");
} else {
  guesses = guesses + 1;
}

if (guess == location1) {
  hits = hits + 1;
} else if (guess == location2) {
  hits = hits + 1;
} else if (guess == location3) {
  hits = hits + 1;
}

if (guess == location1 || guess == location2 || guess == location3) {
  hits = hits + 1;
}*/

/*if (hits == 3) {
  isSunk = true;
  alert("You sank my battleship!");
}*/
