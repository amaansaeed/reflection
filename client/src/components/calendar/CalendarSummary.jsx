import React from "react"
import styled from "styled-components"

//  container
import TimeContainer from "../../containers/TimeContainer"

//  styled components
const Wrapper = styled.div`
  cursor: pointer;
  max-width: 25vw;
  height: 40vh;
  position: fixed;
  top: 30px;
  left: 30px;

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

const CalendarSummary = ({ date, time }) => (
  <Wrapper>
    <div>{date.day}</div>
    <div>
      {date.month} {date.date}
      {date.el}, {date.year}
    </div>
    <div>
      {time.hr}:{time.min} {time.sec}
    </div>
    <Title>Upcoming events</Title>
    <Hr />
  </Wrapper>
)

export default TimeContainer(CalendarSummary)
