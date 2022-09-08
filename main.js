// 3 buttons (rock, paper, scissors)

const choices = ["rock", "paper", "scissors"]

//something that gets the choice and prints it
function game() {
    playRound();

}




function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
   


    return("blah blah blah")
}


function playerChoice() {
    let input = prompt("Type rock, paper or scissors");
    while(input == null) {
        input = prompt("Type rock, paper or scissors");
    }
    input = input.toLowerCase();
    let check = correctInput(input)
    if(check == true) {
        console.log(input)
    }
    
}


//simultaneously get random computer choice 
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]

}

function correctInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

game();



//compare the two choices which are predefined (what beats what)

//print the result

//loop it so that it's best of 5