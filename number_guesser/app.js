let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('#message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game over! you lost, correct number was ${winningNum}`);
    } else {
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is incorrect, ${guessesLeft} guesses left.`, 'red');
    }
  }
});

function gameOver(won, msg) {
  const color = won ? 'green' : 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className= 'play-again';
}

function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg;
}

function getRandomNum(min, max) {
  const num = Math.floor(Math.random()*(max - min + 1) + min);
  console.log(`random num: ${num}`);

  return num;
}
