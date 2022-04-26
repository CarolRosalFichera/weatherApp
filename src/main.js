function showCity() {
    let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";
    let city = document.querySelector(".search").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherDetails);
}


function showWeatherDetails(response) {
    console.log(response.data);
    //
    let tempElement = document.querySelector(".temperature");
    let tempMath = Math.round(response.data.main.temp);
    tempElement.innerHTML = `${tempMath} °C`;
    //
    let weatherDetails = document.querySelector(".humidity");
    weatherDetails.innerHTML = `${response.data.main.humidity}%`;
    //
    let windDetail = document.querySelector(".wind")
    let windMath = Math.round(response.data.wind.speed);
    windDetail.innerHTML = `${windMath} km/h`;
    //
    let description = document.querySelector(".weather-descript")
    description.innerHTML = `${response.data.weather[0].description}`;
    //
}


let btnSearch = document.querySelector(".submit");
btnSearch.addEventListener('click', showCity);



// CURRENT TIME INFO
let now = new Date();
let h1 = document.querySelector(".date");
let date = now.getDate()
let hour = now.getHours();
let minutes = now.getMinutes()
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];
h1.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}, ${year}`


// FUNCTIONS

function searchCity(event) {
    event.preventDefault();
    let cityElement = document.querySelector(".city-name")
    let cityInput = document.querySelector(".search");
    cityElement.innerHTML = cityInput.value;
}

function showLocation() {
     let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";
}

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showLocation);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherDetails);
}

let form = document.querySelector("#locationInput")
form.addEventListener("submit", searchCity)


