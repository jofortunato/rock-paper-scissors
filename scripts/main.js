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
    let userPlay = event.target.value;
    let computerPlay = getComputerPlay();

    roundResult = playRound(userPlay, computerPlay);

    if (roundResult === "user") {
        alert(`${userPlay} vs. ${computerPlay}\nUser won`);
    }
    else if (roundResult === "computer") {
        alert(`${userPlay} vs. ${computerPlay}\nComputer won`);
    }


}

const userBtnsDiv = document.querySelector('#user-options');


userBtnsDiv.addEventListener('click', function (e) {
    if (e.target && e.target.matches(".play-option")) {
        playRoundUI(e);
    }
});