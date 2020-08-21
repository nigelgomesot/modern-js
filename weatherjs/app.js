const weather = new Weather('Chicago', 'Illinois');

// weather.changeLocation('Miami', 'Florida')

const getWeather = () => {
  weather.getWeather()
  .then(console.log)
  .catch(console.warn);
}

document.addEventListener('DOMContentLoaded', getWeather);
