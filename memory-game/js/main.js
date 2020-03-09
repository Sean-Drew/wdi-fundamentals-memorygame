let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];

let cardsInPlay = [];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png"); // this says, the attribute of the new image generated above, will be an image, sourced from the local images folder, and the specific image will be back.png
		cardElement.setAttribute("data-id", i); // this says the data id, the name of the card, will be the specific card currently in play / being looped.
		cardElement.addEventListener("click", flipCard); // this adds an event listener so when cardElement is clicked, flipCard function will execute
		document.getElementById("game-board").appendChild(cardElement);
	}
};

function checkForMatch() {
	this.setAttribute("src", cards[cardId].cardImage); // cardID is not defined, error. line 37 + 51. I cannot move past this, instructions unclear, need to resolve remainder of pre-work. If time permits, resolve w/ assistance at a later date.
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
};

function flipCard() {
	let cardID = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardID].rank); 
	console.log("User flipped" + " " + cards[cardID].rank);
	console.log(cards[cardID].suit); 
	console.log(cards[cardID].cardImage); 
	checkForMatch();
};

createBoard();

