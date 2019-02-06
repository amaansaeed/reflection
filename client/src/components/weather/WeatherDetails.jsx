import React from 'react'
import styled from 'styled-components'

//  icons
import weatherIcons from './sub_components/weather_icons'

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
  top: 40%;
  transform: translate(0, -50%);

  & hr {
    width: 75%;
    margin-left: 0px;
    margin-top: 5px;
    height: 1px;
    border: none;
    background: lightslategray;
  }
`

const Centered = styled.div`
  width: max-content;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
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
              <Centered>
                <div>Precipitation</div>
                <hr />
                <div>
                  Chance of {!weather ? null : weatherToday.precipType}:{' '}
                  {!weather
                    ? null
                    : Math.round(weather.daily.data[0].precipProbability * 100)}
                  %
                </div>
                <div>
                  Time:{' '}
                  {!weather
                    ? null
                    : new Date(
                        weatherToday.precipIntensityMaxTime
                      ).toLocaleTimeString()}
                </div>
                <div>
                  Cloud Cover:{' '}
                  {!weather
                    ? null
                    : Math.round(weatherToday.cloudCover * 100)}%
                </div>
              </Centered>
            </div>

            <div>
              <Centered>CENTER</Centered>
            </div>

            <div>
              <Centered>
                <div>Day / Night</div>
                <hr />
                <div>
                  Sunrise:{' '}
                  {!weather
                    ? null
                    : new Date(weatherToday.sunriseTime).toLocaleTimeString()}
                </div>
                <div>
                  Sunset:{' '}
                  {!weather
                    ? null
                    : new Date(weatherToday.sunsetTime).toLocaleTimeString()}
                </div>
              </Centered>
            </div>
          </Content>
        </div>
        {!weather ? null : (
          <ForecastGrid>
            {// eslint-disable-next-line
            weather.daily.data.map((el, i) => {
              if (i < 4) {
                return (
                  <ForecastItem key={i}>
                    <div>tomorrow</div>
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
