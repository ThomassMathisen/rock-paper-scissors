function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()* 3);
if (randomChoice == 0) {
   return "rock"
} else if (randomChoice == 1) {
    return "paper"
} else {
    return "scissors"
}
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true    
    })
}

let computerScore = 0
let playerScore = 0
const buttons = document.querySelectorAll("input")

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playerScore += 1
        result = ("You win! " + playerSelection + " beats " + computerSelection +
            "<br><br>Players score: " + playerScore + "<br>Computer score: " + computerScore)
        if (playerScore == 5) {
            result += "<br><br> You won the game!"
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) { 
        result = ("It's a tie! You both chose " + playerSelection  +
            "<br><br>Players score: " + playerScore + "<br>Computer score: " + computerScore)
    } 
    else {
        computerScore += 1
        result = ("You lose! " + computerSelection + " beats " + playerSelection +
            "<br><br>Players score: " + playerScore + "<br>Computer score: " + computerScore)
        if (computerScore == 5) {
            result += "<br><br> You lost the game!"
            disableButtons()
        }
    }

    document.getElementById("result").innerHTML = result
    return 
}


buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.value)
    })
})


// First part of assignment

// function game() {
// for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt().toUpperCase()
//     const computerSelection = getComputerChoice()
//     playRound(playerSelection,computerSelection)
//     }
// if (computerScore > playerScore) {
//     console.log("Computer wins best of 5!")
// }
// else if (computerScore < playerScore)
//     {
//     console.log("You win best of 5!")
// }
// }
// game()