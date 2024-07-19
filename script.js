function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"]
    return arr[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
    return prompt("Enter your choice: ").toLowerCase()
}

function game(){
    while (true) {
        let humanChoice = getHumanChoice()
        if (humanChoice == "exit"){
            break
        }
        let computerChoice = getComputerChoice()
        if((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "paper")){
            alert("You win!")
        }
        else{
            alert("You lose!")
        }
    }
}

game()