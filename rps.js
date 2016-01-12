// init vars
// Not even using all of these at the moment, might trim down when I rework the UI
var gameHistoryElem = document.getElementById('gameHistory');
var gameTitlePanelElem = document.getElementById('gameTitlePanel');
var gameTextElem = document.getElementById('gameText');
var gameImageElem = document.getElementById('gameImage');

// write functions
function gameWrite(state) {
    // Writes results to page
    gameTextElem.innerText = "You " + state;
    switch (state) {
        case "WIN":
            // Still probably a better way to do this...
            gameTitlePanelElem.setAttribute("class","panel panel-success");
            break;
        case "STALEMATE":
            gameTitlePanelElem.setAttribute("class","panel panel-warning");
            break;
        case "LOSE":
            gameTitlePanelElem.setAttribute("class","panel panel-danger");
            break;
    }
}

function runGame(playerChoice) {
    // Change the game image to players choice
    gameImageElem.setAttribute("src", "img/" + playerChoice.toLowerCase() + ".png");
    // Get Computer Choice
    // Pick at random
    // 1=rock,2=paper,3=scissors
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    // Allow us to get human readable output
    var computerText = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSORS"
    }
    // Process Player Choice !!! Kinda redundant now? I'll fix later
    var playerChoiceObj = {
        ROCK: 3,
        PAPER: 1,
        SCISSORS: 2
    }
    // Write to the game History so we can see what everyone got
    var newItem = document.createElement("DIV");
    var divInner = document.createTextNode("Computer: " + computerText[computerChoice] + " Player: " + playerChoice);
    newItem.appendChild(divInner);
    gameHistoryElem.insertBefore(newItem, gameHistoryElem.childNodes[0]);
    // Actual game logic
    if (playerChoiceObj[playerChoice] === computerChoice) {
        gameWrite("WIN");
    } else if (playerChoice === computerText[computerChoice]) {
        gameWrite("STALEMATE");
    } else {
        gameWrite("LOSE");
    }
}