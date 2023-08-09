const getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

const round = (playerSelection, computerSelection) => {
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Rock') {
                return "It's a tie!"
            } else if (computerSelection === 'Paper') {
                return "You lose! Paper beats rock."
            } else {
                return "You win! Rock beats scissors."
            }
            break;
        case 'paper':
            if (computerSelection === 'Paper') {
                return "It's a tie!"
            } else if (computerSelection === 'Scissors') {
                return "You lose! Scissors beats paper."
            } else {
                return "You win! Paper beats rock."
            }
            break;
        case 'scissors':
            if (computerSelection === 'Paper') {
                return "You win! Scissors beats paper."
            } else if (computerSelection === 'Scissors') {
                return "It's a tie!"
            } else {
                return "You lose! Rock beats scissors."
            }
            break;
    }
}