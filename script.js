const newGameDisplay = document.getElementById("new-game-display")
const gameplayScreen = document.getElementById("gameplay-screen")
const gameControls = document.getElementById("game-controls")
const gameBtn = document.getElementById("game-btn")

const playerSelection = document.getElementById("player-selection")
const computerSelection = document.getElementById("computer-selection")

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

const participants = ["player", "computer"]

const computerSelector = ["✊", "✋", "✌"]

const winnerAnnouncement = document.getElementById("winner-announcement")

const youLose = "You lose! Try again."
const youWon = "Nice game, you won!"

let gameOn = false

let playerScore = document.getElementById("player-score")
let computerScore =document.getElementById("computer-score")

let playerCurrentScore = 0
let computerCurrentScore = 0

let winner = undefined


gameplayScreen.style.display = "none"
gameControls.style.display = "none"
winnerAnnouncement.style.display = "none"

gameBtn.addEventListener("click", function(){
    if (gameOn === false){
        renderGame()
    } else{
        restartGame()
    }  
})

function renderGame () {
    gameplayScreen.style.display = ""
    gameControls.style.display = ""
    newGameDisplay.style.display = "none"
    gameOn = true
    gameBtn.innerHTML = "Restart Game"
    reset()
}

function restartGame () {
    if (gameOn === true) {
    gameplayScreen.style.display = "none"
    gameControls.style.display = "none"
    newGameDisplay.style.display = ""
    gameBtn.innerHTML = "Start Game"
    }
    gameOn = false
    reset()   
}

rockBtn.addEventListener("click", function() {
    makeComputerSelection()
    playerSelection.innerHTML = rockBtn.innerHTML
    addScore()
    decideWinner()
    disableControls()
    displayWinner ()
    }
)

paperBtn.addEventListener("click", function() {
    makeComputerSelection()
    playerSelection.innerHTML = paperBtn.innerHTML
    addScore()
    decideWinner()
    disableControls()
    displayWinner ()
    }
)

scissorsBtn.addEventListener("click", function() {
    makeComputerSelection()
    playerSelection.innerHTML = scissorsBtn.innerHTML
    addScore()
    decideWinner()
    disableControls()
    displayWinner ()
    }
)

function makeComputerSelection () { let randomNum = Math.floor (Math.random () * computerSelector.length)
   if (randomNum < 1) {
   computerSelection.innerHTML = computerSelector[0]
    } 
   else if (randomNum < 2)
   computerSelection.innerHTML = computerSelector[1]
    else {
   computerSelection.innerHTML = computerSelector[2]
    }  
}

function addScore () {
    if (playerSelection.innerHTML == rockBtn.innerHTML && computerSelection.innerHTML == computerSelector[2]) {
        playerCurrentScore += 1
        playerScore.innerHTML = playerCurrentScore
    } 
    else if (playerSelection.innerHTML == paperBtn.innerHTML && computerSelection.innerHTML == computerSelector[0]) {
        playerCurrentScore += 1
        playerScore.innerHTML = playerCurrentScore
    }
    else if (playerSelection.innerHTML == scissorsBtn.innerHTML && computerSelection.innerHTML == computerSelector[1]) {
        playerCurrentScore += 1
        playerScore.innerHTML = playerCurrentScore
    }
    else if (computerSelection.innerHTML == computerSelector[0] && playerSelection.innerHTML == scissorsBtn.innerHTML) {
        computerCurrentScore += 1
        computerScore.innerHTML = computerCurrentScore
    }
    else if (computerSelection.innerHTML == computerSelector[1] && playerSelection.innerHTML == rockBtn.innerHTML) {
        computerCurrentScore += 1
        computerScore.innerHTML = computerCurrentScore
    }
     else if (computerSelection.innerHTML == computerSelector[2] && playerSelection.innerHTML == paperBtn.innerHTML) {
        computerCurrentScore += 1
        computerScore.innerHTML = computerCurrentScore
    }
}

function decideWinner () {
    if (playerCurrentScore === 5) {
        winner = participants[0]
    } else if (computerCurrentScore === 5) {
        winner = participants[1]
    }
}

function disableControls () {
    if (winner != undefined){
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
    }
}

function reset () {
    playerCurrentScore = 0
    computerCurrentScore = 0
    winner = undefined
    playerScore.innerHTML = playerCurrentScore
    computerScore.innerHTML = computerCurrentScore
    playerSelection.innerHTML = ""
    computerSelection.innerHTML = ""
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
    winnerAnnouncement.style.display = "none"
}

function displayWinner () {
    if (winner != undefined) {
        winnerAnnouncement.style.display = ""
        if (winner === participants[0]) {
            winnerAnnouncement.innerHTML = youWon
        } else {
            winnerAnnouncement.innerHTML = youLose
        }
    }
    else {
        winnerAnnouncement.style.display = "none"
    }
}