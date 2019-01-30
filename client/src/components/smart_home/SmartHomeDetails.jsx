import React from "react"
import styled from "styled-components"

//  components
import ToggleCheckBox from "./sub-components/ToggleCheckbox"

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
  margin: 25px auto;
  border: none;
  height: 1px;
  background: black;
`

const Content = styled.div`
  overflow: scroll;
  max-height: 80%;
`

const Switch = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  margin-bottom: 30px;
  padding: 0 30px;

  & > div:nth-child(1) div {
    /* text-align: right; */
    font-size: 30px;
    margin: 0px 20px;
    /* padding-left: 20px; */

    position: relative;
    top: 50%;
    transform: translate(0, -50%);
  }
`

const SmartHomeDetails = ({ relays }) => {
  return (
    <Wrapper>
      <Title>Smart Home</Title>
      <Hr />
      <Content>
        {!relays
          ? null
          : relays.map((relay, i) => (
              <Switch key={i}>
                <div>
                  <div>
                    {relay.switchName === "" ? `Switch ${relay.switchNumber}` : relay.switchName}:
                  </div>
                </div>
                <ToggleCheckBox />
              </Switch>
            ))}
      </Content>
    </Wrapper>
  )
}

export default SmartHomeDetails
