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

function game(resultsArray) {
    let computerWin = 0;
    let draws = 0;
    let youWin = 0;
    for (let result of resultsArray) {
        result.includes("win") ? youWin++
            : result.includes("lose") ? computerWin++
            : draws++;
    }
    return "You won: " + youWin + "\nYou lost: " + computerWin + "\nDraws: " + draws + "\nRounds played: " + roundCount;
}

let choice = document.querySelectorAll("#choices button");
let midButton = document.querySelector("#paper");
let roundResult = document.querySelector("#roundresult");
let gameResult = document.querySelector("#gameresult");
let resultsArray = [];
let wins = 0;
let losses = 0;
let roundCount = 0;

choice.forEach(button => {
    button.addEventListener("click", e => {
        if (resultsArray.length === 0) {;
            gameResult.textContent = "";
        }
        let oneRound = playRound(e.target.id, getComputerChoice());
        roundCount++;
        if (oneRound.includes("win")) wins++;
        else if (oneRound.includes("lose")) losses++;
        roundResult.textContent = oneRound + "\nRounds played: " + roundCount + "\nYou won: " + wins;
        resultsArray.push(oneRound);
        if (wins === 5 || losses === 5) {
            if (losses > wins) gameResult.style = "color: #dc143c";
            else gameResult.style = "color: #7CFC00";
            let oneGame = game(resultsArray);
            let winRate = Math.round(wins / roundCount * 100) / 100;
            gameResult.textContent = oneGame + "\nWin rate: " + winRate;
            resultsArray = [];
            wins = 0;
            roundCount = 0;
            winRate = 0;
            losses = 0;
        }
    });
})

