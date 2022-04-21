let apiKey = "13eb9aa094479d1e47337cf35fcd3f28";

let city = "sao paulo";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function ShowTemperature(response) {
    console.log(response)
}


axios.get(apiUrl).then(ShowTemperature);