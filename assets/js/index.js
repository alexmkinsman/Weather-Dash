var requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=709eaff6487fadf0c26e0bc441b8c854'

fetch(requestURL)
.then(function(response){
  return response.json();
  })
.then(function(data){
  console.log(data);
  })

let currentWeather = document.getElementById("currentWeather");
let currentDate = document.getElementById("currentDate");