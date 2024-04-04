async function callWeather () {
    const data = await fetch('http://api.weatherapi.com/v1/current.json?key=17308ed70af341ec8db232458242903&q=London', {mode: 'cors'});
    const xdata = await data.json();
    console.log(xdata);
    console.log(xdata.current.cloud);
}

callWeather();