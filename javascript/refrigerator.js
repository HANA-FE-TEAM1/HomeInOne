/*냉장온도조절*/
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

      text.innerHTML = `${Math.round(progressPercent * 10)}°C`;
    }
  }
};

document.addEventListener("mousemove", rotateKnob);

document.addEventListener("mouseup", () => {
  isRotating = false;
});

// 루틴 선택 및 최대 하나의 토글만 허용
const toggleButton = document.querySelector(".toggle-button");

if (toggleButton) {
  // 클릭 이벤트 핸들러 추가
  toggleButton.addEventListener("click", function () {
    // 토글 버튼의 상태를 변경
    this.classList.toggle("active");
  });
} else {
  console.error('No element with class "toggle-button" found');
}
// 토글 버튼을 선택
const toggleButton2 = document.querySelector(".toggle-button2");

if (toggleButton2) {
  // 클릭 이벤트 핸들러 추가
  toggleButton2.addEventListener("click", function () {
    // 토글 버튼의 상태를 변경
    this.classList.toggle("active");
  });
} else {
  console.error('No element with class "toggle-button" found');
}

// 토글 버튼을 선택
const toggleButton3 = document.querySelector(".toggle-button3");

if (toggleButton3) {
  // 클릭 이벤트 핸들러 추가
  toggleButton3.addEventListener("click", function () {
    // 토글 버튼의 상태를 변경
    this.classList.toggle("active");
  });
} else {
  console.error('No element with class "toggle-button" found');
}
