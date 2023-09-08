function getComputerChoice() {
    let rndNumber = Math.floor(Math.random()*3);
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[rndNumber];
}

function getUserChoice() {
    let choice = prompt("Type your choice. Options = [Rock, Paper, Scissor]. Type 'Stop' to exit.");
    return choice;
}

function evaluateWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert("It's a tie. Try again");
        let newUserChoice = getUserChoice();
        evaluateWinner(newUserChoice, computerChoice);
    } else if (computerChoice === "Rock") {
        switch (userChoice) {
            case "Scissor":
                alert(`You loose! ${computerChoice} beats ${userChoice}`);
                break
            case "Paper":
                alert(`You win! ${userChoice} beats ${computerChoice}`);
                break;
            default:
                alert("Please try again");
                break;
        }
    } else if (computerChoice === "Scissor") {
        switch (userChoice) {
            case "Rock":
                alert(`You win! ${userChoice} beats ${computerChoice}`);
                break
            case "Paper":
                alert(`You loose! ${computerChoice} beats ${userChoice}`);
                break;
            default:
                alert("Please try again");
                break;
        }  
    } else if (computerChoice === "Paper") {
        switch (userChoice) {
            case "Scissor":
                alert(`You win! ${userChoice} beats ${computerChoice}`);
                break
            case "Rock":
                alert(`You loose! ${computerChoice} beats ${userChoice}`);
                break;
            default:
                alert("Please try again");
                break;
        }
    } else {
        alert("Make sure you chose one of [Rock, Scissor, Paper].")
    }
}

let restartGame = true;
while (restartGame) {
    let userChoice = getUserChoice();
    if (userChoice == "Stop") {
        restartGame = false;
        break;
    }
    let computerChoice = getComputerChoice();
    evaluateWinner(userChoice, computerChoice);
    alert("Try again");
}