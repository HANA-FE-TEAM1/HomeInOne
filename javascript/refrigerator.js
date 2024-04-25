/*냉장온도*/
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

/*냉동 온도*/
let knob2 = document.querySelector(".knob2");
let circle2 = document.querySelector(".circle2-");
let pointer2 = document.querySelector(".pointer2");
let text2 = document.querySelector(".text2");
let isRotating2 = false;

document.addEventListener("mousedown", (e) => {
  if (e.target.closest(".knob2")) {
    isRotating2 = true;
  }
});

const rotateKnob2 = (e) => {
  if (isRotating2) {
    let knobX2 = knob2.getBoundingClientRect().left + knob2.clientWidth / 2;
    let knobY2 = knob2.getBoundingClientRect().top + knob2.clientHeight / 2;

    let deltaX2 = e.clientX - knobX2;
    let deltaY2 = e.clientY - knobY2;

    let angleRad2 = Math.atan2(deltaY2, deltaX2);
    let angleDeg2 = (angleRad2 * 180) / Math.PI;

    let rotationAngle2 = (angleDeg2 - 135 + 360) % 360;
    // 최소값과 최대값 사이의 각도로 조정
    // rotationAngle = Math.max(Math.min(rotationAngle, MAX_ANGLE), MIN_ANGLE);

    if (rotationAngle2 <= 270) {
      pointer2.style.transform = `rotate(${rotationAngle2 - 45}deg)`;

      let progressPercent2 = rotationAngle2 / 270;

      circle2.style.strokeDashoffset = `${880 - 660 * progressPercent2}`;

      text2.innerHTML = `${Math.round((progressPercent2 * 100) / 8) + 18}°C`;
    }
  }
};

document.addEventListener("mousemove", rotateKnob2);

document.addEventListener("mouseup", () => {
  isRotating2 = false;
});

/*전원버튼*/
