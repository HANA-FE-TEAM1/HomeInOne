window.onload = function () {
  const btns = [
    "imgModalWashingMachine",
    "imgModalAircon",
    "imgModalHumidity",
    "imgModalRefridgerator",
  ];
  const modals = [
    "modalWashingMachine",
    "modalAircon",
    "modalHumidity",
    "modalRefridgerator",
  ];

  for (let i = 0; i < btns.length; i++) {
    const btn = document.getElementById(btns[i]);
    const modal = document.getElementById(modals[i]);

    btn.onclick = function () {
      modal.style.display = "block";
    };

    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  const closeBtn4 = document.getElementById("closeBtn");

  if (closeBtn4) {
    closeBtn4.onclick = function () {
      for (let i = 0; i < modals.length; i++) {
        const modal = document.getElementById(modals[i]);
        modal.style.display = "none";
      }
    };
  } else {
    console.error('No element with id "closeBtn" found');
  }
};
