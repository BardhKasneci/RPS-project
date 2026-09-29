function getComputerChoice() {
    return Math.floor(Math.random()*3); 
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (0 for rock, 1 for paper, 2 for scissors):");
    return parseInt(choice);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {  
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }else if ((humanChoice === 0 && computerChoice === 2) || (humanChoice === 1 && computerChoice === 0) || (humanChoice === 2 && computerChoice === 1)) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}: You chose ${humanChoice}, computer chose ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
}

  console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();