'use strict';

//Event Listner

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when tehre is no input...!
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }

  //when player wins...!
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent
      //   guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😞 You lost the game!';
      displayMessage('😞 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
