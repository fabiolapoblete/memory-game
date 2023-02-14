class GameCard {
  constructor(name, imgUrl) {
    this.name = name;
    this.img = imgUrl;
  }
}

const CARDS = [
  new GameCard("chameleon", "images/chameleon.png"),
  new GameCard("fish", "images/fish.png"),
  new GameCard("koala", "images/koala.png"),
  new GameCard("owl", "images/owl.png"),
  new GameCard("sloth", "images/sloth.png"),
  new GameCard("prawn", "images/prawn.png"),
  new GameCard("chameleon", "images/chameleon.png"),
  new GameCard("fish", "images/fish.png"),
  new GameCard("koala", "images/koala.png"),
  new GameCard("owl", "images/owl.png"),
  new GameCard("sloth", "images/sloth.png"),
  new GameCard("prawn", "images/prawn.png"),
];

console.log(CARDS);

//Shuffle game cards
CARDS.sort(() => 0.5 - Math.random());

const GRID = document.querySelector("#grid");
function createGameBoard() {
  for (let i = 0; i < CARDS.length; i++) {
    const CARD = document.createElement("img");
    CARD.setAttribute("src", "images/blank.jpg");
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
    setTimeout(checkMatch, 2000);
  }
}

const RESULT = document.getElementById("result");
let cardsMatched = [];

function checkMatch() {
  const GAMECARDS = document.querySelectorAll("img");
  let firstCard = chosenCardsId[0];
  let secondCard = chosenCardsId[1];

  if (chosenCards[0].name == chosenCards[1].name) {
    GAMECARDS[firstCard].setAttribute("src", "images/white.png");
    GAMECARDS[secondCard].setAttribute("src", "images/white.png");
    GAMECARDS[firstCard].removeEventListener("click", flipCard);
    GAMECARDS[secondCard].removeEventListener("click", flipCard);

    cardsMatched.push(chosenCards);
  } else {
    GAMECARDS[firstCard].setAttribute("src", "images/blank.jpg");
    GAMECARDS[secondCard].setAttribute("src", "images/blank.jpg");
  }

  chosenCards = [];
  chosenCardsId = [];

  if (cardsMatched.length == CARDS.length / 2) {
    gameWin();
  }
}

function gameWin() {
  document.querySelector(".game-win").classList.add("show");
}

createGameBoard();

let button = document.querySelector("button");

button.addEventListener("click", () => {
  document.querySelector(".game-win").classList.remove("show");
  GRID.innerHTML = "";
  createGameBoard();
});
