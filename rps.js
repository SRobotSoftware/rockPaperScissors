// init vars
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
            gameTitlePanelElem.setAttribute("class", "panel panel-success");
            break;
        case "STALEMATE":
            gameTitlePanelElem.setAttribute("class", "panel panel-warning");
            break;
        case "LOSE":
            gameTitlePanelElem.setAttribute("class", "panel panel-danger");
            break;
    }
}

function runGame(playerChoiceNum) {
    // Allow us to get human readable output
    var gameNumToStrObj = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSORS"
    }
    // Change the game image to players choice
    gameImageElem.setAttribute("src", "img/" + gameNumToStrObj[playerChoiceNum].toLowerCase() + ".png");
    // Get Computer Choice
    // Pick at random
    // 1=rock,2=paper,3=scissors
    var computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    // Process Player Choice !!! Kinda redundant now? I'll fix later
    var winConditionsObj = {
        1: 3,
        2: 1,
        3: 2
    }
    // Write to the game History so we can see what everyone got
    var newItem = document.createElement("DIV");
    var divInner = document.createTextNode("Computer: " + gameNumToStrObj[computerChoiceNum] + " Player: " + gameNumToStrObj[playerChoiceNum]);
    newItem.appendChild(divInner);
    gameHistoryElem.insertBefore(newItem, gameHistoryElem.childNodes[0]);
    // Actual game logic
    if (winConditionsObj[playerChoiceNum] === computerChoiceNum) {
        gameWrite("WIN");
    } else if (playerChoiceNum === computerChoiceNum) {
        gameWrite("STALEMATE");
    } else {
        gameWrite("LOSE");
    }
}