// playerSelection is case sensitive
// users can input rock, ROCK, Rock or any variation
function playerPlay(){
    
    let playerSelection;
    while (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors' ) {
        playerSelection = prompt('Enter your selection').toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);        
    }    
    return playerSelection;

}

// create function computerPlay
// computerPlay randomly returns 'Rock', 'Paper' or 'Scissors'

function computerPlay(){
    randomNumber =  Math.floor(Math.random() * 3) + 1; 
    switch(randomNumber){
        case 1:
            return 'Rock';
            break;
        case 2: 
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

// create function playRound (playerSelection, computerSelection)
function playRound (playerSelection, computerSelection){
// playRound plays one round
// returns a string that declares the winner
// eg. "You lose! Paper beats Rock"

    console.log('Player Selection: ' + playerSelection);
    const playerPlay = document.querySelector('#player-play');
    playerPlay.textContent = "Player selection: " + playerSelection;

    console.log('Computer Selection: ' + computerSelection);
    const computerPlay = document.querySelector('#computer-play');
    computerPlay.textContent = "Computer selection: " + computerSelection;

    if (playerSelection == computerSelection) {
        return 'It is a tie! ' + playerSelection + ' equals ' + computerSelection; 
     } else {
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection == 'Paper') {
                computerCount++;
                return 'You lose! Paper beats Rock';
            } else if (computerSelection == 'Scissors') {
                playerCount++;
                return 'You win! Rock beats Scissors';   
            }
            break;
        case 'Paper':
            if (computerSelection == 'Scissors') {
                computerCount++;
                return 'You lose! Scissors beats Paper';
            } else if (computerSelection == 'Rock') {
                playerCount++;
                return 'You win! Paper beats Rock';   
            }
            break;      
        case 'Scissors':
            if (computerSelection == 'Rock') {
                computerCount++;
                return 'You lose! Rock beats Scissors';
            } else if (computerSelection == 'Paper') {
                playerCount++
                return 'You win! Scissors beats Paper';   
            }
            break;
        }          
    }
}

// create function Game
// call the playRound function inside, 
function game(){

    // to play a 5 round game that keeps the score
    for(let i = 0; i < 5; i++){ 
       
        result = playRound(playerPlay(), computerPlay());
        console.log(result);
   
    }

    // and report a winner or loser at the end
    if (playerCount > computerCount) {
        matchResult = 'You win the match! ' + playerCount + ' vs ' + computerCount;
    } else if (computerCount > playerCount){
        matchResult = 'You lose the match! ' + playerCount + ' vs ' + computerCount;
    } else if (playerCount == computerCount) { 
        matchResult = 'The match is a tie! ' + playerCount + ' vs ' + computerCount;
    }

    console.log(matchResult);
    return matchResult; 
}

let playerCount = 0;
let computerCount = 0;

// Create three buttons, one for each selection.
// Add an event listener to the buttons that call your playRound function 
// with the correct playerSelection every time a button is clicked.

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    // alert(rock.id);
    roundResult = playRound('Rock', computerPlay());
    showGameInfo();
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    // alert(paper.id);
    roundResult = playRound('Paper', computerPlay());
    showGameInfo();
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    // alert(scissors.id);
    roundResult = playRound('Scissors', computerPlay());
    showGameInfo();
});

// Display the running score, and announce a winner of the game
// once one player reaches 5 points.
function showGameInfo(){

    const matchResultContainer = document.querySelector('#match-result');
    matchResultContainer.textContent = ""; 

    const roundResultContainer = document.querySelector('#round-result');
    roundResultContainer.textContent = "Round result: " + roundResult;

    const playerScoreContainer = document.querySelector('#player-score');
    playerScoreContainer.textContent = "Player score: " + playerCount;

    const computerScoreContainer = document.querySelector('#computer-score');
    computerScoreContainer.textContent = "Computer score: " + computerCount;

    if(computerCount >= 5){
        const matchResultContainer = document.querySelector('#match-result');
        matchResultContainer.textContent = "Computer wins!";
        playerCount = 0;
        computerCount = 0;
    }
    if(playerCount >= 5){
        matchResultContainer.textContent = "Player wins!";
        playerCount = 0;
        computerCount = 0;    
    }
}
