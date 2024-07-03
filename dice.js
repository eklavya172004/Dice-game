'use strict';
const rolldice = document.querySelector('.btn--roll');
const image = document.querySelector('.dice');
const current = document.querySelector('.current');
const ShowCurrentScore = document.querySelectorAll('.current-score');
const CurrentPLayer = document.querySelectorAll('.player');
const hold = document.querySelector('.btn--hold');
const displayScore = document.querySelectorAll('.score');
const NewGame = document.querySelector('.btn--new');

let currentscore = 0;
image.classList.add('hidden');

function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 6 + 1);

  image.src = `dice-${randomNumber}.png`;
  image.classList.remove('hidden');
  if (randomNumber === 1) {
    switchPlayer();
  } else {
    currentscore += randomNumber;
    for (let i = 0; i < ShowCurrentScore.length; i++) {
      if (CurrentPLayer[i].classList.contains('player--active')) {
        ShowCurrentScore[i].textContent = currentscore;
      }
    }
  }
}

hold.addEventListener('click', function () {
  for (let i = 0; i < displayScore.length; i++) {
    if (CurrentPLayer[i].classList.contains('player--active')) {
      let numberCS = Number(displayScore[i].textContent);
      numberCS += currentscore;
      displayScore[i].textContent = numberCS;
      currentscore = 0;

      if (numberCS > 99) {
        displayScore[i].textContent = `You Won🎉!! with Score more than 100`;
        displayScore[i].style.fontSize = '3.5rem';
      }
    }
  }
});

function switchPlayer() {
  for (let i = 0; i < CurrentPLayer.length; i++) {
    if (CurrentPLayer[i].classList.contains('player--active')) {
      CurrentPLayer[i].classList.remove('player--active');
      ShowCurrentScore[i].textContent = 0;
    } else {
      CurrentPLayer[i].classList.add('player--active');
    }
  }
  currentscore = 0;
}

rolldice.addEventListener('click', function () {
  randomNumber();
});

NewGame.addEventListener('click', function () {
  for (let i = 0; i < ShowCurrentScore.length; i++) {
    ShowCurrentScore.textContent = '';
    displayScore[i].textContent = '0';
  }
  image.classList.add('hidden');
  switchPlayer();
});
