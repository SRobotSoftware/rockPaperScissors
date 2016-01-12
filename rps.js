// Lets rewrite some code!
// init vars
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTitleElem = document.getElementById('gameTitle');
var gameTextElem = document.getElementById('gameText');
var gameState = null;

// write functions

// !!!HEY, DON'T FORGET TO REWRITE THE GAME LOGIC TO START WITH
//    USER INPUT INSTEAD OF RUNNING ON ITS OWN!!!!
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

function runGame (newChoice) {

    // Get Computer Choice
    var computerChoice = getCompChoice();
    var playerChoice = getChoice(newChoice);
    gameHistoryElem.innerHTML += "<br />";
    gameHistoryElem.innerText += "Computer: "+computerChoice+" Player: "+playerChoice;


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