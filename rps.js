// init vars
// Not even using all of these at the moment, might trim down when I rework the UI
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTitleElem = document.getElementById('gameTitle');
var gameTextElem = document.getElementById('gameText');
var gameState = null;

// write functions
// Dunno if this is really necissary anymore, but can't hurt right?
function sanitize(input) {
    return input.toUpperCase().trim();
}

function getChoice(choice){
    // Set flag !!! I also really don't think this is required anymore, since player input is set and the only way to mess
    //              it up would be with console editing tricks, in which case the player is a jerk anyways so who cares
    //              Guess I'll leave it for now though, it's not hurting anything, just bloating up the code
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
    // Convert to game input !!! Could probably rewrite this to just return the number, would trim lines, but make it harder to read
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

// Probably could expand on this to write all of my game state changes to the HTML file, keep it all in one function
function gameWrite(state) {
    gameTextElem.innerText = "You "+state;
}

// This definitely feels like it needs some streamlining, the logic is fine but I think I can move some of the code to other functions
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
        // I know there's a better way to do this but this works for now
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-danger");
        gameTitlePanelElem.classList.add("panel-success");
    } else {
        gameWrite("LOSE");
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-success");
        gameTitlePanelElem.classList.add("panel-danger");
    }
}