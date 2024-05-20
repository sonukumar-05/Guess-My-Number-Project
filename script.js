// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'I love my dog';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 45;

// document.querySelector('.guess').value = 76;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.message').textContent = 'I love my dog');
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   'Please enter a number ❓, so no guess!';
    displayMessage('Please enter a number ❓, so no guess!');
  }

  // if the player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number 👍';
    displayMessage('Correct Number 👍');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong

  else if(guess !== secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ?  'Too high! ⚡' : '📉Too low!!';
      displayMessage(guess > secretNumber ?  'Too high! ⚡' : '📉Too low!!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game🔥';
      displayMessage('you lost the game🔥');

      document.querySelector('.score').textContent = 0;
    }
  }







  // // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high! ⚡';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game🔥';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low! ⚡';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game🔥';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }




});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


