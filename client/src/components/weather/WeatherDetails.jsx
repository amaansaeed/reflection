import React from 'react'
import styled from 'styled-components'

//  icons
import weatherIcons from './sub_components/weather_icons'

//  Days list
const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

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

  display: grid;
  grid-template-rows: max-content auto max-content;
`

const UpperGrid = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: auto max-content;
`

const Title = styled.div`
  text-align: left;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Subtitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 300;
`

const Hr = styled.div`
  width: 80%;
  /* margin: auto; */
  margin-left: 0;
  border: none;
  height: 1px;
  background: lightslategray;
`

const Icon = styled.div`
  & img {
    width: 100px;
    height: 100px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  & > div {
    padding: 0 15px;
  }

  & hr {
    width: 75%;
    margin-left: 0px;
    margin-top: 5px;
    height: 1px;
    border: none;
    background: lightslategray;
  }
`

const Metric = styled.div`
  display: grid;
  grid-template-columns: auto max-content;

  font-size: 14px;
  margin-bottom: 3px;
`

const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ForecastItem = styled.div`
  text-align: center;

  & > div:nth-child(1) {
    font-weight: 500;
    text-transform: capitalize;
  }

  & > div:nth-child(2) {
    margin: 5px 0;

    & img {
      width: 50px;
      height: 50px;
    }
  }

  & > div:nth-child(3) {
    font-size: 13px;
  }
`

const WeatherDetails = ({ weather }) => {
  const weatherToday = !weather ? null : weather.daily.data[0]
  return (
    <React.Fragment>
      <Wrapper>
        <UpperGrid>
          <div>
            <Title>Toronto</Title>
            <Subtitle>{!weather ? null : weatherToday.summary}</Subtitle>
            <Hr />
          </div>
          <div>
            <Icon>
              <img
                src={!weather ? null : weatherIcons[weather.currently.icon]}
                alt="icon"
              />
            </Icon>
            <div>
              {!weather
                ? null
                : `Hi ${Math.round(
                    weatherToday.apparentTemperatureHigh
                  )} | Lo ${Math.round(weatherToday.apparentTemperatureLow)}`}
            </div>
          </div>
        </UpperGrid>

        <div>
          <Content>
            <div>
              <div>Precipitation</div>
              <hr />
              <Metric>
                <div>
                  Chance of {!weather ? null : weatherToday.precipType}:
                </div>
                <div>
                  {!weather
                    ? null
                    : Math.round(weather.daily.data[0].precipProbability * 100)}
                  %
                </div>
              </Metric>
              <Metric>
                <div>Time:</div>
                <div>
                  {!weather
                    ? null
                    : new Date(
                        weatherToday.precipIntensityMaxTime * 1000
                      ).toLocaleTimeString()}
                </div>
              </Metric>
              <Metric>
                <div>Cloud Cover:</div>
                <div>
                  {!weather ? null : Math.round(weatherToday.cloudCover * 100)}%
                </div>
              </Metric>
            </div>



            <div>
              <div>Wind</div>
              <hr />
              <Metric>
                <div>Speed:</div>
                <div>
                  {!weather
                    ? null
                    : weatherToday.windSpeed.toFixed(1)} km/h
                </div>
              </Metric>
              <Metric>
                <div>Gusts:</div>
                <div>
                  {!weather
                    ? null
                    : weatherToday.windGust.toFixed(1)} km/h
                </div>
              </Metric>
            </div>

            <div>
              <div>Day / Night</div>
              <hr />
              <Metric>
                <div>Sunrise:</div>
                <div>
                  {!weather
                    ? null
                    : new Date(weatherToday.sunriseTime * 1000).toLocaleTimeString()}
                </div>
              </Metric>
              <Metric>
                <div>Sunset:</div>
                <div>
                  {!weather
                    ? null
                    : new Date(weatherToday.sunsetTime * 1000).toLocaleTimeString()}
                </div>
              </Metric>
            </div>
          </Content>
        </div>
        {!weather ? null : (
          <ForecastGrid>
            {// eslint-disable-next-line
            weather.daily.data.map((el, i) => {
              if (0 < i && i < 5) {
                return (
                  <ForecastItem key={i}>
                    <div>{i === 1 ? "Tomorrow" : daysList[new Date(el.time * 1000).getDay()]}</div>
                    <div>
                      <img src={weatherIcons[el.icon]} alt="icon" />
                    </div>
                    <div>
                      Hi {Math.round(el.apparentTemperatureHigh)}° | Lo{' '}
                      {Math.round(el.apparentTemperatureLow)}°
                    </div>
                  </ForecastItem>
                )
              }
            })}
          </ForecastGrid>
        )}
      </Wrapper>
    </React.Fragment>
  )
}

export default WeatherDetails
