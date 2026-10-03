const WIN_SCORE = 5;
const CHOICE_NAMES = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const choiceButtons = document.querySelectorAll(".choice");
const resultsDiv = document.querySelector("#results");
const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const winnerDiv = document.querySelector("#winner");
const resetButton = document.querySelector("#reset");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    const humanWins =
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 2 && computerChoice === 1);

    if (humanWins) {
        humanScore++;
        return "You win!";
    }

    computerScore++;
    return "Computer wins!";
}

function updateScore() {
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
}

function checkWinner() {
    if (humanScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
        gameOver = true;
        winnerDiv.textContent =
            humanScore >= WIN_SCORE
                ? "You won the game!"
                : "Computer won the game!";
        choiceButtons.forEach((btn) => (btn.disabled = true));
        resetButton.hidden = false;
    }
}

function handleClick(event) {
    if (gameOver) return;

    const humanChoice = parseInt(event.target.dataset.choice);
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    resultsDiv.textContent = `You chose ${CHOICE_NAMES[humanChoice]}, computer chose ${CHOICE_NAMES[computerChoice]}. ${result}`;
    updateScore();
    checkWinner();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
    resultsDiv.textContent = "";
    winnerDiv.textContent = "";
    resetButton.hidden = true;
    choiceButtons.forEach((btn) => (btn.disabled = false));
}

choiceButtons.forEach((btn) => btn.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);