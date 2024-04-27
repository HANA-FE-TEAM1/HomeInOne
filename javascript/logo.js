document
  .querySelector("#logo-image")
  .addEventListener("mouseover", function () {
    // 마우스를 올렸을 때, fade-out 클래스를 추가하여 로고를 서서히 사라지게 만듭니다.
    this.classList.add("fade-out");
    // 0.5초 후에 다른 이미지로 변경합니다.
    setTimeout(function () {
      document.querySelector("#logo-image").src = "images/hoveredLogo.svg";
      // fade-in 클래스를 추가하여 새로운 로고를 서서히 나타나게 만듭니다.
      document.querySelector("#logo-image").classList.add("fade-in");
      document.querySelector("#logo-image").style.transition = "opacity 0.5s"; // fade-in 효과에 대한 transition 설정
    }, 10);
  });

document.querySelector("#logo-image").addEventListener("mouseout", function () {
  // 마우스가 나갔을 때, fade-out 클래스를 추가하여 로고를 다시돌아오게함.
  this.classList.remove("fade-out");
  // 0.5초 후에 다른 이미지로 변경합니다.
  setTimeout(function () {
    document.querySelector("#logo-image").src = "images/logo.svg";
    // document.getElementById("logo-image").style.transition = "opacity 0.5s;";

    // fade-in 클래스를 추가하여 새로운 로고를 서서히 나타나게 만듭니다.
    document.querySelector("#logo-image").classList.add("fade-in");
    document.querySelector("#logo-image").style.transition = "opacity 0.5s"; // fade-in 효과에 대한 transition 설정
    console.log();
  }, 10);
});
