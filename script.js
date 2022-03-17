'use strict'

// Math Function ////////////////////////////////////////////////////////
const secrateNumber = Math.trunc(Math.random() * 20) + 1
console.log(secrateNumber);

// Query selectors //////////////////////////////////////////////////////
const checkBtn = document.querySelector('.check')
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const highScoreElement = document.querySelector('.highscore')
const scoreElement = document.querySelector('.score')
let highScore = 0
let score = 20

// Function /////////////////////////////////////////////////////////////
checkBtn.addEventListener( 'click', function(){

    const guessNumber = guess.value
    console.log(typeof guessNumber);
    
    if(secrateNumber == guessNumber){

      message.textContent = "You won the GAME 🤑🤑🤑"
      number.textContent = secrateNumber

      if(highScore < score){

          highScore = score
          highScoreElement.textContent = highScore
          document.querySelector("body").style.backgroundcolor = "green";
      }

    }

    else if(guessNumber < secrateNumber){

        message.textContent = "Too low 😒😒"
        score-=1
    }

    else{

        score-=1
        message.textContent = "Too high 🤦‍♀️🤦‍♀️"
        scoreElement.textContent = score
    }
})