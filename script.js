let submitBtn = document.querySelector("button");
console.log(submitBtn);
let inputValue = document.querySelector("input").value;

submitBtn.addEventListener('click', getWeather(inputValue));


function renderApp(visibility, condition, uv, feelslike_c, feelslike_f, humidity, isDay, precipitation, tempC, tempF){

  let humidityText = document.querySelector("#humidity-text");
  humidityText.innerText = humidity;
}


async function getWeather(city){
  let url = 'http://api.weatherapi.com/v1/forecast.json?key=4e1ed8ad82bf447b940202722240804&days=5&q=' + city;

  console.log(url);

  const response = await fetch (url, {mode:'cors'});
  const weather = await response.json();

  console.log(weather);
  
  let visibility = weather.current.vis_km;
  let condition = weather.current.condition.text;
  let uv = weather.current.uv;
  let feelslike_c = weather.current.feelslike_c;
  let feelslike_f = weather.current.feelslike_f;
  let humidity = weather.current.humidity;
  let isDay = weather.current.is_day;
  let precipitation = weather.current.precip_mm;
  let tempC = weather.current.temp_c;
  let tempF = weather.current.temp_f;

  renderApp(visibility, condition, uv, feelslike_c, feelslike_f, humidity, isDay, precipitation, tempC, tempF);
  
}





