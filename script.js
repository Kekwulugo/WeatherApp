async function getWeather(){
  const response = await fetch ('http://api.weatherapi.com/v1/forecast.json?key=4e1ed8ad82bf447b940202722240804&q=calgary', {mode:'cors'})
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      console.log(response);
    })
    .catch (e=> {
      console.log(e)
    })
 }

