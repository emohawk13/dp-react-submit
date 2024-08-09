import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Vernal");
  const [fetchCity, setFetchCity] = useState("Vernal");

  useEffect(() => {
    fetchWeatherData(fetchCity);
  }, [fetchCity]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=34624965fa874978a2641806240508&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    setFetchCity(city);
  };

  return (
    <div className="weather-widget">
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.current.condition.text}</p>
          <p>
            {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F
          </p>
          <img src={weatherData.current.condition.icon} alt="weather icon" />
        </div>
      )}
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <Button
        label="Get Weather"
        onClick={handleFetchWeather}
        className="weather-button"
      />
    </div>
  );
};

export default WeatherWidget;
