function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum <= 0.66) {
        if (randomNum <= 0.33) {
            return "Rock"
        }

        else {
            return "Paper"
        }
    }

    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Choose: Rock, Paper, Scissors")
}




function playGame() {

  let humanScore = 0;
  let computerScore = 0; 

  function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            console.log("Tie. " + humanChoice + " vs " + computerChoice)
        }
        
        else {

            switch (humanChoice.toLowerCase()) {
                case "rock":
                    if (computerChoice == "Paper") {
                        console.log("You lost. Paper beats Rock.")
                        computerScore++;
                        break;
                    }

                    else {
                        console.log("You won. Rock beats Scissors.")
                        humanScore++;
                        break;
                    }
                
                case "paper":
                    if (computerChoice == "Rock") {
                        console.log("You won. Paper beats Rock.")
                        humanScore++;
                        break;
                    }

                    else {
                        console.log("You lost. Scissors beats Paper.")
                        computerScore++;
                        break;
                    }

                case "scissors":
                    if (computerChoice == "Rock") {
                        console.log("You lost. Rock beats Scissors.")
                        computerScore++;
                        break;
                    }

                    else {
                        console.log("You won. Scissors beats Paper.")
                        humanScore++;
                        break;
                    }
            }
        }
    }
    
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if (humanScore > computerScore) {
        console.log("Human won. " + humanScore + "-" + computerScore)
    }

    else if (humanScore < computerScore) {
         console.log("Computer won. " + computerScore + "-" + humanScore)
    }

    else {
        console.log("Tie")
    }
}


playGame()