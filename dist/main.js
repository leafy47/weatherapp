(()=>{let t=document.querySelector("#location-output"),e=document.querySelector("#temperature-output"),o=document.querySelector("#weather-output"),n=document.querySelector("#wind-output"),c=document.querySelector("#error");const r=document.querySelector("#location-input");document.querySelector("#submit-btn").addEventListener("click",(()=>async function(r){try{const u=await fetch(`http://api.weatherapi.com/v1/current.json?key=17308ed70af341ec8db232458242903&q=${r}`,{mode:"cors"}),a=await u.json();console.log(a),console.log(a.current.cloud),t.textContent=a.location.name,e.textContent=a.current.temp_f+" °F",n.textContent=a.current.wind_mph+" mph",o.textContent=a.current.condition.text,c.innerHTML=""}catch{c.textContent="Error: Location could not be found"}}(r.value)))})();