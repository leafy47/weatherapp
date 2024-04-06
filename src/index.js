let location = document.querySelector('#location-output');
let temperature = document.querySelector('#temperature-output');
let weather = document.querySelector('#weather-output');
let wind = document.querySelector('#wind-output');
let error = document.querySelector('#error');

async function callWeather (loc) {
try {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=17308ed70af341ec8db232458242903&q=${loc}`, {mode: 'cors'});
    const xdata = await data.json();
    console.log(xdata);
    console.log(xdata.current.cloud);
    location.textContent = xdata.location.name;
    temperature.textContent = xdata.current.temp_f + ' °F';
    wind.textContent = xdata.current.wind_mph + ' mph';
    weather.textContent = xdata.current.condition.text;
    error.innerHTML = '';
} catch {
    error.textContent = 'Error: Location could not be found';
}
}



const input = document.querySelector('#location-input');
const button = document.querySelector('#submit-btn')


button.addEventListener('click', () => callWeather(input.value));