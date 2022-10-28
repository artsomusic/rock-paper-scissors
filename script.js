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

const playerSelection = 'Rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))