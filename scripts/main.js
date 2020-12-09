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

const restartBtn = document.querySelector("#re-start");
restartBtn.addEventListener("click", restart);