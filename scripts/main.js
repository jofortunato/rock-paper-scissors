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