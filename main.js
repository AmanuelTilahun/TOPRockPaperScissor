function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else if (randomNumber === 3) {
        return "Scissor";
    }
    else
        return "something's wrong";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "No one wins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore += 1;
        return "You win, rock beats scissor";
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore += 1;
        return "You win, scissor beats paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win, paper beats rock";
    }
    else {
        computerScore += 1;
        return "You lose," + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let computerChoice;
    for (i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        const playerChoice = prompt("Choose Rock, Paper, or Scissor", " ");
        playRound(playerChoice, computerChoice);
        console.log("player choice:" + playerChoice + "\n computer choice:" + computerChoice + "\n your score: " + playerScore + "\n copmuter score: " + computerScore);
    }
    return (playerScore > computerScore) ? "You win, score: " + playerScore : "You lose, score: " + computerScore;
}

game();
console.log(game());

