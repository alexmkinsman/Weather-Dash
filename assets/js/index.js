const apiKey = "709eaff6487fadf0c26e0bc441b8c854"

let searchForm = document.getElementById("searchForm");
let searchButton = document.getElementById("searchButton");
let pastSearch = document.getElementById("pastSearch");
let currentWeather = document.getElementById("currentWeather");
let currentDate = document.getElementById("currentDate");
let currentTemp = document.getElementById("currentTemp");
let currentWind = document.getElementById("currentWind");
let currentHum = document.getElementById("currentHum");
let currentUV = document.getElementById("currentUV");

searchButton.addEventListener('click', callAPI);

function callAPI() {
  var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid={apiKey}'
  console.log(weatherURL);
  fetch(weatherURL)
  .then(function(response){
    if (response) {
      return response.json();
  } else {
      console.log(err);
  }
  })
  .then (function (weather) {

  })
}

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log(searchHistory);
  
  