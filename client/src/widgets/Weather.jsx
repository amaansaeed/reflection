import React from "react"

//  components
import Summary from "../components/weather/WeatherSummary"
import Details from "../components/weather/WeatherDetails"

//  container
import Container from "../containers/WeatherContainer"

const Weather = ({ activeWidget, weather, handleClick }) => {
  return (
    <React.Fragment>
      {activeWidget === "weather" ? <Details weather={weather} /> : null}
      {activeWidget === null ? <Summary weather={weather} handleClick={handleClick} /> : null}
    </React.Fragment>
  )
}

export default Container(Weather)
