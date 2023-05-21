date=document.getElementById('date-time')
const temp=document.getElementById('temp')
let currentCity="delhi"
let currentUnit="c"
let hourlyorweek="week"



//
function getDateTime(){
    let now=new Date(),
    hour=now.getHours(),
    minute=now.getMinutes();

    let days=[
        "Sunday",
        "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
    ];
    hour=hour % 12
    if(hour <10){
        hour='0'+hour
    }
    if(minute <10){
        minute='0'-minute
    }
    let dayString=days[now.getDay()]
    return `${dayString}, ${hour}:${minute}`

}
date.innerText=getDateTime()

setInterval(()=>{
    date.innerText=getDateTime()
},1000)

function getPublicIp(){
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=delhi&apikey=AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ`,{
        method:"GET"
    }).then((response)=>response.json())
    .then((data)=>{
       console.log(data.name)
        currentCity=data.currentCity,
        getWetherData(data.city,currentUnit,hourlyorweek)
    })
}
getPublicIp()
function getWetherData(city,unit,hourlyorweek){
    const apikey="AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ"
    fetch(`https://api.tomorrow.io/v4/timelines?location=28.7041,77.1025&fields=temperature&timesteps=1h&units=metric&apikey=AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ`,
    {
        method:"GET",
    }).then((response)=>response.json())
    .then((data)=>{
        let today= data.data.timelines[0].intervals[0].values.temperature;
       
        
        if(unit==="c"){
            temp.innerText=today
        }else{
            temp.innerText=celciusToFahranheit(today.temperature)
        }
    })
}
function celciusToFahranheit(){
    return ((temp*9)/5+32).toFixed(1)
}