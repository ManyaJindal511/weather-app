import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9c3199659576798ca9c0818b2ed7464f";

    const getWeatherForDelhi = async () => {
        try {
            let response = await fetch(`${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            const result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            setWeatherInfo(result);
        } catch (error) {
            console.error("Error fetching Delhi weather:", error);
        }
    };

    useEffect(() => {
        getWeatherForDelhi();
    }, []);

    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Manya</h2>
            <SearchBox updateInfo={updateInfo} />
            {weatherInfo ? <InfoBox info={weatherInfo} /> : <p>Loading Delhi weather...</p>}
        </div>
    );
}
