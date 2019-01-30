import React from "react"
import styled from "styled-components"

//  sub-components
import DaysForecast from "./sub-components/DaysForecast"

//  styled components
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 5px;
  width: 60vw;
  height: 70vh;
  padding: 30px 40px;
`

const Title = styled.div`
  font-size: 30px;
  text-align: center;
`

const Hr = styled.div`
  width: 80%;
  margin: auto;
  border: none;
  height: 1px;
  background: black;
`

const Content = styled.div``

const UpperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Heading = styled.div`
  text-align: center;
`

const WeatherDetails = ({ weather }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Weather</Title>
        <Hr />
        <Content>
          <UpperGrid>
            <div>
              <Heading>Currently</Heading>
              <div>temperature: {!weather ? null : weather.currently.apparentTemperature}</div>
              <div>summary: {!weather ? null : weather.currently.summary}</div>
              <div>humidity: {!weather ? null : weather.currently.humidity}</div>
              <div>visibility: {!weather ? null : weather.currently.visibility}</div>
              <div>
                precipitation chance: {!weather ? null : weather.currently.precipProbability * 100}%
              </div>
              <div>uv index: {!weather ? null : weather.currently.uvIndex}</div>
              <div>wind bearing: {!weather ? null : weather.currently.windBearing}</div>
              <div>wind gust: {!weather ? null : weather.currently.windGust}</div>
              <div>wind speed: {!weather ? null : weather.currently.windSpeed}</div>
            </div>
            <div>
              <Heading>Today</Heading>
              <div>
                Temperature Hi: {!weather ? null : weather.daily.data[0].apparentTemperatureHigh}
              </div>
              <div>
                Temperature Low: {!weather ? null : weather.daily.data[0].apparentTemperatureLow}
              </div>
              <div>Summary: {!weather ? null : weather.daily.data[0].summary}</div>
              <div>
                Precipitation chance:{" "}
                {!weather ? null : weather.daily.data[0].precipProbability * 100}%
              </div>
              <div>Precipitation type: {!weather ? null : weather.daily.data[0].precipType}</div>
              <div>
                Precipitation time:{" "}
                {!weather
                  ? null
                  : new Date(weather.daily.data[0].precipIntensityMaxTime).toLocaleTimeString()}
              </div>

              <div>
                sunrise:{" "}
                {!weather ? null : new Date(weather.daily.data[0].sunriseTime).toLocaleTimeString()}
              </div>
              <div>
                sunset:{" "}
                {!weather ? null : new Date(weather.daily.data[0].sunsetTime).toLocaleTimeString()}
              </div>
            </div>
          </UpperGrid>
          {!weather ? null : (
            <ForecastGrid>
              <DaysForecast day={weather.daily.data[1]} when="tomorrow" />
              <DaysForecast
                day={weather.daily.data[2]}
                when={new Date(weather.daily.data[2].time).toLocaleDateString()}
              />
              <DaysForecast
                day={weather.daily.data[3]}
                when={new Date(weather.daily.data[3].time).toLocaleDateString()}
              />
            </ForecastGrid>
          )}
        </Content>
      </Wrapper>
    </React.Fragment>
  )
}

export default WeatherDetails
