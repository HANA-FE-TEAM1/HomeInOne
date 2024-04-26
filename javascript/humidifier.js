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

// 루틴 선택 및 최대 하나의 토글만 허용
document.addEventListener("DOMContentLoaded", function () {
  const initialStates = [
    [true, true, true, true], // 가습기
    [true, true, true, true], // 냉장고
    [true, true, true, true], // 세탁기
    [true, true, true, true], // 에어컨
  ];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      // 초기 상태가 설정되지 않았을 경우에만 초기값 설정
      if (localStorage.getItem(`device${i}_${j}`) === null) {
        localStorage.setItem(`device${i}_${j}`, initialStates[i][j]);
      }
    }
  }

  const toggleButtons = document.querySelectorAll(".toggle-button");
  let activeIndex = localStorage.getItem("activeToggleButtonIndex");

  // 페이지 로딩 시 로컬 스토리지에 저장된 활성화된 토글 버튼 상태 복원
  if (activeIndex !== null) {
    toggleButtons[activeIndex].classList.add("active");
  }

  toggleButtons.forEach((button, index) => {
    // 페이지 로딩 시 로컬 스토리지에 저장된 각 버튼의 활성화 상태 복원
    if (localStorage.getItem(`toggleButtonActive${index}`) === "true") {
      button.classList.add("active");
    }

    button.addEventListener("click", function () {
      // 버튼의 활성화 상태를 토글
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        localStorage.setItem(`toggleButtonActive${index}`, "false");
      } else {
        button.classList.add("active");
        localStorage.setItem(`toggleButtonActive${index}`, "true");
      }
    });
  });
});

// 루틴 수정 화면
document.addEventListener("DOMContentLoaded", () => {
  const routineModals = [
    document.getElementById("routineModalWrap1"),
    document.getElementById("routineModalWrap2"),
    document.getElementById("routineModalWrap3"),
    document.getElementById("routineModalWrap4"),
  ];
  const btns = document.querySelectorAll(".modeModifyButton");
  const routineCloseBtns = document.querySelectorAll("#routineCloseBtn");
  const modalContents = document.querySelectorAll("#modalContent");

  const devices = ["가습기", "냉장고", "세탁기", "에어컨"];
  let currentRoutineIndex = 0; // 현재 활성화된 루틴 인덱스

  const loadToggles = (modalIndex) => {
    modalContents[modalIndex].innerHTML = "";
    devices.forEach((device, index) => {
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");

      const textSpan = document.createElement("span");
      textSpan.textContent = device;

      const toggleButton = document.createElement("div");
      toggleButton.classList.add("toggle-button");
      toggleButton.onclick = function () {
        toggleDevice(currentRoutineIndex, index, modalIndex); // 현재 루틴 인덱스, 디바이스 인덱스, 모달 인덱스를 전달
      };

      if (
        localStorage.getItem(`device${currentRoutineIndex}_${index}`) === "true"
      ) {
        toggleButton.classList.add("active");
      }

      contentDiv.appendChild(textSpan);
      contentDiv.appendChild(toggleButton);
      modalContents[modalIndex].appendChild(contentDiv);
    });
  };

  const toggleDevice = (routineIndex, deviceIndex, modalIndex) => {
    const currentState =
      localStorage.getItem(`device${routineIndex}_${deviceIndex}`) === "true";
    localStorage.setItem(
      `device${routineIndex}_${deviceIndex}`,
      `${!currentState}`
    );
    loadToggles(modalIndex);
  };

  // 각 버튼에 대해 이벤트 리스너 추가하고 인덱스 부여
  btns.forEach((btn, index) => {
    btn.setAttribute("data-index", index);
    btn.onclick = () => {
      currentRoutineIndex = parseInt(btn.getAttribute("data-device-index")); // 클릭된 버튼의 인덱스를 현재 루틴 인덱스로 설정
      routineModals[index].style.display = "block";
      loadToggles(index);
    };
  });
  routineCloseBtns.forEach((btn) => {
    btn.onclick = () => {
      routineModals.forEach((modal) => {
        modal.style.display = "none";
      });
    };
  });
});
