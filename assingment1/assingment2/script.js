// script.js
const apiKey = "AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ";

// Function to fetch weather data based on latitude and longitude
function getWeatherByLatLong() {
  const url = "https://api.tomorrow.io/v4/timelines?location=28.7041,77.1025&fields=temperature&timesteps=1h&units=metric&apikey=" + apiKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.data.timelines[0].intervals[0].values.temperature;
      const location = "Bihar, India";

      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
    })
    .catch(error => console.error(error));
}

// Function to fetch weather data based on location name
function getWeatherByName() {
  const url = "https://api.tomorrow.io/v4/weather/forecast?location=delhi&apikey=" + apiKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.data.temperature;
      const description = data.data.weather.description;
      const location = "Delhi, India";

      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
      document.getElementById("description").textContent = `Description: ${description}`;
    })
    .catch(error => console.error(error));
}

// Call the functions to fetch weather data
getWeatherByLatLong();
getWeatherByName();