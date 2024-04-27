
var refridgerator = document.getElementById("slide3")
var washingMachine = document.getElementById("slide5")
var plus = document.getElementById("slide4")
const modal = document.getElementById("addDevice-modalWrap");
document.addEventListener("DOMContentLoaded", () => {
  if (!(localStorage.getItem("냉장고")) || !(localStorage.getItem("세탁기"))) {
    plus.style.visibility = "visible";
  }
  if (localStorage.getItem("냉장고")) {
    refridgerator.style.visibility = "visible";
  }
  if (localStorage.getItem("세탁기")) {
    washingMachine.style.visibility = "visible";
  }
  const myModal = document.getElementById("addDevice-myModal");
  const btn = document.getElementById("plus-button");
  const myModalcloseBtn = document.getElementById("addDevice-myModal-closeBtn");
  const modalWrapcloseBtn = document.getElementById(
    "addDevice-modalWrap-closeBtn"
  );

  // 모달을 보여주는 이벤트 핸들러
  btn.onclick = () => {
    modal.style.display = "block";
  };

  // 모달을 닫는 이벤트 핸들러
  modalWrapcloseBtn.onclick = () => {
    modal.style.display = "none";
  };

  // 모달 밖 클릭 시 모달 닫기
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
      myModal.style.display = "none";
    }
  };
});

// Modal을 여는 함수
function openModal(imageSrc) {
  var modal = document.getElementById("addDevice-myModal");
  var modalImg = document.getElementById("img01");
  let deviceName = imageSrc.split("/")[2];
  if (deviceName == "air-conditioner.png") {
    deviceName = "에어컨";
  }
  if (deviceName == "humidifier.png") {
    deviceName = "가습기";
  }
  if (deviceName == "washing-machine.png") {
    deviceName = "세탁기";
  }
  if (deviceName == "refridgerator.png") {
    deviceName = "냉장고";
  }

  if (localStorage.getItem(deviceName)) {
    alert("이미 디바이스가 존재합니다.");
    return;
  }

  document.getElementById("addDevice-deviceName").innerHTML = deviceName;

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// "Yes" 버튼을 클릭했을 때의 동작
function confirmYes() {
  var deviceName = document.getElementById("addDevice-deviceName").innerHTML;
  localStorage.setItem(deviceName, localStorage.getItem(deviceName) + 1);
  if (deviceName == "냉장고") {
    refridgerator.style.visibility = "visible";
  } else if (deviceName == "세탁기") {
    washingMachine.style.visibility = "visible";
  }

  console.log("@@@@");
  closeModal();
  modal.style.display = "none";
}

// "No" 버튼을 클릭했을 때의 동작
function confirmNo() {
  closeModal();
}

function closeModal() {
  var modal = document.getElementById("addDevice-myModal");
  modal.style.display = "none";
}
