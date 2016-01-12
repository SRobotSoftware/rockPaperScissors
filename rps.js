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

function getChoice(choice){
    // Set flag
    var invalidChoice = true;
    // Clean input
    var playerInput = sanitize(choice);
    // Check input
    while (invalidChoice) {
        // If clean break while
        if(playerInput === "ROCK" || playerInput === "PAPER" || playerInput === "SCISSORS"){
            invalidChoice = false;
        } else {
            // If dirty regather input and clean to check again
            playerInput = prompt("You said: \""+playerInput+"\". Lets try again: Rock, Paper, or Scissors?");
            playerInput = sanitize(choice);
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

function gameWrite(state) {
    gameTextElem.innerText = "You "+state;
}

function runGame (newChoice) {

    // Get Computer Choice
    var computerChoice = getCompChoice();
    // Process Player Choice !!! This should be rewritten probably
    var playerChoice = getChoice(newChoice);
    var playerChoiceObj = {
        ROCK: "SCISSORS",
        PAPER: "ROCK",
        SCISSORS: "PAPER"
    }
    // Write to the game History so we can see what everyone got
    gameHistoryElem.innerHTML += "<br />";
    gameHistoryElem.innerText += "Computer: "+computerChoice+" Player: "+playerChoice;

    if (playerChoiceObj[playerChoice] === computerChoice) {
        gameWrite("WIN");
    } else {
        gameWrite("LOSE");
    }
}