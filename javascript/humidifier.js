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
