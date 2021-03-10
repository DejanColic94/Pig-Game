/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// RNG daje broj 1-6
//var dice = Math.floor(Math.random() * 6) + 1;

// querySelector kao setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' 

// querySelector kao getter
// var x = document.querySelector('#current-0').textContent;

// changing css
document.querySelector('.dice').style.display = 'none';

// button event
document.querySelector('.btn-roll').addEventListener('click',function() {
    // 1. rng
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display 
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

    // 3. update score
    if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
       nextPlayer();
    }
});






// hold button
document.querySelector('.btn-hold').addEventListener('click', function() {

    // add score to global
    scores[activePlayer] += roundScore;
    // display
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    // check win condition
    if(scores[activePlayer] >= 20) {
        document.getElementById('name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
    }else {
        // switch
         nextPlayer();
    }
    
});


// Switch player function
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice for the next players turn
    document.querySelector('.dice').style.display = 'none';
}
















