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

  // checkbox-label에 새로운 클래스를 추가하거나 제거
  const checkboxLabel = document.getElementById("startlaundry");
  if (checkboxLabel) {
    checkboxLabel.classList.toggle("washing");
  }
});

/*세탁타입 선택*/
const buttons = document.querySelectorAll(".modeselect button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 모든 버튼의 'button-clicked' 클래스를 제거
    buttons.forEach((btn) => {
      btn.classList.remove("button-clicked");
    });

    // 클릭된 버튼에만 'button-clicked' 클래스를 추가
    event.target.classList.add("button-clicked");
  });
});
/*세탁타입 선택 end*/

/*탈수타입 선택*/
const buttons2 = document.querySelectorAll(".windselect button");

buttons2.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 모든 버튼의 'button-clicked' 클래스를 제거
    buttons2.forEach((btn) => {
      btn.classList.remove("button-clicked");
    });

    // 클릭된 버튼에만 'button-clicked' 클래스를 추가
    event.target.classList.add("button-clicked");
  });
});
/*탈수타입 선택 end*/
