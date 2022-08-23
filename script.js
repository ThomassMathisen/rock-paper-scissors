function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()* 3);
if (randomChoice === 0) {
   return "ROCK"
} else if (randomChoice === 1) {
    return "PAPER"
} else {
    return "SCISSORS"
}
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") 
    ) { playerScore += 1;
        console.log("You win!")
        }
    else if (playerSelection === computerSelection) 
      { console.log("It's a tie!")
    } 
    else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) { computerScore += 1;
        console.log("Computer wins!")
    }
}

function game() {
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt().toUpperCase()
    const computerSelection = getComputerChoice()
    playRound(playerSelection,computerSelection)
    }
if (computerScore > playerScore) {
    console.log("Computer wins best of 5!")
}
else if (computerScore < playerScore)
    {
    console.log("You win best of 5!")
}
}
game()