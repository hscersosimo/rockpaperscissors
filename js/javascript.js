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
    console.log('Computer Selection: ' + computerSelection);
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
game();

