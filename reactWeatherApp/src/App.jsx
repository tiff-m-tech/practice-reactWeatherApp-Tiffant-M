import "./App.css";
import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";

function App() {
    const [currentCity, setCurrentCity] = useState(null);
    return (
        <div id="weather-app-container">
            <CityList setCurrentCity={setCurrentCity} currentCity={currentCity} />
            <CityForecast city={currentCity} />
        </div>
    );
}

export default App;
