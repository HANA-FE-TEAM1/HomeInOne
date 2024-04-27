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

      text.innerHTML = `${Math.round((progressPercent * 100) / 8) + 18}°C`;
    }
  }
};

document.addEventListener("mousemove", rotateKnob);

document.addEventListener("mouseup", () => {
  isRotating = false;
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

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

[increaseButton, decreaseButton].forEach((button) => {
  button.addEventListener("mousedown", (event) => {
    event.target.classList.add("button-shadow");
  });

  button.addEventListener("mouseup", (event) => {
    event.target.classList.remove("button-shadow");
  });

  button.addEventListener("mouseout", (event) => {
    event.target.classList.remove("button-shadow");
  });
});

/*전원버튼*/
