"use strict";
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdScoreButton = document.querySelector(".btn--hold");
const diceImage = document.querySelector(".dice");
const player0Score = document.querySelector("#score--0");
const player1Score = document.querySelector("#score--1");
const player0currentScore = document.querySelector("#current--0");
const player1currentScore = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

player0Score.textContent = 0;
player1Score.textContent = 0;
diceImage.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gamePlaying = true;

const switchPlayer = function () {
  if (gamePlaying) {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
};

const addScore = function () {
  if (gamePlaying) {
    if (activePlayer === 0) {
      player0currentScore.textContent = currentScore;
    } else {
      player1currentScore.textContent = currentScore;
    }
  }
};

const rollDice = function () {
  if (gamePlaying) {
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    if (diceValue !== 1) {
      diceImage.classList.remove("hidden");
      diceImage.src = `dice-${diceValue}.png`;
      currentScore += diceValue;
      addScore();
    } else {
      diceImage.classList.remove("hidden");
      diceImage.src = `dice-${diceValue}.png`;
      switchPlayer();
    }
  }
};

const holdScore = function () {
  if (gamePlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      gamePlaying = false;
      diceImage.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
};

const makeDefault = function () {
  diceImage.classList.add("hidden");
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  player0currentScore.textContent = 0;
  player1currentScore.textContent = 0;
  player0.classList.add("player--active");
  player1.classList.add("player--1");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  activePlayer = 0;
  gamePlaying = true;
};

if (gamePlaying) {
  rollDiceButton.addEventListener("click", rollDice);
  holdScoreButton.addEventListener("click", holdScore);
  newGameButton.addEventListener("click", makeDefault);
} else {
  newGameButton.addEventListener("click", makeDefault);
}

//const arr = [0, 0, 0, 1];
// let sum = 0;
// let val = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   sum += arr[i] * 2 ** val;
//   val++;
// }
const str = "ldkgjdg";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
const m = 998709;
console.log(String(m).length);
str.replace("j", "8");
console.log(str);
