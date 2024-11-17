let computerScore2 = 0;
let computerScore = 0;
const maxScore = 10;

function play() {
    if (computerScore === maxScore || computerScore2 === maxScore) {
        return; 
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerChoice2 = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (computerChoice2 === computerChoice) {
        result = "It's A Tie!";
        document.getElementById("result3").className = "tie";
    } else if (
        (computerChoice2 === "rock" && computerChoice === "scissors") ||
        (computerChoice2 === "paper" && computerChoice === "rock") ||
        (computerChoice2 === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        document.getElementById("result3").className = "win";
        computerScore2++;
    } else {
        result = "You Lose!";
        document.getElementById("result3").className = "loss";
        computerScore++;
    }

    document.getElementById("result").innerHTML = "|| Computer 2 chose : " + computerChoice2 + " ||";
    document.getElementById("result3").innerHTML = "*** Game Results! : " + result + " ***";
    document.getElementById("result2").innerHTML = "|| Computer 1 chose : " + computerChoice + " ||";

    document.getElementById("user-score").textContent = computerScore2;
    document.getElementById("computer-score").textContent = computerScore;

    if (computerScore2 === maxScore || computerScore === maxScore) {
        endGame(computerScore2 === maxScore); 
    }
}

function endGame(userWins) {
    document.getElementById("result3").textContent = userWins ? "Congratulations! You Won!" : "Sorry, You Lost!";
    document.getElementById("game-over").classList.remove("hidden");
}

function resetScores() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").textContent = computerScore2;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result3").textContent = ""; 
    document.getElementById("game-over").classList.add("hidden");
}