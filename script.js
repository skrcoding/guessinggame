//enabling strict mode
'use strict';

//pure functions for reusable code.

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const chooseStyle = function (element, property, value) {
  return (document.querySelector(element).style[property] = value);
};

const randomNumberGenerator = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let secretNumber = randomNumberGenerator(1, 20);
console.log(secretNumber);

let score = 20;
let highscore = 0;
let checkButton = document.querySelector('.check');
let scoreField = document.querySelector('.score');
let highScoreField = document.querySelector('.highscore');
let message = document.querySelector('.message');
let numberField = document.querySelector('.number');
let resetButton = document.querySelector('.again');

checkButton.addEventListener('click', () => {
  const guessBox = Number(document.querySelector('.guess').value);
  if (!guessBox || guessBox > 20) {
    displayMessage('Invalid number!');
  } else if (guessBox === secretNumber) {
    displayMessage('Correct number!');
    chooseStyle('body', 'backgroundColor', 'green');
    chooseStyle('.number', 'width', '30rem');
    numberField.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highScoreField.textContent = highscore;
    }
  } else if (guessBox !== secretNumber && score > 1) {
    message.textContent = guessBox > secretNumber ? 'Too high!' : 'Too low!';
    score--;
    scoreField.textContent = score;
  } else {
    displayMessage('You lost the game!');
    scoreField.textContent = 0;
  }
});

resetButton.addEventListener('click', () => {
  secretNumber = randomNumberGenerator(1, 20);
  score = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  numberField.textContent = '?';
  chooseStyle('body', 'backgroundColor', '#222');
  chooseStyle('.number', 'width', '15rem');
  scoreField.textContent = score;
});
