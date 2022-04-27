function showCity() {
    let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";
    let city = document.querySelector(".search").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    




    axios.get(apiUrl).then(showWeatherDetails);
}

function getForecast(coordinates) {
    console.log(coordinates)
    let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}

function showWeatherDetails(response) {
    console.log(response.data);
    //
    let tempElement = document.querySelector(".temperature");
    let tempMath = Math.round(response.data.main.temp);
    tempElement.innerHTML = `${tempMath}`;
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
    let iconElement = document.querySelector("#icon")
    iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //
    celsiusTemperature = response.data.main.temp;
    //
    
    getForecast(response.data.coord)
    
}

let btnSearch = document.querySelector(".submit");
btnSearch.addEventListener('click', showCity);


let now = new Date();
let h1 = document.querySelector(".date");
let date = now.getDate()

let hour = now.getHours();
if (hour < 10) {
    hour = `0${hour}`
}

let minutes = now.getMinutes()
if (minutes < 10) {
    minutes = `0${minutes}`
}

let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];
h1.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}, ${year}`



function displayForecast(response) {
    console.log(response.data.daily)
    let forecastElement = document.querySelector('#forecast') 

    let forecastHTML = `<div class="row">`;

    let days = ["Thu", "Fri", "Sat", "Sun"]
    days.forEach(function (day) {
    
    forecastHTML =
        forecastHTML +
        `
        <div class="col-2">
            <div class="weather-forecast-date">${day}
            </div>
            <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" 
            alt="Mostly cloudy"
            width="40px"
            />
            <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">
                18° 
                </span>
                <span class="weather-forecast-temperature-min">
                12°
                </span>
            </div>
        </div>
    `;    
    })
    
    forecastHTML = forecastHTML + `</div>`
    forecastElement.innerHTML = forecastHTML;
}

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



    // FAHRENHEIT
    function showFahrenheitTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector('.temperature')
        let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    }

    let fahrenheitLink = document.querySelector("#fahrenheit-link");
    fahrenheitLink.addEventListener('click', showFahrenheitTemperature)
    // FAHRENHEIT

    let celsiusTemperature = null;



    //CELSIUS
    function showCelsiusTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector('.temperature')
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
    
    }

    let celsiusLink = document.querySelector("#celsius-link")
    celsiusLink.addEventListener("click", showCelsiusTemperature);


    

