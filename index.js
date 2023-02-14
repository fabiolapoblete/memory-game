class GameCard {
  constructor(name, imgUrl) {
    this.name = name;
    this.img = imgUrl;
  }
}

const CARDS = [
  new GameCard("fries", "images/fries.png"),
  new GameCard("cheeseburger", "images/cheeseburger.png"),
  new GameCard("hotdog", "images/hotdog.png"),
  new GameCard("ice-cream", "images/ice-cream.png"),
  new GameCard("milkshake", "images/milkshake.png"),
  new GameCard("pizza", "images/pizza.png"),
  new GameCard("fries", "images/fries.png"),
  new GameCard("cheeseburger", "images/cheeseburger.png"),
  new GameCard("hotdog", "images/hotdog.png"),
  new GameCard("ice-cream", "images/ice-cream.png"),
  new GameCard("milkshake", "images/milkshake.png"),
  new GameCard("pizza", "images/pizza.png"),
];

console.log(CARDS);

//Shuffle game cards
CARDS.sort(() => 0.5 - Math.random());

const GRID = document.querySelector("#grid");
function createGameBoard() {
  for (let i = 0; i < CARDS.length; i++) {
    const CARD = document.createElement("img");
    CARD.setAttribute("src", "images/blank.png");
    CARD.setAttribute("card-id", i);

    CARD.addEventListener("click", flipCard);

    GRID.appendChild(CARD);
  }
}

let chosenCards = [];
let chosenCardsId = [];

function flipCard() {
  console.log("card fliped");

  let cardId = this.getAttribute("card-id"); // Gets the "card-id" of the clicked item
  let chosenCard = CARDS[cardId];

  this.setAttribute("src", chosenCard.img);

  chosenCards.push(chosenCard);
  console.log(chosenCards);
  chosenCardsId.push(cardId);

  if (chosenCards.length == 2) {
    setTimeout(checkMatch, 200);
  }
}

const RESULT = document.getElementById("result");
let cardsMatched = [];

function checkMatch() {
  const GAMECARDS = document.querySelectorAll("img");
  let firstCard = chosenCardsId[0];
  let secondCard = chosenCardsId[1];

  if (chosenCards[0].name == chosenCards[1].name) {
    alert("yay");
    GAMECARDS[firstCard].setAttribute("src", "images/white.png");
    GAMECARDS[secondCard].setAttribute("src", "images/white.png");
    GAMECARDS[firstCard].removeEventListener("click", flipCard);
    GAMECARDS[secondCard].removeEventListener("click", flipCard);

    cardsMatched.push(chosenCards);
  } else {
    GAMECARDS[firstCard].setAttribute("src", "images/blank.png");
    GAMECARDS[secondCard].setAttribute("src", "images/blank.png");
    alert("sorry");
  }

  chosenCards = [];
  chosenCardsId = [];

  if (cardsMatched.length == CARDS.length / 2) {
    RESULT.innerHTML = "Congratulations you won!!";
    //Lägg på en overlay som på hangman samt retry btn.
    //ändra bilder
    //styling
  }
}

createGameBoard();
