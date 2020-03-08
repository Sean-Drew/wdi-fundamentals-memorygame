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

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function flipCard(cardID) { // cardID is calling the entire value of the card in the "cards" array. eg: the rank, suit and image.
	cardsInPlay.push(cards[cardID].rank); // adding .rank here stipulates the" rank" only value for this card in the array to be paid attention to is.
	console.log("User flipped" + " " + cards[cardID].rank);
	console.log(cards[cardID].suit); // Only paying attention to the "suit" here
	console.log(cards[cardID].cardImage); // Only paying attention to the "cardImage" here.
	checkForMatch();
}

flipCard(0); // calling flipCard function
flipCard(2); // calling flipCard function

