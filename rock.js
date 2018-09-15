/* JS File for Rock Paper Scissor
Author: Richa Sharma,
Creation Date:  7 September 2018
*/

// Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// Computer Choice function
function getComputerChoices() {
   
   const choices = ['r' , 'p' , 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
}

// Converting into words
function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	//const smallUserWord = "user".fontsize(3) .sup();
	//const smallUserWord = "comp".fontsize(3) .sup();
	result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " . YOU WIN!";

}
// function of win , lost and draw
function lose(userChoice,computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	//const smallUserWord = "user".fontsize(3) .sup();
	//const smallUserWord = "comp".fontsize(3) .sup();
	result_p.innerHTML = convertToWord(userChoice) + " looses " + convertToWord(computerChoice) + " . YOU LOST!";
}

function draw(userChoice,computerChoice) {
	//const smallUserWord = "user".fontsize(3) .sup();
	//const smallUserWord = "comp".fontsize(3) .sup();
	result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + " . IT'S A DRAW!";
}
// Cases using switch statements 
function game(userChoice) {
	const computerChoice = getComputerChoices();
	switch (userChoice + computerChoice) {
		
		case "rs":
		case "pr":
		case "sp":
		 win(userChoice,computerChoice);
		 break;
		
		case "rp":
		case "ps":
		case "sr":
		 lose(userChoice,computerChoice);
		 break;
		
		case "rr":
		case "pp":
		case "ss":
		 draw(userChoice,computerChoice);
		 break;
	}


}
function reset() {
	userScore = 0;
	computerScore = 0;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

}

function main(){
	rock_div.addEventListener('click' , function(){
		game("r");
	})
	paper_div.addEventListener('click' , function(){
		game("p");
	})
	scissors_div.addEventListener('click' , function(){
		game("s");
	})
  
}

main();
