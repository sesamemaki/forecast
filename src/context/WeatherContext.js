
import { useState, createContext, useContext } from 'react';
import cities from '../data/cities.json';


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [weatherData, setWeatherData] = useState([]);

    const [city, setCity] = useState(cities[15]);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date();
    let day = date.getDay();
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "";
    }

    const values = {
        weatherData,
        setWeatherData,
        city,
        setCity,
        cities,
        days,
        day,
    }

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )

};

export const useWeather =() => useContext(WeatherContext);

