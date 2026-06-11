import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState(null);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${hours}:${minutes}`;
  }

  function handleResponse(response) {
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: formatDate(response.data.time)
    });
  }

  function search() {
    const apiKey = "6t904043c5f4de3o104d9f1b3e869ba0";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <input type="search" placeholder="Enter a city.." onChange={updateCity} autoFocus />
        <button type="submit">Search</button>
      </form>
      {weather && (
        <div className="weather-info">
          <h1>{weather.city}</h1>
          <ul className="weather-details">
            <li>{weather.date}, <span className="description">{weather.description}</span></li>
            <li>Humidity: {weather.humidity}%%, Wind: {weather.wind} km/h</li>
          </ul>
          <div className="weather-temperature">
            <img src={weather.icon} alt={weather.description} className="weather-icon" />
            <span className="temperature">{weather.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <Forecast city={weather.city} />
        </div>
      )}
    </div>
  );
}
