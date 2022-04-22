// VARIABLES
let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";
let city = "Austin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
];


let now = new Date();
let h1 = document.querySelector(".date");
let date = now.getDate()
let hour = now.getHours();
let minutes = now.getMinutes()
let year = now.getFullYear();
let day = now.getDay();

h1.innerHTML = `${day} April ${date}, ${hour}:${minutes}, ${year}`;







// FUNCTIONS
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
    description.innerHTML = `${response.data.weather[0].description}`;
    //
}



// CALLS
    
axios.get(apiUrl).then(showWeatherDetails);



let cityInput = document.querySelector(".city-name")
cityInput.innerHTML = city;

