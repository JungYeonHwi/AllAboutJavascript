const maxNum = document.querySelector("#maxnum");
const guessNum = document.querySelector("#guessnum");
const explain = document.querySelector("#explain");
const result = document.querySelector("#result");
const playButton = document.querySelector("#playbutton");

function playClick(e) {
  e.preventDefault();
  const max = parseInt(maxNum.value);
  const guess = parseInt(guessNum.value);

  const randomNum = Math.floor(Math.random() * max);

  explain.innerText = `you choose: ${guess}, the machine choose: ${randomNum}.`;

  if (randomNum === guess) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You lost!";
  }
}

playButton.addEventListener("click", playClick);
