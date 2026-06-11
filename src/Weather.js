import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState(null);

  function handleResponse(response) {
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url
    });
  }

  function search() {
    const apiKey = "6t904043c5f4de3o104d9f1b3e869ba0";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>

      {weather && (
        <div className="weather-info">
          <h1>{weather.city}</h1>
          <img src={weather.icon} alt={weather.description} />
          <div className="temperature">{weather.temperature}°C</div>
          <ul>
            <li className="description">{weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      )}
    </div>
  );
}