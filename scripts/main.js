function computerPlay() {
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

function game() {
    // Determines the winner of N rounds between the user and the computer. 
    // Prompts the user to select the number of rounds to play.
    // For N rounds, asks the user fot its play, calculates the computer play
    // and calls the playRound() function to determine the winner.
    // After N rounds determines the winner. 

}