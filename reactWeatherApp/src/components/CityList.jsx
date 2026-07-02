import { weatherData } from "../mock-data/weatherData";

export default function CityList({ setCurrentCity, currentCity }) {
    return (
        <div id="city-list-container">
            <h1>Pick a City to View Weather</h1>
            <ul>
                {Object.keys(weatherData).map((cityName) => (
                    <li key={cityName} onClick={() => setCurrentCity(cityName)} style={{ fontWeight: cityName === currentCity ? "bold" : "normal" }}>
                        {cityName}
                    </li>
                ))}
            </ul>
        </div>
    );
}
