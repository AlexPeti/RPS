const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
playerChoice = event.target.id
playerChoiceDisplay.innerHTML = playerChoice
generateComputerChoice()
getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {

    if (computerChoice === playerChoice) {
        result = "It's a draw"
    }

    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "You win!"
    }

    if (computerChoice === "paper" && playerChoice === "rock") {
        result = "You lose!"
    }

    if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "You win!"
    }

    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "You lose!"
    }

    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "You lose!"
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "You win!"
    }

    
resultDisplay.innerHTML = result
}