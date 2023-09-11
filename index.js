const getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const getplayerChoice = () => {
  const answers = ["rock", "paper", "scissors"];
  const result = prompt(
    "Please enter 'rock', 'paper', or 'scissors'."
  ).toLowerCase();
  while (!answers.includes(result)) {
    console.log(
      'Invalid input, please choose only "rock", "paper", or "scissors".'
    );
    result = prompt(
      "Please enter 'rock', 'paper', or 'scissors'."
    ).toLowerCase();
  }
  return result;
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
// -play 5 rounds, make 2 arrays one for wins and one for losses. After a round, add a +1 or -1 to tracker
//         const game = () => {
//             let wins = ["You win! Rock beats scissors.", "You win! Paper beats rock.", "You win! Scissors beats paper."]
//             let losses = ["You lose! Paper beats rock.", "You lose! Scissors beats paper.", "You lose! Rock beats scissors."]
//             let tracker = 0
//             for (i = 0; i < 5; i++) {
//                 const result = round(getplayerChoice(), getComputerChoice())
//                 if (result.includes(wins)) {
//                     tracker += 1
//                 } else if (result.includes(losses)) {
//                     tracker += -1
//                 } console.log(result)
//             }
//             if (tracker > 0) {
//                 return 'You win the game!'
//     } else {
//         return "The computer wins!"
//     }
// }

// game()

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

textResultDiv.style.fontSize = "50px";
vsDiv.style.fontSize = "60px";
playerScoreResultDiv.style.fontSize = "50px";
computerScoreResultDiv.style.fontSize = "50px";

let playerScoreCount = 0;
let cpuScoreCount = 0;

const playerWinText = "Victory!!! You have won the game!";
const cpuWinText = "Gamer Over! The computer wins!";

// When a button is clicked we want to
// 1. Play a round determining winner and loser or tie
// 2. update the text result based on the round
// 3. update the score result based on the round

const onButtonClick = allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = round(button.id, getComputerChoice());
    vsDiv.textContent = "VS";
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
