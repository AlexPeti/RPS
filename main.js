const playerChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result


const playerTally = document.getElementById('player-tally')
const computerTally = document.getElementById('pc-tally')
let playerTallyDisplay = 0
let computerTallyDisplay = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
playerChoice = event.target.id
playerChoiceDisplay.innerHTML = playerChoice
generateComputerChoice()
getResult()
gameEnded()
restartGame()



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
    if (result == "You win!"){
        playerTallyDisplay += 1
    }
    else if (result == "You lose!"){
        computerTallyDisplay += 1
    }
    else {
        playerTallyDisplay +=1
        computerTallyDisplay +=1
    }
    

    

playerTally.innerHTML = ("You:" + playerTallyDisplay)
computerTally.innerHTML = ("Computer:" + computerTallyDisplay)   
resultDisplay.innerHTML = result
}

function gameEnded() {
    if (playerTallyDisplay == 5) {
    alert("Player wins the game!")
}
else if (computerTallyDisplay == 5) {
    alert("Computer wins the game!")
}
}

function restartGame() {
    if (playerTallyDisplay >= 5 || computerTallyDisplay >= 5) {
        playerTallyDisplay = 0
        computerTallyDisplay = 0
        alert("Try again?")
        
    }
}