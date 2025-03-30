// OpenWeatherMap API key (Replace with your own key if needed)
const API_KEY = '4d3574364f477f683425509bb9725018'; // Get an API key from https://openweathermap.org/api

// Get weather data from API
async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter a valid city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('City not found. Please try again!');
    }
}

// Display weather information
function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp.toFixed(1)}°C`;
    document.getElementById('condition').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;

    // Get and display weather icon
    const iconCode = data.weather[0].icon;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Show weather information
    document.getElementById('weatherInfo').style.display = 'block';
}
