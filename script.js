let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"]
    return arr[Math.floor(Math.random()*3)]
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    // Check if the user canceled the prompt
    if (choice !== null) {
        return choice.toLowerCase();
    } else {
        return null; // or handle this case as needed
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

function playGame(){
    for (round = 0; round < 5; round++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`)
    if (humanScore > computerScore){
        console.log("You Win!")
    }
    else{
        console.log("You Lose!")
    }
}

playGame()