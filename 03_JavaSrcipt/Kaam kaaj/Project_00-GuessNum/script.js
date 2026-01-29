"use strict";

const messageElement = document.querySelector(".message");
const guessElement = document.querySelector(".guess");
const checkElement = document.querySelector(".check");
const againElement = document.querySelector(".again");
const numberElement = document.querySelector(".number");
const btnElement = document.querySelector(".btn");
const labelScoreElement = document.querySelector(".label-score");
const labelHighScoreElement = document.querySelector(".label-highscore");
const highScoreElement = document.querySelector(".highscore");
const scoreElement = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



checkElement.addEventListener("click", function () {
  const guess = Number(guessElement.value);

  // When there is no number
  if (!guess) {
    messageElement.textContent = "🚫 No Number";
  }
  // When Player wins
  else if (guess === secretNumber) {
    messageElement.textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    numberElement.style.width = "30rem";
    numberElement.textContent = secretNumber;

    if (score > highscore) {
        highscore = score
        highScoreElement.textContent = highscore
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
   if (score > 1) {
      messageElement.textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = "😔 You lost the game!";
      scoreElement.textContent = 0;
    }
  }

//   // When there is too high number
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       messageElement.textContent = "📈 Too High!";
//       score--;
//       scoreElement.textContent = score;
//     } else {
//       messageElement.textContent = "😔 You lost the game!";
//       scoreElement.textContent = 0;
//     }
//   }
//   // When there is too low number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       messageElement.textContent = "📉 Too Low!";
//       score--;
//       scoreElement.textContent = score;
//     } else {
//       messageElement.textContent = "😔 You lost the game!";
//       scoreElement.textContent = 0;
//     }
//   }

});

againElement.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreElement.textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  guessElement.value = "";
  numberElement.textContent = "?";
  messageElement.textContent = "Start guessing...";
  numberElement.style.width = "15rem";
});
