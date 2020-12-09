function getComputerPlay() {
    // Computer play function. 
    // Randomly calculates an integer number between 0 and 2.
    // Uses the random number as the index of an array of strings.
    // Returns element in the random number position, which corresponds to a string:
    // "rock", "paper" or "scissor" - the computer play.

    let possibleOutcomes = ["rock", "paper", "scissors"];
    let playResult = Math.floor(Math.random()*3);
    
    return possibleOutcomes[playResult]
}

function getUserPlay() {
    let validPlay = false;
    let userPlay;

    while(validPlay === false) {
        play = prompt("Select your play - Rock, Paper or Scissors:");
        play = play.toLowerCase();
        play = play.replace(/\s/g, "");

        if (play === "rock" || play === "paper" || play === "scissors") {
            validPlay = true;
        }
        else {
            validPlay = false;
            alert("Your play is invalid.\nValic plays: Rock, Paper or Scissors.");
        }
    }
    return play;
}

function playRound(userPlay, computerPlay) {
    // Given a user play and a computer play of rock, paper, scissors round.
    // Rock beats scissors.
    // Paper beats rock.
    // Scissors beats paper.
    
    if (userPlay === computerPlay) {
        return "draw"
    }
    else if ((userPlay === "rock") && (computerPlay === "scissors")) {
        return "user"
    }
    else if ((userPlay === "paper") && (computerPlay === "rock")) {
        return "user"
    }
    else if ((userPlay === "scissors") && (computerPlay === "paper")) {
        return "user"
    }
    else {
        return "computer"
    }
}

function game() {
    // Determines the winner of N rounds between the user and the computer. 
    // Prompts the user to select the number of rounds to play.
    // For N rounds, asks the user fot its play, calculates the computer play
    // and calls the playRound() function to determine the winner.
    // After N rounds determines the winner. 

    let numberRounds;
    let userScore = 0;
    let computerScore = 0;
    let roundResult;
    let userPlay;
    let computerPlay;
    let result;

    numberRounds = parseInt(prompt("Select the number of Rock Paper Scissors rounds you wish to play:",5));
    numberRounds = isNaN(numberRounds) ? 5 : numberRounds;

    for(let i = 0; i < numberRounds; i++) {
        // getUserPlay() Function to prompt user and standardize the response.
        // For development purpose, let:
        userPlay = getUserPlay();
        computerPlay = getComputerPlay();

        roundResult = playRound(userPlay, computerPlay);

        if (roundResult === "user") {
            userScore++;
        }
        else if (roundResult === "computer") {
            computerScore++;
        }

        alert(`Round ${i+1} result:\n
                User ${userPlay} vs. ${computerPlay} Computer \n
                User ${userScore} : ${computerScore} Computer`)
    }

    if (userScore > computerScore) {
        result = "user";
        alert("You won!");
    }
    else if (computerScore > userScore) {
        result = "computer";
        alert("Oh No! The computer won this time.");
    }

    else {
        result = "draw";
        alert("It's a draw!");
    }

}

function playRoundUI(event) {

    if (event.target && event.target.matches(".play-option")) {

        let userScoreElement = document.querySelector("#user-score");
        let userScore = parseInt(userScoreElement.textContent);
        let computerScoreElement = document.querySelector("#computer-score");
        let computerScore = parseInt(computerScoreElement.textContent);
        let gameOver;

        if (userScore === 5 || computerScore === 5) {
            restart();
        }

        let userPlay = event.target.value;
        let computerPlay = getComputerPlay();

        roundResult = playRound(userPlay, computerPlay);

        printRoundResult(roundResult, userPlay, computerPlay);

        if (roundResult !== "draw") {
            gameOver = updateGameResult(roundResult, userScoreElement, computerScoreElement);
            console.log(gameOver);

            if (gameOver.isGameOver === true) {
                printGameOver(gameOver.gameWinner);
            }
        }
    }
}

function printRoundResult(winner, userPlay, computerPlay) {
    let roundWinnerBoard = document.querySelector("#round-winner");
    let roundDescription = document.querySelector("#round-description");

    if (winner === "user") {
        roundWinnerBoard.textContent = "User Won!";
        roundDescription.textContent = `${capitalize(userPlay)} beats ${capitalize(computerPlay)}`;
    }
    else if (winner === "computer") {
        roundWinnerBoard.textContent = "Computer Won!";
        roundDescription.textContent = `${capitalize(computerPlay)} beats ${capitalize(userPlay)}`;
    }
    else {
        roundWinnerBoard.textContent = "Draw"
        roundDescription.textContent = " ";
    }
}

function updateGameResult(roundWinner, userScoreElement, computerScoreElement) {

    if (roundWinner === "user") {
        userScoreElement.textContent = parseInt(userScoreElement.textContent) + 1;
        return parseInt(userScoreElement.textContent) === 5 ?
                {isGameOver: true, gameWinner: "user"} : {isGameOver: false, gameWinner: ""}
    }
    else if (roundWinner === "computer"){
        computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        return parseInt(computerScoreElement.textContent) === 5 ? 
                {isGameOver: true, gameWinner: "computer"} : {isGameOver: false, gameWinner: ""}
    }
}

function printGameOver(gameWinner) {
    let gameOverElement = document.querySelector("#game-over");

    if (gameWinner === "user") {
        gameOverElement.textContent = "You Won! Well done!";
    }
    else {
        gameOverElement.textContent = "Bad luck! The Computer Won!";
    }
}

function restart() {
    let userScoreElement = document.querySelector("#user-score");
    userScoreElement.textContent = "0";

    let computerScoreElement = document.querySelector("#computer-score");
    computerScoreElement.textContent = "0";

    let gameOverElement = document.querySelector("#game-over");
    gameOverElement.textContent = "";

    let roundWinnerBoard = document.querySelector("#round-winner");
    roundWinnerBoard.textContent = "";

    let roundDescription = document.querySelector("#round-description");
    roundDescription.textContent = "";
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const userBtnsDiv = document.querySelector("#user-options");
userBtnsDiv.addEventListener("click", playRoundUI);