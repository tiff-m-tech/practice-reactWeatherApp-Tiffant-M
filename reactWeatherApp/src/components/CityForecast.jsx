import { useState, useEffect, useRef } from "react";
import { weatherData } from "../mock-data/weatherData";

export default function CityForecast({ city }) {
    const [forecastData, setForecastData] = useState(null);

    // Creates a reference that starts as null until the forecast section renders.
    const forecastRef = useRef(null);

    const handleFocus = () => {
        if (forecastRef.current) {
            forecastRef.current.focus();
        }
    };

    // useEffect: When something changes, run this code afterward,
    // in this case city changes, update the forecastData
    useEffect(() => {
        if (!city) return;
        setForecastData(weatherData[city]);
    }, [city]);

    if (!city) return <p>Select a city to see the forecast.</p>;

    return (
        <div>
            <br />
            {/* Clicking View Details scrolls to the forecast section. */}
            <a href="#forecast-container" className="button" onClick={handleFocus}>
                View Details
            </a>
            <div style={{ height: "100vh" }}></div>
            {forecastData ? (
                <div id="forecast-container" ref={forecastRef}>
                    {/* React connects forecastRef.current to this div after it renders. */}
                    <h2>{city}</h2>
                    <p>{forecastData.summary}</p>
                    <p>{forecastData.details}</p>
                    <br />
                    <a href="#city-list-container" className="button">
                        Go Back Up
                    </a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
