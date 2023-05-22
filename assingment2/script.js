
  
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
  

    let inputValue = 'delhi';


    const inputElement = document.getElementById('myInput');
    const buttonElement = document.getElementById('myButton');
    
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()
      inputValue = inputElement.value;
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${inputValue}&apikey=weN4iXosfA5gx7S00F0Jq4GRGaGulnq5`)
      .then(response => response.json())
      .then(data => {
          console.log(data )
          localStorage.setItem("data",JSON.stringify(data)) 
          const datas=JSON.parse( localStorage.getItem("data"))
          storage()
      })
      .catch(error => {
          console.error(error);
      });
     
    });






function storage(){
    const datas=JSON.parse( localStorage.getItem("data"))

    const specificDate = new Date(datas.timelines.daily[0].time);
    
    const dayOfWeek = specificDate.getDay();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const dayName = daysOfWeek[dayOfWeek];

    console.log("day",dayName)






    const temperature = datas.timelines.daily[0].values.temperatureAvg ;
    const uv = datas.timelines.daily[0].values.uvIndexAvg ;
    const wind = datas.timelines.daily[0].values.windSpeedAvg    ;
    const humidity = datas.timelines.daily[0].values.humidityAvg;
    const visibility = datas.timelines.daily[0].values.visibilityAvg ;
    const air = datas.timelines.daily[0].values.pressureSurfaceLevelAvg;
    const cloudCoverAvg = datas.timelines.daily[0].values.cloudCoverAvg;
    const location = datas.location.name ;
    weatherElement.textContent = `Temperature: ${temperature}°C`;
    weatherElement1.textContent = `location: ${location}`;
    weatherElement2.textContent = ` ${dayName }`;
    weatherElement3.textContent = ` ${uv }`;
    weatherElement4.textContent = ` ${wind }`;
    weatherElement5.textContent = ` ${cloudCoverAvg }`;
    weatherElement6.textContent = ` ${humidity}`;
    weatherElement7.textContent = ` ${visibility }`;
    weatherElement8.textContent = ` ${air }`;
    weatherElement9.textContent = ` ${dayName }`;
    weatherElement10.textContent = ` ${temperature }`;
}
storage()





