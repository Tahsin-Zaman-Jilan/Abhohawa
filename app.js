const API_KEY=`788406f148ef61a42e6f6a73926c69a7`

// const img_url=`https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


// querySelector selects an element in the html file
const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")

const getWeather=async(city)=> {
  
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url);
    const data=await response.json();

return showWeather(data)


}

//manage date
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


document.getElementById("others").style.borderColor = "10px solid #73AD21";

const showWeather=(data)=>{

    if(data.cod=="404"){
        weather.innerHTML= `<h2> City not Found</h2>`
        return;
    }

    let todayDate = new Date();
    currentTime=dateManage(todayDate)
   
    date.innerHTML= `
    <p1>${currentTime}</p1>`
   

    weather.innerHTML= `

    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>

   <div>
    <h2>${data.main.temp}°C</h2>
    <h4>${data.weather[0].main} </h4>
    
  </div>

   </div>
    
    `
    others.innerHTML= `
  
    <p1>Humidity: ${data.main.humidity}</p1>
    <br>
    <p1>Wind speed:  ${data.wind.speed} </p1>

`
}


//looks for submit. if submit is triggerd
form.addEventListener(

    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)
