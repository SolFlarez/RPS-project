const getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

const playerSelection = () => {
    const answers = ['rock', 'paper', 'scissors']
    const result = prompt("Please enter 'rock', 'paper', or 'scissors'.").toLowerCase()
    while (!answers.includes(result)) {
        console.log('Invalid input, please choose only "rock", "paper", or "scissors".')
        result = prompt("Please enter 'rock', 'paper', or 'scissors'.").toLowerCase()
    }
    return result
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
        // -play 5 rounds, make 2 arrays one for wins and one for losses. After a round, add a +1 or -1 to tracker
        const game = () => {
            let wins = ["You win! Rock beats scissors.", "You win! Paper beats rock.", "You win! Scissors beats paper."]
            let losses = ["You lose! Paper beats rock.", "You lose! Scissors beats paper.", "You lose! Rock beats scissors."]
            let tracker = 0
            for (i = 0; i < 5; i++) {
                const result = round(playerSelection(), getComputerChoice())
                if (result.includes(wins)) {
                    tracker += 1
                } else if (result.includes(losses)) {
                    tracker += -1
                } console.log(result)
            } 
            if (tracker > 0) {
                return 'You win the game!'
    } else {
        return "The computer wins!"
    }
}

game()