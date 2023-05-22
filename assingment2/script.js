
    // const location = 'delhi';
    // const apiKey = 'AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ';
    const weatherElement = document.getElementById('temp');
    const weatherElement1 = document.getElementById('location');

function getdata(){
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=delhi&apikey=lhAD654B4s3lDp8kJ2Ga5T51fKifX7zi`)
        .then(response => response.json())
        .then(data => {
            console.log(data )
            const temperature = data.timelines.daily[0].values.temperatureAvg ;
            const location = data.location.name ;
            weatherElement.textContent = `Temperature: ${temperature}°C`;
            weatherElement1.textContent = `location: ${location}`;
        })
        .catch(error => {
            console.error(error);
        });


    }
getdata()







