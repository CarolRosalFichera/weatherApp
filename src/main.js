let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";

let city = "sao paulo";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showWeatherDetails(response) {
    console.log(response.data);
    //
    let tempMath = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#temperature");
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
    description.innerHTML = `${response.data.weather[0].description}`

}


axios.get(apiUrl).then(showWeatherDetails);