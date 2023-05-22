window.addEventListener('load', () => {
    const weatherElement = document.getElementById('weather');
    const latitude = 28.7041;
    const longitude = 77.1025;
    const apiKey = 'AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ';

    fetch(`https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.data.timelines[0].intervals[0].values.temperature;
            weatherElement.textContent = `Temperature: ${temperature}°C`;
        })
        .catch(error => {
            weatherElement.textContent = 'Error fetching weather data.';
            console.error(error);
        });
});
