// init vars
// Not even using all of these at the moment, might trim down when I rework the UI
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTextElem = document.getElementById('gameText');
var gameImageElem = document.getElementById('gameImage');
var gameState = null;

// write functions

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

function gameWrite(state) {
    // Writes results to page
    gameTextElem.innerText = "You " + state;
    if (state === "WIN") {
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-danger");
        gameTitlePanelElem.classList.add("panel-success");
    } else {
        gameTitlePanelElem.classList.remove("panel-primary");
        gameTitlePanelElem.classList.remove("panel-success");
        gameTitlePanelElem.classList.add("panel-danger");
    }
}

function runGame(newChoice) {
    // Change the game image to players choice
    gameImageElem.setAttribute("src", "img/" + newChoice.toLowerCase() + ".png");
    // Get Computer Choice
    var computerChoice = getCompChoice();
    // Process Player Choice !!! Kinda redundant now? I'll fix later !!! This should be rewritten probably maybe numbers?
    var playerChoice = newChoice;
    var playerChoiceObj = {
        ROCK: "SCISSORS",
        PAPER: "ROCK",
        SCISSORS: "PAPER"
    }
    // Write to the game History so we can see what everyone got
    gameHistoryElem.innerHTML += "<br />";
    gameHistoryElem.innerText += "Computer: " + computerChoice + " Player: " + playerChoice;
    // Actual game logic !!! I could probably rewrite this with numbers in the objects to determine a stalemate
    if (playerChoiceObj[playerChoice] === computerChoice) {
        gameWrite("WIN");
    } else {
        gameWrite("LOSE");
    }
}