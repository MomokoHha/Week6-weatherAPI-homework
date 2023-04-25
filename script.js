function showTemperature(response) {
  //   let temperature = Math.round(response.data.main.temp);
  //   console.log(temperature);
  console.log(response);
  console.log(response.data.wind.speed);

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "a517e2f077fee2ef9b2aa7d6e87f83b4";
  let city = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  let now = new Date();
  // console.log(now);
  // let days = now.getDay();
  // console.log(days);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // console.log(days[now.getDay()]);
  let day = days[now.getDay()];

  let date = now.getDate();
  // console.log(date);

  let hour = now.getHours();
  console.log(hour);
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = now.getMinutes();
  console.log(minute);
  if (minute < 10) {
    minute = `0${minute}`;
  }

  // console.log(`${day} ${date}, ${hour}:${minute}`);
  document.querySelector("h2").innerHTML = `${day} ${date}, ${hour}:${minute}`;
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchCity);
// ---------------------------------------city---------------------------

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  alert(`Your current latitude is ${latitude} & longitude is ${longitude}`);
}
function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", showLocation);

// ---------------------------------location--------------------------------------
