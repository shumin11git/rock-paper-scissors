function getComputerChoice() {
   let random = Math.floor(Math.random() * 3);
   return random === 0 ? "Rock"
    : random === 1 ? "Paper"
    : "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) return;
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "scissors") {
        return computer === "rock" ? "You lose! Rock beats scissors."
            : computer === "paper" ? "You win! Scissors beat paper."
            : "It's a draw.";
    } else if (player === "paper") {
        return computer === "rock" ? "You win! Paper beats rock."
            : computer === "scissors" ? "You lose! Scissors beat paper."
            : "It's a draw.";
    } else if (player === "rock") {
        return computer === "scissors" ? "You win! Rock beats scissors."
            : computer === "paper" ? "You lose! Paper beats rock."
            : "It's a draw.";
    } else return "Invalid arguments.";
}

function game() {
    let youWon = 0;
    let computerWon = 0;
    let draws = 0;
    let roundCount = 0;

    while (roundCount < 5) {
        let playerSelection = prompt("Choose rock, paper or scissors. Round number: " + (roundCount));
        let computerSelection = getComputerChoice();
        if (playerSelection === "") return "Didn't get your choice.";
        let result = playRound(playerSelection, computerSelection);
        roundCount++;
        if (roundCount === 5) fifthRound = "\n\n--- Game concluded. Cheers!";
        result[4] === "w" ? youWon++
            : result[4] === "l" ? computerWon++
            : draws++;
            let score = "You won: " + youWon + ", You lost: " + computerWon + ", Draws: " + draws;
        console.log(result + "\n", score + "\n", "Rounds played: " + roundCount);
    }
    
    return "Game concluded. Cheers!";
}

game();