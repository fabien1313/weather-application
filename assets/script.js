var searchBtn = document.querySelector('#search-btn');
var currentDate = document.getElementById('location');
var currentTemp = document.getElementById('current-temp');
var currentWind = document.getElementById('current-wind');
var currentHumidity = document.getElementById('current-humidity');
var userInput = document.getElementById('city-input');
var resetBtn = document.getElementById('reset');

function getWeather(e) {
    e.preventDefault();

    var date = document.getElementById('time');
    date.innerHTML = dayjs().format('MM/DD/YYYY')

    var cityInput = document.querySelector('#city-input').value;
    var apiKey = '8f875c9f733a2d9482803fcd7422731c';
    var apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=';
    var apiRequestUrl = apiUrl + cityInput + '&limit=1' + '&appid=' + apiKey;

    fetch(apiRequestUrl)
        .then(response => {
            return response.json();
            
        }).then(data => {
            
            var longitude = data[0].lon
            var latitude = data[0].lat
            
            var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=';
            var currentWeatherRequest = currentWeatherUrl + latitude + '&lon=' + longitude + '&appid=' + apiKey + '&units=imperial';

            fetch(currentWeatherRequest)
                .then(currentResponse => {
                    return currentResponse.json();
                }).then(currentResponseData => {
                    // console.log(currentResponseData)
                    var cityName = currentResponseData.name
                    currentDate.innerHTML = cityName
                    var temp = currentResponseData.main.temp
                    currentTemp.innerHTML = 'Temp: ' + temp + ' °F';
                    var wind = currentResponseData.wind.speed
                    currentWind.innerHTML = 'Wind: ' + wind + ' MPH';
                    var humidity = currentResponseData.main.humidity
                    currentHumidity.innerHTML = 'humidity: ' + humidity + ' %';
                    var iconVar = document.getElementById('weather-icon');
                    var iconCode = currentResponseData.weather[0].icon;
                    var iconEl = document.createElement('img');
                    iconEl = "https://www.openweathermap.org/img/wn/" + iconCode + ".png";
                    iconVar.setAttribute('src', iconEl);
                })
        })
}


function fiveDayForecast() {
    var cityInput = document.querySelector('#city-input').value;
    var apiKey = '8f875c9f733a2d9482803fcd7422731c';
    var fiveDayForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    var apiRequestUrl2 = fiveDayForecastUrl + cityInput + ',us&appid=' + apiKey + '&units=imperial';

    fetch(apiRequestUrl2)
        .then(responseBack => {
            return responseBack.json();

        }).then(datafore => {
            var first = dayjs(datafore.list[5].dt_txt).format('MM/DD/YYYY');
            var day1 = document.getElementById('day1');
            day1.innerHTML = first;
            var tempday1 = datafore.list[5].main.temp
            var temp1 = document.getElementById('tempday1');
            temp1.innerHTML = 'Temp: ' + tempday1 + ' °F';
            var windday1 = datafore.list[5].wind.speed
            var wind1 = document.getElementById('windday1');
            wind1.innerHTML = 'Wind: ' + windday1 + ' MPH';
            var humday1 = datafore.list[5].main.humidity;
            var hum1 = document.getElementById('humday1')
            hum1.innerHTML = 'Humidity: ' + humday1 + '%'
            var icon1 = datafore.list[5].weather[0].icon;
            var iconEl1 = document.getElementById('weather-icon1');
            displayIcon1 = "https://www.openweathermap.org/img/wn/" + icon1 + ".png";
            iconEl1.setAttribute('src', displayIcon1);
            var second = dayjs(datafore.list[13].dt_txt).format('MM/DD/YYYY');
            var day2 = document.getElementById('day2');
            day2.innerHTML = second;
            var tempday2 = datafore.list[13].main.temp
            var temp2 = document.getElementById('tempday2');
            temp2.innerHTML = 'Temp: ' + tempday2 + ' °F';
            var windday2 = datafore.list[13].wind.speed
            var wind2 = document.getElementById('windday2');
            wind2.innerHTML = 'Wind: ' + windday2 + ' MPH';
            var humday2 = datafore.list[13].main.humidity;
            var hum2 = document.getElementById('humday2')
            hum2.innerHTML = 'Humidity: ' + humday2 + '%'
            var icon2 = datafore.list[13].weather[0].icon;
            var iconEl2 = document.getElementById('weather-icon2');
            displayIcon2 = "https://www.openweathermap.org/img/wn/" + icon2 + ".png";
            iconEl2.setAttribute('src', displayIcon2);
            var third = dayjs(datafore.list[21].dt_txt).format('MM/DD/YYYY');
            var day3 = document.getElementById('day3');
            day3.innerHTML = third;
            var tempday3 = datafore.list[21].main.temp
            var temp3 = document.getElementById('tempday3');
            temp3.innerHTML = 'Temp: ' + tempday3 + ' °F';
            var windday3 = datafore.list[21].wind.speed
            var wind3 = document.getElementById('windday3');
            wind3.innerHTML = 'Wind: ' + windday3 + ' MPH';
            var humday3 = datafore.list[21].main.humidity;
            var hum3 = document.getElementById('humday3')
            hum3.innerHTML = 'Humidity: ' + humday3 + '%'
            var icon3 = datafore.list[21].weather[0].icon;
            var iconEl3 = document.getElementById('weather-icon3');
            displayIcon3 = "https://www.openweathermap.org/img/wn/" + icon3 + ".png";
            iconEl3.setAttribute('src', displayIcon3);
            var fourth = dayjs(datafore.list[29].dt_txt).format('MM/DD/YYYY');
            var day4 = document.getElementById('day4');
            day4.innerHTML = fourth;
            var tempday4 = datafore.list[29].main.temp
            var temp4 = document.getElementById('tempday4');
            temp4.innerHTML = 'Temp: ' + tempday4 + ' °F';
            var windday4 = datafore.list[29].wind.speed
            var wind4 = document.getElementById('windday4');
            wind4.innerHTML = 'Wind: ' + windday4 + ' MPH';
            var humday4 = datafore.list[29].main.humidity;
            var hum4 = document.getElementById('humday4')
            hum4.innerHTML = 'Humidity: ' + humday4 + '%';
            var icon4 = datafore.list[29].weather[0].icon;
            var iconEl4 = document.getElementById('weather-icon4');
            displayIcon4 = "https://www.openweathermap.org/img/wn/" + icon4 + ".png";
            iconEl4.setAttribute('src', displayIcon4);
            var five = dayjs(datafore.list[37].dt_txt).format('MM/DD/YYYY');
            var day5 = document.getElementById('day5');
            day5.innerHTML = five;
            var tempday5 = datafore.list[29].main.temp
            var temp5 = document.getElementById('tempday5');
            temp5.innerHTML = 'Temp: ' + tempday5 + ' °F';
            var windday5 = datafore.list[29].wind.speed
            var wind5 = document.getElementById('windday5');
            wind5.innerHTML = 'Wind: ' + windday5 + ' MPH';
            var humday5 = datafore.list[29].main.humidity;
            var hum5 = document.getElementById('humday5')
            hum5.innerHTML = 'Humidity: ' + humday5 + '%';
            var icon5 = datafore.list[29].weather[0].icon;
            var iconEl5 = document.getElementById('weather-icon5');
            displayIcon5 = "https://www.openweathermap.org/img/wn/" + icon5 + ".png";
            iconEl5.setAttribute('src', displayIcon5);
        })
}


var test = document.getElementById('city-selection-1');
var test1 = document.getElementById('city-selection-2');

test.textContent = localStorage.getItem('city-1')
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var keyOne = document.getElementById('city-input').value;
    localStorage.setItem('city-1', keyOne);
});

test1.textContent = localStorage.getItem('city-2')
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var keyTwo = document.getElementById('city-input').value;
    localStorage.setItem('city-2', keyTwo);
});


resetBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

searchBtn.addEventListener('click', getWeather);
searchBtn.addEventListener('click', fiveDayForecast);





