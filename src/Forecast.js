import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecast(null);
    const apiKey = "6t904043c5f4de3o104d9f1b3e869ba0";
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then((response) => {
      setForecast(response.data.daily);
    });
  }, [props.city]);

  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return days[date.getDay()];
  }

  if (forecast) {
    return (
      <div className="Forecast">
        {forecast.slice(1, 6).map(function (day, index) {
          return (
            <div className="forecast-day" key={index}>
              <div className="forecast-dayname">{formatDay(day.time)}</div>
              <img src={day.condition.icon_url} alt={day.condition.description} className="forecast-icon" />
              <div className="forecast-temps">
                <span className="forecast-max">{Math.round(day.temperature.maximum)}°</span>
                <span className="forecast-min">{Math.round(day.temperature.minimum)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
