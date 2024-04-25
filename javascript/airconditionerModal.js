/*모달 에어컨*/
window.onload = function () {
  const btn = document.getElementById("imgModalAircon");
  const modal = document.getElementById("modalAircon");
  // const section = document.getElementById("section");
  const closeBtn = document.getElementById("closeBtn");

  btn.onclick = function () {
    console.log("gkgkgkgk");
    modal.style.display = "block";
  };

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  } else {
    console.error('No element with id "closeBtn" found');
  }

  /* modal을 닫는 동작을 하는 함수가 전체 중에 하나만 동작해서 앞으로 모달을 닫고 싶으면 아래 3단계를 진행하세요
  1. modal + 숫자 이어서 getElementById("모달창 id") 생성
  2. else if문 추가
  3. modal+숫자.sytle.display = "none"; */

  const modal1 = document.getElementById("modalAircon");
  const modal2 = document.getElementById("routineModalWrap1");
  const modal3 = document.getElementById("routineModalWrap2");
  const modal4 = document.getElementById("routineModalWrap3");
  const modal5 = document.getElementById("routineModalWrap4");

  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    } else if (event.target == modal2) {
      modal2.style.display = "none";
    } else if (event.target == modal3) {
      modal3.style.display = "none";
    } else if (event.target == modal4) {
      modal4.style.display = "none";
    } else if (event.target == modal5) {
      modal5.style.display = "none";
    }
  };
};
