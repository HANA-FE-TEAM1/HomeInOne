/*타이머*/
let countdown;
const timerDisplay = document.querySelector("#countdown");
const startButton = document.querySelector("#start");
const timerValueInput = document.querySelector("#timer");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  document.querySelector("#hours").textContent = `${
    hours < 10 ? "0" : ""
  }${hours}`;
  document.querySelector("#minutes").textContent = `${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  document.querySelector("#seconds").textContent = `${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

startButton.addEventListener("click", () => {
  const seconds = parseInt(timerValueInput.value) * 600;
  console.log(timerValueInput.value);
  timer(seconds);
  setTimeout(() => {
    timerValueInput.value = "0"; // 1초 후 timerValueInput 값을 0으로 설정
  }, 1000);
});
