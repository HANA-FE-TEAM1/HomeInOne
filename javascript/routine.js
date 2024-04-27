// 루틴 선택 및 최대 하나의 토글만 허용
document.addEventListener("DOMContentLoaded", function () {
  const initialStates = [
    [true, true, false, true], // 가습기
    [false, false, true, true], // 냉장고
    [false, true, false, false], // 세탁기
    [false, true, false, false], // 에어컨
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
    button.addEventListener("click", function () {
      // 현재 활성화된 버튼의 인덱스를 확인
      const currentlyActiveIndex = localStorage.getItem(
        "activeToggleButtonIndex"
      );

      // 같은 버튼을 다시 클릭하면 비활성화
      if (currentlyActiveIndex === index.toString()) {
        button.classList.remove("active");
        localStorage.removeItem("activeToggleButtonIndex");
      } else {
        // 모든 버튼의 'active' 클래스 제거
        toggleButtons.forEach((btn) => btn.classList.remove("active"));
        // 클릭된 버튼에만 'active' 클래스 추가
        button.classList.add("active");
        // 로컬 스토리지에 활성화된 버튼의 인덱스 저장
        localStorage.setItem("activeToggleButtonIndex", index);
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

      if (localStorage.getItem(`device${modalIndex}_${index}`) === "true") {
        toggleButton.classList.add("active");
      }

      contentDiv.appendChild(textSpan);
      contentDiv.appendChild(toggleButton);
      modalContents[modalIndex].appendChild(contentDiv);
    });
  };

  const toggleDevice = (routineIndex, deviceIndex, modalIndex) => {
    const currentState =
      localStorage.getItem(`device${modalIndex}_${deviceIndex}`) === "true";
    localStorage.setItem(
      `device${modalIndex}_${deviceIndex}`,
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

const toggles = document.querySelectorAll('.toggle-button')

toggles.forEach((toggle) => {
  toggle.onclick = () => {
    console.log('토글 누름');
    // 활성화된 토글 버튼 인덱스를 로컬 스토리지에서 가져옴
    const activeToggleButtonIndex = localStorage.getItem(
      "activeToggleButtonIndex"
    );
    console.log(activeToggleButtonIndex);
    if (activeToggleButtonIndex != null) {
      console.log("지피티이자식");
      // 활성화된 토글 버튼 인덱스가 설정되어 있을 때만 실행
      for (var i = 0; i < 4; i++) {
        localStorage.setItem(
          `power${i}`,
          localStorage.getItem(`device${activeToggleButtonIndex}_${i}`) ===
            "true"
            ? "true"
            : "false"
        );
      }
  
      // 예시로 `power0` ~ `power3`의 값을 콘솔에 출력
      // console.log(power0, power1, power2, power3);
    }
  }
});
