/*모달 에어컨*/
window.onload = function () {
  const btn = document.getElementById("imgModalAircon");
  const modal = document.getElementById("modalAircon");
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

  window.onclick = function (event) {
    console.log("가나다라");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
