import React from 'react'
import { useWeather } from '../context/WeatherContext'

function Dropdown() {

  const { cities, setCity, day } = useWeather();

  const changeCityName = (e) => {
    for (let i = 0; i < cities.length; i++) {
      if (e.target.value === cities[i].name) {
        setCity(cities[i]);
      }
    }
  }

  return (
    <form>
      <select name='name' id='name' onChange={changeCityName} value={cities.name}>
        {
          cities.map((item, i) => {
            return (
              <option key={i} value={item.name}>{item.name}</option>
            )
          })
        }
      </select>

      <h3>{new Date().getHours()}:{new Date().getMinutes()}
      <span></span>
      {day}
      <span></span>
      {new Date().toLocaleDateString("tr")}
      </h3>

    </form>
  )
}

export default Dropdown