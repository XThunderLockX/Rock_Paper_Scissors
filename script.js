let userScore = 0;
let computerScore = 0;
const maxScore = 10;

function play(userChoice) {
    if (userScore === maxScore || computerScore === maxScore) {
        return; 
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "It's A Tie!";
        document.getElementById("result3").className = "tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        document.getElementById("result3").className = "win";
        userScore++;
    } else {
        result = "You Lose!";
        document.getElementById("result3").className = "loss";
        computerScore++;
    }

    document.getElementById("result").innerHTML = "|| You chose : " + userChoice + " ||";
    document.getElementById("result3").innerHTML = "*** Game Results! : " + result + " ***";
    document.getElementById("result2").innerHTML = "|| Computer chose : " + computerChoice + " ||";

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (userScore === maxScore || computerScore === maxScore) {
        endGame(userScore === maxScore); 
    }
}

function endGame(userWins) {
    document.getElementById("result3").textContent = userWins ? "Congratulations! You Won!" : "Sorry, You Lost!";
    document.getElementById("game-over").classList.remove("hidden");
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result3").textContent = ""; 
    document.getElementById("game-over").classList.add("hidden");
}