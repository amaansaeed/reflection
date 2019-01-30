import React from "react"
import styled from "styled-components"

import icons from "./sub-components/WeatherIcons"

//  styled components
const Wrapper = styled.div`
  cursor: pointer;
  max-width: 25vw;
  /* height: 40vh; */
  position: fixed;
  top: 30px;
  right: 30px;

  background: white;
  border-radius: 4px;
  padding: 20px 30px;
`

const Title = styled.div`
  text-align: right;
  font-size: 16px;
`

const Hr = styled.hr`
  width: 70%;
  margin-top: 3px;
  margin-right: 0;
  margin-bottom: 20px;
  border: none;
  height: 1px;
  background: slategray;
`

const HiLo = styled.div`
  text-align: center;

  & > span {
    font-weight: 300;
  }
`

const Current = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 15px;

  text-align: center;

  & > div:nth-child(1) img {
    width: 60px;
    height: 60px;
  }

  & > div:nth-child(2) {
    font-size: 35px;
    font-weight: 300;
  }
`

const Centered = styled.div`
  width: max-content;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const WeatherSummary = ({ handleClick, weather }) => {
  return (
    <React.Fragment>
      <Wrapper name="weather" onClick={handleClick}>
        <Title>Weather</Title>
        <Hr />

        <Current>
          <div>
            <Centered>
              <img src={!weather ? null : icons[weather.currently.icon]} alt="sun-icon" />
            </Centered>
          </div>
          <div>
            <Centered>
              {!weather ? null : weather.currently.apparentTemperature.toFixed(1)}°
              <br />
              {!weather ? null : weather.currently.summary}
            </Centered>
          </div>
        </Current>

        <div>{!weather ? null : weather.daily.data[0].summary}</div>

        {/* <HiLo>
          Hi{" "}
          <span>{!weather ? null : weather.daily.data[0].apparentTemperatureHigh.toFixed(1)}°</span>{" "}
          | Lo{" "}
          <span>{!weather ? null : weather.daily.data[0].apparentTemperatureLow.toFixed(1)}°</span>
        </HiLo> */}
      </Wrapper>
    </React.Fragment>
  )
}

export default WeatherSummary
