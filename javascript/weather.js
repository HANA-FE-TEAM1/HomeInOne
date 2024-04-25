const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const getDate = function () {
  let today = new Date();

  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜

  const day = (document.getElementById("today").innerHTML =
    month + "월 " + date + "일");
};

getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric&lang=kr",
  function (err, data) {
    if (err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      console.log(data.weather);

      const currTemperature = (document.getElementById(
        "currTemparature"
      ).innerHTML = data.main.temp);
      const currHumidity = (document.getElementById("currHumidity").innerHTML =
        data.main.humidity);
      const currDescription = (document.getElementById(
        "currDescription"
      ).innerHTML = data.weather[0].description);
    }
  }
);

getDate();
