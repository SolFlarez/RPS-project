const getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const round = (playerChoice, computerChoice) => {
  switch (playerChoice.toLowerCase()) {
    case "rock":
      if (computerChoice === "Rock") {
        return "It's a tie!";
      } else if (computerChoice === "Paper") {
        return "You lose! Paper beats rock.";
      } else {
        return "You win! Rock beats scissors.";
      }
      break;
    case "paper":
      if (computerChoice === "Paper") {
        return "It's a tie!";
      } else if (computerChoice === "Scissors") {
        return "You lose! Scissors beats paper.";
      } else {
        return "You win! Paper beats rock.";
      }
      break;
    case "scissors":
      if (computerChoice === "Paper") {
        return "You win! Scissors beats paper.";
      } else if (computerChoice === "Scissors") {
        return "It's a tie!";
      } else {
        return "You lose! Rock beats scissors.";
      }
      break;
  }
};

let wins = [
  "You win! Rock beats scissors.",
  "You win! Paper beats rock.",
  "You win! Scissors beats paper.",
];
let losses = [
  "You lose! Paper beats rock.",
  "You lose! Scissors beats paper.",
  "You lose! Rock beats scissors.",
];

const bodyDiv = document.querySelector("body");
const buttonContainer = document.querySelector("body > div.button-container");
const scoreContainer = document.querySelector("body > div.score-container");

buttonContainer.style.display = "flex";
scoreContainer.style.display = "flex";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const allButtons = document.querySelectorAll(".button");

const playerScoreResultDiv = document.querySelector(".player-score-result");
const computerScoreResultDiv = document.querySelector(".cpu-score-result");
const textResultDiv = document.querySelector(".text-result");
const vsDiv = document.querySelector("p");

textResultDiv.style.fontSize = "25px";
playerScoreResultDiv.style.fontSize = "25px";
computerScoreResultDiv.style.fontSize = "25px";
computerScoreResultDiv.style.paddingLeft = "25px";

textResultDiv.style.paddingTop = "25px";

let playerScoreCount = 0;
let cpuScoreCount = 0;

const playerWinText = "Victory!!! You have won the game!";
const cpuWinText = "Gamer Over! The computer wins!";

const onButtonClick = allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = round(button.id, getComputerChoice());
    if (wins.includes(result)) {
      playerScoreCount++;
    } else if (losses.includes(result)) {
      cpuScoreCount++;
    }
    textResultDiv.textContent = result;
    playerScoreResultDiv.textContent = `Your score: ${playerScoreCount}`;
    computerScoreResultDiv.textContent = `Computer's score: ${cpuScoreCount}`;
    if (playerScoreCount === 5) {
      playerScoreCount = 0;
      cpuScoreCount = 0;
      return (textResultDiv.textContent = playerWinText);
    } else if (cpuScoreCount === 5) {
      playerScoreCount = 0;
      cpuScoreCount = 0;
      return (textResultDiv.textContent = cpuWinText);
    }
  });
});
