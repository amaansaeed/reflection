import React from "react"
import styled from "styled-components"

//  styled components
const Wrapper = styled.div``

const DaysForecast = ({ day }) => {
  return (
    <div>
      <div>Icon: {day.icon}</div>
      <div>Hi: {day.apparentTemperatureHigh}</div>
      <div>Low: {day.apparentTemperatureLow}</div>
      <div>Chance of Precip: {day.precipProbability * 100}%</div>
      <div>Type of Percip: {day.precipType}</div>
      <div>Sunrise: {new Date(day.sunriseTime).toLocaleTimeString()}</div>
      <div>Sunset: {new Date(day.sunsetTime).toLocaleTimeString()}</div>

      <div>Summary: {day.summary}</div>
    </div>
  )
}

export default DaysForecast
