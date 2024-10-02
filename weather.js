function getCityName(){
    const cityName = document.getElementById('input').value;
    const apiKey = '0f147488255b147bd4119ceb6919a7a4';
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    console.log(WEATHER_URL);


fetch(WEATHER_URL)
.then(function(response) {
    return response.json();
    
})
.then(function(data){
    console.log(data);

document.querySelector(".cityName").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed  + "Km/h";

})

}











