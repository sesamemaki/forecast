import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";



function WeatherCard() {

    const { weatherData, setWeatherData, city, days } = useWeather();

    console.log(weatherData, city);

    useEffect(() => {
        const getWeather = async () => {
            const api_call = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=1b8b00609be6199c062ce764970dd564`
            );
            const res = await api_call.json();
            setWeatherData(res.daily);

        };

        getWeather();

    }, [city, setWeatherData]);

    return <div className="weather-card">

        {weatherData &&
            weatherData.map((oneDay, i) => {
                return (
                    <div className="weather-item" key={i}>
                        <p className="day"> {days[new Date(oneDay.dt * 1000).getDay()]}</p>

                        <div>
                            <img
                                src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
                                alt="weather icon" />
                        </div>

                        <p>
                            <span className='temp-max'>{Math.round(oneDay.temp.max)}&#176;C </span> 
                            <span className="description"> {oneDay.weather[0].description}</span>
                            <span>{Math.round(oneDay.temp.min)}&#176;C</span>
                        </p>
                    </div>
                );
            })


        }


    </div>

}

export default WeatherCard;
