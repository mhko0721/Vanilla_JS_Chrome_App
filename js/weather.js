const ApiKey = "dbd14093815610665983bb0c14f2ba23";

function onGeoOK(position) {
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${ApiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const wt = document.querySelector("#weather span:first-child");
      const ct = document.querySelector("#weather span:last-child");
      ct.innerText = `\n${data.name}`;
      wt.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("지역을 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
