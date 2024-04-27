/*모달 에어컨*/
window.onload = function () {
  const btn = document.getElementById("imgModalRefridgerator");
  const modal = document.getElementById("modalRefridgerator");
  // const section = document.getElementById("section");
  const closeBtn = document.getElementById("closeBtn3");

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

  const modal1 = document.getElementById("modalRefridgerator");
  const modal3 = document.getElementById("addDevice-modalWrap");
  const modal4 = document.getElementById("addDevice-myModal");
  const modal5 = document.getElementById("routineModalWrap1");
  const modal6 = document.getElementById("routineModalWrap2");
  const modal7 = document.getElementById("routineModalWrap3");
  const modal8 = document.getElementById("routineModalWrap4");

  window.onclick = function (event) {
    if (
      event.target == modal1 ||
      event.target == modal3 ||
      event.target == modal4 ||
      event.target == modal5 ||
      event.target == modal6 ||
      event.target == modal7 ||
      event.target == modal8
    ) {
      modal1.style.display = "none";
      modal3.style.display = "none";
      modal4.style.display = "none";
      modal5.style.display = "none";
      modal6.style.display = "none";
      modal7.style.display = "none";
      modal8.style.display = "none";
    }
  };
};
