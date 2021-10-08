//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}//

const weatherApi = {
  key: "822fb72c5be5f110e0b15f55c37a362a",
};

const searchInputBox = document.getElementById("input-box");
const btn = document.getElementById("search-button");

// Event Listener on key press
btn.addEventListener("click", function() {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
});

// Get Weather report
function getWeatherReport(city){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=822fb72c5be5f110e0b15f55c37a362a')
  .then(weather => {
    return weather.json();
  }).then(showWeatherReport);
}

// Show Weather report
function showWeatherReport(weather){
  console.log(weather)

  let city = document.getElementById("city");
  city.innerText = (weather.name) + "," + " " +  (weather.sys.country);

  let tempet = document.getElementById("temp");
  tempet.innerHTML = (Math.round(weather.main.temp-273.15)) + "°" + "C";

  let minMax = document.getElementById("min-max");
  minMax.innerHTML = (Math.floor(weather.main.temp_min-273.15)) + "°" + "C" + "(min)" + "/"+ " " + (Math.floor(weather.main.temp_max-273.15)) + "°" + "C"+ "(max)";

  let weatherType = document.getElementById("weather");
  weatherType.innerText = weather.weather[0].main;

  let date = document.getElementById("date");
  let todayDate = new Date()
  date.innerText = dateManage(todayDate);

  if(weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = 'url("clear.jpg")';
  } else if(weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = 'url("cloudy.jpg")';
  } else if(weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = 'url("haze.jpg")';
  } else if(weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = 'url("rainy.jpg")';
  } else if(weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = 'url("snow.jpg")';
  } else if(weatherType.textContent == "Thunderstorm") {
    document.body.style.backgroundImage = 'url("thunderstorm.jpg")';
  }

}

//Data Management
function dateManage(dateFn) {

  let days = ["sunday", "Monday", "Teusday", "Thursday", "Friday", "Saturday"];

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let year = dateFn.getFullYear();
  let month = months[dateFn.getMonth()];
  let date = dateFn.getDate();
  let day = days[dateFn.getDay()];

  return date+" "+month + " "+ "(" + day+ ")"+", "+  year;
}
