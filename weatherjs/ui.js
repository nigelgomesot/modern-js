class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    console.log('weather', weather)
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    const iconurl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    this.icon.setAttribute('src', iconurl);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.pressure.textContent = `Air Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
  }
}
