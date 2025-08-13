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

function playRound(humanChoice, computerChoice) {
    finalResult.textContent = ''
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        roundResultDisplay.textContent = "Tie. " + humanChoice + " vs " + computerChoice
        }
    
    else {

        switch (humanChoice.toLowerCase()) {
            case "rock":
                if (computerChoice == "Paper") {
                    roundResultDisplay.textContent = "You lost. Paper beats Rock."
                    computerScore++;
                    break;
                }

                else {
                    roundResultDisplay.textContent = "You won. Rock beats Scissors."
                    humanScore++;
                    break;
                }
            
            case "paper":
                if (computerChoice == "Rock") {
                    roundResultDisplay.textContent = "You won. Paper beats Rock."
                    humanScore++;
                    break;
                }

                else {
                    roundResultDisplay.textContent = "You lost. Scissors beats Paper."
                    computerScore++;
                    break;
                }

            case "scissors":
                if (computerChoice == "Rock") {
                    roundResultDisplay.textContent = "You lost. Rock beats Scissors."
                    computerScore++;
                    break;
                }

                else {
                    roundResultDisplay.textContent = "You won. Scissors beats Paper."
                    humanScore++;
                    break;
                }
        }

        if (computerScore == 5) {
        finalResult.textContent = `computer won ${computerScore} - ${humanScore}`;
        computerScore = 0;
        humanScore = 0;
        }
        else if (humanScore == 5) {
        finalResult.textContent = `Human won ${humanScore} - ${computerScore}`;
        computerScore = 0;
        humanScore = 0;
        }
    } 
}  




let humanScore = 0;
let computerScore = 0; 

let finalResult = document.querySelector('#finalScore')
let roundResultDisplay = document.querySelector('#roundResult');
let scoreDisplay = document.querySelector('#score');



let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice())
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function() {
    playRound('paper', getComputerChoice())
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`
});

let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function() {
    playRound('scissors', getComputerChoice())

});
