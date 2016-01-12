// Lets rewrite some code!
// init vars
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTitleElem = document.getElementById('gameTitle');
var gameTextElem = document.getElementById('gameText');
var gameState = null;

// write functions
function sanitize(input) {
    return input.toUpperCase().trim();
}

function getChoice(){
    // Set flag
    var invalidChoice = true;
    // Gather input
    var playerInput = prompt("Rock, Paper, or Scissors?");
    // Clean input
    playerInput = sanitize(playerInput);
    // Check input
    while (invalidChoice) {
        // If clean break while
        if(playerInput === "ROCK" || playerInput === "PAPER" || playerInput === "SCISSORS"){
            invalidChoice = false;
        } else {
            // If dirty regather input and clean to check again
            playerInput = prompt("You said: \""+playerInput+"\". Lets try again: Rock, Paper, or Scissors?");
            playerInput = sanitize(playerInput);
        }
    }
    return playerInput; 
}

function getCompChoice() {
    // Pick at random
    var randomVar = Math.floor(Math.random() * 3) + 1;
    // Convert to game input
    switch (randomVar) {
    case 1:
        return "ROCK";
    break;
    case 2:
        return "PAPER";
    break;
    case 3:
        return "SCISSORS";
    break;
    }
}

function runGame () {

    // Get Computer Choice
    var computerChoice = getCompChoice();
    // Get Player Choice
    var playerChoice = getChoice();


    // COMPUTE GAME
    switch (playerChoice) {
        case 'ROCK':
            if (computerChoice === "ROCK") {
                return "STALEMATE";
            } else if (computerChoice === "PAPER") {
                return "LOSE";
            } else {
                return "WIN";
            }
        break;
        case 'PAPER':
            if (computerChoice === "ROCK") {
                return "WIN";
            } else if (computerChoice === "PAPER") {
                return "STALEMATE";
            } else {
                return "LOSE";
            }
        break;
        case 'SCISSORS':
            if (computerChoice === "ROCK") {
                return "LOSE";
            } else if (computerChoice === "PAPER") {
                return "WIN";
            } else {
                return "STALEMATE";
            }
        break;
    }
}

function playAgain (value) {

    // Check game status
    switch (value) {
        case "WIN":
        alert("You win!");
        break;
        case "LOSE":
        alert("You lose!");
        break;
        case "STALEMATE":
        alert("Stalemate!");
        break;
    }

    // Ask to play again
    var play = confirm("Play Again?");
    if (play) {
        gameState = runGame ();
        playAgain(gameState);
    } else {
        alert("Lets play again soon!");
    }
}

// Run initial instance of game 
// !!!BREAKING FOR NOW TO WORK ON UI!!!
// gameState = runGame ();
// playAgain(gameState);