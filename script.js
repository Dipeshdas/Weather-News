const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '23fb6a6f1dmsh55c235c15c077e5p12e48cjsne15284b38d7e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather=(city)=>{

    cityName.innerHTML=city
    cityName2.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        temp2.innerHTML = response.temp
        temp3.innerHTML = response.temp
        temp.innerHTML = response.temp

        cloud_pct.innerHTML = response.cloud_pct

        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        humidity3.innerHTML = response.humidity

        feels_like.innerHTML = response.feels_like
        feels_like2.innerHTML = response.feels_like

        max_temp.innerHTML = response.max_temp
        max_temp2.innerHTML = response.max_temp

        min_temp.innerHTML = response.min_temp
        min_temp2.innerHTML = response.min_temp

        wind_degrees.innerHTML = response.wind_degrees
        wind_degrees2.innerHTML = response.wind_degrees

        wind_speed2.innerHTML = response.wind_speed
        wind_speed3.innerHTML = response.wind_speed
        wind_speed.innerHTML = response.wind_speed

        sunrise.innerHTML = response.sunrise
        sunrise2.innerHTML = response.sunrise

        sunset.innerHTML = response.sunset
        sunset2.innerHTML = response.sunset

        console.log(response)

    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Raghunathganj");

city2.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(e.target.innerHTML);
    //firstChild.nodeValue
})

city3.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(e.target.innerHTML);
    //firstChild.nodeValue
})

city4.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(e.target.innerHTML);
    //firstChild.nodeValue
})

