class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=<API_KEY>`);
    const data = await response.json();

    return data;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
