const apiKey = "709eaff6487fadf0c26e0bc441b8c854"

let searchForm = document.getElementById("searchForm");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let pastSearch = document.getElementById("pastSearch");
let currentWeather = document.getElementById("currentWeather");
let currentDate = document.getElementById("currentDate");
let currentTemp = document.getElementById("currentTemp");
let currentWind = document.getElementById("currentWind");
let currentHum = document.getElementById("currentHum");
let currentUV = document.getElementById("currentUV");
let city;
let lat, lon;

searchButton.addEventListener('click', callWeather);

function callWeather() {
  //call city
  //this will take the input and trims extra characters to find city in database
  city = searchInput.value.trim()
  console.log(city);
  //fetch coordinates
  var geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
  
  fetch(geoURL)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data) {
      console.log("geo response = ", data);
      // return data.json();
      lat = data[0].lat;
      lon = data[0].lon;
  } else {
      console.log(err);
  }
  })
  .then (function(data) {
    var weatherURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
      //console.log(weatherURL);
      
      fetch(weatherURL)
      .then(function(response){
        if (response) {
          console.log("weather response = ", response);
          return response.json();
      } else {
          console.log(err);
      }
      })
      .then (function(data) {

      })
  })
}

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log(searchHistory);
  

  //call API
  //convert city to geolocation
  //use lon and lat to find current weather
  //assign current weather to html element
  //display data in browser
  //store searches in local storage
