function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) return "rock";
    else if (randomNumber === 2) return "paper";
    else if (randomNumber === 3) return "scissor";
    else { return "something's wrong"; }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "No one wins. player score: " + playerScore + " computer score: " + computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore += 1;
        return "You win, rock beats scissor. player score: " + playerScore + " computer score: " + computerScore;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore += 1;
        return "You win, scissor beats paper. player score: " + playerScore + " computer score: " + computerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win, paper beats rock. player score: " + playerScore + " computer score: " + computerScore;
    }
    else {
        computerScore += 1;
        return "You lose, " + computerSelection + " beats " + playerSelection + ". player score: " + playerScore + " computer score: " + computerScore;
    }
}

const body = document.querySelector('#body');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const buttons = document.querySelector('#buttons');

const result = document.createElement('div');
body.appendChild(result);
const finalResult = document.createElement('div');
body.appendChild(finalResult);

const gamesPlayed = document.createElement('div');
body.appendChild(gamesPlayed);

function game() {
    let playerSelection = '';
    let computerChoice = '';
    let numberOfGames = 0;
    buttons.addEventListener('click', (event) => {
        let target = event.target;
        switch (target.id) {
            case 'rock':
                playerSelection = 'rock';
                break;
            case 'paper':
                playerSelection = 'paper';
                break;
            case 'scissor':
                playerSelection = 'scissor';
                break;
        }
        computerChoice = getComputerChoice();
        result.textContent = playRound(playerSelection, computerChoice);
        gamesPlayed.textContent = "number of Games: " + numberOfGames;
        if (playerScore + computerScore === 5) {
            (playerScore > computerScore) ? finalResult.textContent = "final result: You win, score: " + playerScore : finalResult.textContent = "final result: You lose, score: " + computerScore;
            numberOfGames += 1;
            playerScore = 0;
            computerScore = 0;
        }
        else { finalResult.textContent = ''; }
    });

}

game();
