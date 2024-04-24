async function getWeather(){
  const response = await fetch ('http://api.weatherapi.com/v1/forecast.json?key=4e1ed8ad82bf447b940202722240804&q=calgary&days=5', {mode:'cors'});
  const weather = await response.json();
  console.log(weather);
}

getWeather();
//we should call this every 10 minutes or something

