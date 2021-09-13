
let playerScore = 0
let compScore = 0

const playerScoreDisp = document.getElementById('playerScoreDisp')
const compScoreDisp = document.getElementById('compScoreDisp')

const playerChoice = document.getElementById('playerChoice')
const compChoice = document.getElementById('compChoice')

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissors')

const popup = document.getElementById('popup')
const winner = document.getElementById('winner')
const resetBtn = document.getElementById('reset')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorBtn.addEventListener('click', () => handleClick('SCISSORS'))
resetBtn.addEventListener('click', () => reset())

playerScoreDisp.textContent = `${playerScore}`
compScoreDisp.textContent = `${compScore}`

function handleClick(choice) {
    if(playerScore == 5 || compScore == 5) {
        return null;
    }
    let computerSel = computerSelect();
    if (choice == 'ROCK' && computerSel == 'SCISSORS' ||
        choice == 'PAPER' && computerSel == 'ROCK' ||
        choice == 'SCISSORS' && computerSel == 'PAPER') {

        playerScore++

    } else if(choice != computerSel) {
        compScore++
    }

    if(playerScore == 5 || compScore == 5) {
        popup.classList.add('active')
        if(playerScore > compScore) {
            winner.textContent = `You won! Good job!`
        } else {
            winner.textContent = `You lost :(`
        }
    }
    
    playerScoreDisp.textContent = `${playerScore}`
    compScoreDisp.textContent = `${compScore}`
    playerChoice.textContent = `${choice}`
    compChoice.textContent = `${computerSel}`


}

function computerSelect() {
    let value = Math.floor(Math.random() * 3)
    if(value == 0) {
        return 'ROCK'
    } else if(value == 1) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}

function reset() {
    playerScore = 0;
    compScore = 0;
    playerScoreDisp.textContent = `${playerScore}`
    compScoreDisp.textContent = `${compScore}`
    playerChoice.textContent = ``
    compChoice.textContent = ``
    popup.classList.remove('active')
}