let answer;

const inputGuess = document.getElementById("input-guess");
const btnGuess = document.getElementById("btn-guess");
const pResult = document.getElementById("result");
const btnRestart = document.getElementById("btn-restart");

restartGame();

function restartGame() {
  answer = Math.floor(Math.random() * 10) + 1;
  pResult.innerText = "";
  inputGuess.value = "";
  // alert(answer);
}

btnGuess.onclick = () => {
  const guessValue = Number(inputGuess.value);
  if (guessValue > answer) {
    pResult.innerText = "Too much";
  } else if (guessValue < answer) {
    pResult.innerText = "Too low";
  } else {
    pResult.innerText = `The Correct Answer is ${answer}`;
  }

  pResult.className = "animate__animated animate__headShake";
  setTimeout(() => {
    pResult.className = "";
  }, 1000);
};

btnRestart.onclick = () => {
  restartGame();
};

// Arrow function
// const a = (answer) => {
//   answer = Math.floor(Math.random() * 10) + 1;
//   alert(answer);
// };
