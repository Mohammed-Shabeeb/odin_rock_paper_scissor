let humanScore = 0
let computerScore = 0
let humanChoice
let computerChoice

const scorecard = document.getElementById("score")
const buttons = document.querySelectorAll("button")


function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"]
    return arr[Math.floor(Math.random()*3)]
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }


    scorecard.textContent = `Score:-  You: ${humanScore}    Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            window.alert("You Win the Game!");
        } else {
            window.alert("You Lose the Game!");
        }
        location.reload();
    }
}

function playGame(){
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.value
            computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
        })
        setTimeout(5000);
    })
}

playGame()