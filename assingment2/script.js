
    // const location = 'delhi';
    // const apiKey = 'AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ';
    const weatherElement = document.getElementById('temp');
    const weatherElement1 = document.getElementById('location');
    const weatherElement2= document.getElementById('date-time');
    const weatherElement3= document.getElementById('uv');
    const weatherElement4= document.getElementById('wind');
    const weatherElement5= document.getElementById('sunset');
    const weatherElement6= document.getElementById('humidity');
    const weatherElement7= document.getElementById('visibility');
    const weatherElement8= document.getElementById('air');
    const weatherElement9= document.getElementById('day-name');
    const weatherElement10= document.getElementById('temp-unit');

    const datas=JSON.parse( localStorage.getItem("data"))

    const specificDate = new Date(datas.timelines.daily[0].time);
    
    const dayOfWeek = specificDate.getDay();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dayName = daysOfWeek[dayOfWeek];
    

const dateTimeString =datas.timelines.daily[0].values.sunsetTime
const sunsetTime = new Date(dateTimeString);

const sunset = sunsetTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

console.log('The converted time is', sunset);
  

const dateTimeString1 =datas.timelines.daily[0].values.sunriseTime
const sunriseTime= new Date(dateTimeString1);

const  sunrise= sunriseTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

console.log('The converted time is 2', sunrise);
  


function getdata(){
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=delhi&apikey=xk6fiLn8xa39wzbnKFuDeJDKFvFYD5Dp`)
        .then(response => response.json())
        .then(data => {
            console.log(data )
            localStorage.setItem("data",JSON.stringify(data))
         
        })
        .catch(error => {
            console.error(error);
        });


    }
    
// getdata()

function storage(){
    const datas=JSON.parse( localStorage.getItem("data"))
    console.log(datas)
    const temperature = datas.timelines.daily[0].values.temperatureAvg ;
    const uv = datas.timelines.daily[0].values.uvIndexAvg ;
    const wind = datas.timelines.daily[0].values.windSpeedAvg    ;
    const humidity = datas.timelines.daily[0].values.humidityAvg;
    const visibility = datas.timelines.daily[0].values.visibilityAvg ;
    const air = datas.timelines.daily[0].values.pressureSurfaceLevelAvg;
    const location = datas.location.name ;
    weatherElement.textContent = `Temperature: ${temperature}°C`;
    weatherElement1.textContent = `location: ${location}`;
    weatherElement2.textContent = ` ${dayName }`;
    weatherElement3.textContent = ` ${uv }`;
    weatherElement4.textContent = ` ${wind }`;
    weatherElement5.textContent = ` sunrise:${sunrise } sunset:${sunset }`;
    weatherElement6.textContent = ` ${humidity}`;
    weatherElement7.textContent = ` ${visibility }`;
    weatherElement8.textContent = ` ${air }`;
    weatherElement9.textContent = ` ${dayName }`;
    weatherElement10.textContent = ` ${temperature }`;
}
storage()







