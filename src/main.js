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

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector('#forecast') 

    let forecastHTML = `<div class="row">`;

    let days = ["Thu", "Fri", "Sat"]
    forecast.forEach(function (forecastDay, index) {
        if( index < 6) {
    
    forecastHTML =
        forecastHTML +
        `<div class="col-2">
            <div class="weather-forecast-date">${formatDay(forecastDay.dt)}
            </div>
            <img src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
            alt=""
            width="40"
            />
            <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">
                ${
                Math.round(forecastDay.temp.max)
                }°
                </span>
                <span class="weather-forecast-temperature-min">
                ${
                Math.round(forecastDay.temp.min)
                }°
                </span>
            </div>
        </div>
        
    `;
    }        
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
    

let qt = document.querySelector("#quote")
let btn = document.querySelector(".submit")

btn.addEventListener('click', function () {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    qt.innerHTML = randomQuotes;
})

let quotes = [
    "Somewhere, something incredible is waiting to be known. - Sharon Begley",
    "The past cannot be changed. The future is yet in your power. - Mary Pickford",
    "Your big opportunity may be right where you are now. -Napoleon Hill",
    "You and you alone are the only person who can live the life that can write the story that you were meant to tell. - Kerry Washington",
    "It isn't where you came from. It's where you're going that counts. Ella Fitzgerald",
    "What great thing would you attempt if you knew you could not fail? - Robert H. Schuller",
    "One day, you'll be just a memory for some people. Do your best to be a good one. - Unknown"
];




function changeBg() {

    const images = [
        'url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80")',
        'url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1475656106224-d72c2ab53e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
        'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")',
        'url("https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
    ]

    const section = document.querySelector('section')

    const bg = images[Math.floor(Math.random() * images.length)]
    
    section.style.backgroundImage = bg;
    section.style.backgroundSize = "cover";
    section.style.backgroundImageRepeat = "no-repeat"
}

btn.addEventListener("click", changeBg)