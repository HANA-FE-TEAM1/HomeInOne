let knob = document.querySelector(".knob");
let circle = document.getElementById("circle2");
let pointer = document.querySelector(".pointer");
let text = document.querySelector(".text");
let isRotating = false;

document.addEventListener("mousedown", (e) => {
  if (e.target.closest(".knob")) {
    isRotating = true;
  }
});

const rotateKnob = (e) => {
  if (isRotating) {
    let knobX = knob.getBoundingClientRect().left + knob.clientWidth / 2;
    let knobY = knob.getBoundingClientRect().top + knob.clientHeight / 2;

    let deltaX = e.clientX - knobX;
    let deltaY = e.clientY - knobY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = (angleDeg - 135 + 360) % 360;
    // 최소값과 최대값 사이의 각도로 조정
    // rotationAngle = Math.max(Math.min(rotationAngle, MAX_ANGLE), MIN_ANGLE);

    if (rotationAngle <= 270) {
      pointer.style.transform = `rotate(${rotationAngle - 45}deg)`;

      let progressPercent = rotationAngle / 270;

      circle.style.strokeDashoffset = `${880 - 660 * progressPercent}`;

      // 각도를 분으로 변환
      let totalMinutes = Math.round(progressPercent * 120);

      // 분을 시간과 분으로 변환
      let hours = Math.floor(totalMinutes / 60);
      let minutes = totalMinutes % 60;

      // 시간과 분을 00:00 형식으로 표시
      text.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} 분`;
    }
  }
};

document.addEventListener("mousemove", rotateKnob);

document.addEventListener("mouseup", () => {
  isRotating = false;
});

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
});
