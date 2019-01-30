import React from "react"
import styled from "styled-components"

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
  padding: 30px 50px;
`

const Title = styled.div`
  font-size: 30px;
  text-align: center;
`

const Hr = styled.div`
  width: 80%;
  margin: 15px auto;
  border: none;
  height: 1px;
  background: black;
`

const Content = styled.div`
  overflow: scroll;
  max-height: 80%;
`

const CalendarDetails = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Title>Calendar</Title>
        <Hr />
        <Content>EVENTS CONTENT</Content>
      </Wrapper>
    </React.Fragment>
  )
}

export default CalendarDetails
