const cityInput = document.querySelector("#city-input");

const searchArea = document.querySelector("#search-area");

searchArea.addEventListener("submit", async (event) => {
event.preventDefault();

    const cityText = cityInput.value;
    const errorMessage = document.querySelector("#error-message");

    errorMessage.textContent = "";

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityText}&count=1&language=ja&format=json`;

    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results) {
        errorMessage.textContent = "都市が見つかりませんでした。";
        return;
    }

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;
    const cityName = geoData.results[0].name;

    console.log(geoData);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const temperature = data.current.temperature_2m;
    const humidity = data.current.relative_humidity_2m;
    const weatherCode = data.current.weather_code;
    const windSpeed = data.current.wind_speed_10m;

    const cityNameElement = document.querySelector("#city-name");
    const temperatureElement = document.querySelector("#temperature");
    const humidityElement = document.querySelector("#humidity");
    const weatherElement = document.querySelector("#weather");
    const windSpeedElement = document.querySelector("#wind-speed");

    const weatherNames = {
        0: "快晴",
        1: "晴れ",
        2: "一部曇り",
        3: "曇り",
    }

    cityNameElement.textContent = cityName;
    temperatureElement.textContent = `${temperature} ℃`
    humidityElement.textContent = `${humidity} %`
    windSpeedElement.textContent = `${windSpeed} km/h`
    weatherElement.textContent = weatherNames[weatherCode];
});

