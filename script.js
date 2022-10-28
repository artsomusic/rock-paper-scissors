function getComputerChoice(){ 
 const game = ['Rock','Paper','Scissors']
 return game[Math.floor(Math.random() * game.length)];
} 

function playRound(playerSelection, computerSelection) {
    const lower = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It is a tie!'
    } else if (playerSelection == 'Rock' && computerSelection === 'Scissors') {
        return 'You won! Rock beats Scissors'
    } else if (playerSelection == 'Scissors' && computerSelection === 'Paper') {
        return 'You won! Scissor beats Paper'
    } else if (playerSelection == 'Paper' && computerSelection === 'Rock') {
        return 'You won! Paper beats Rock'
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
    const promptPlayer = prompt('Choose between: Rock, Paper or Scissors')
    const playerSelection = promptPlayer
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    }
}

game()