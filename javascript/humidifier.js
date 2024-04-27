let water = document.querySelector(".water");
let increaseButton = document.querySelector("#decrease"); // 수정된 부분
let decreaseButton = document.querySelector("#increase"); // 수정된 부분
let restHumidityText = document.getElementById("resthumidity-text");

increaseButton.addEventListener("click", () => {
  let currentHeight = parseFloat(getComputedStyle(water, "::before").height);
  if (isNaN(currentHeight)) {
    currentHeight = 0;
  }
  water.style.setProperty(
    "--before-after-height",
    `${currentHeight / 16 + 1}rem`
  );

  // Increase the humidity level and update the text
  let currentHumidity = parseInt(restHumidityText.textContent);
  if (isNaN(currentHumidity)) {
    currentHumidity = 0;
  }
  if (currentHumidity <= 100) {
    // 수정된 부분
    restHumidityText.textContent = `${currentHumidity - 10}%`;
  }
});

decreaseButton.addEventListener("click", () => {
  let currentHeight = parseFloat(getComputedStyle(water, "::before").height);
  if (isNaN(currentHeight)) {
    currentHeight = 0;
  }
  if (currentHeight > 0) {
    water.style.setProperty(
      "--before-after-height",
      `${currentHeight / 16 - 1}rem`
    );
  }

  // Decrease the humidity level and update the text
  let currentHumidity = parseInt(restHumidityText.textContent);
  if (isNaN(currentHumidity)) {
    currentHumidity = 0;
  }
  if (currentHumidity >= 0) {
    // 수정된 부분
    restHumidityText.textContent = `${currentHumidity + 10}%`;
  }
});
//--------------------------------------

// 루틴 선택 및 최대 하나의 토글만 허용
// 토글 버튼을 선택
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
