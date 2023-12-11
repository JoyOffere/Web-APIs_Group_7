const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "10ddf1951013554c515821900a38d401";

const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather img")

async function checkWeather(City) {
    const response = await fetch(URL + City + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        
        // console.log(data);
        
        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            WeatherIcon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            WeatherIcon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            WeatherIcon.src = "img/rain.png";
        }
        else if(data.weather[0].main == "Thunderstorm") {
            WeatherIcon.src = "img/thunder.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Snow") {
            WeatherIcon.src = "img/snow.png";
        }
        else if(data.weather[0].main == "Mist") {
            WeatherIcon.src = "img/mist.png";
        }
        else if(data.weather[0].main == "Fog") {
            WeatherIcon.src = "img/fog.png";
        }
        else if(data.weather[0].main == "Haze") {
            WeatherIcon.src = "img/haze.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

btn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})
