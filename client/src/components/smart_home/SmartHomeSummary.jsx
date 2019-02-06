import React from 'react'
import styled from 'styled-components'

//  container

//  styled components
const Wrapper = styled.div`
  cursor: pointer;
  max-width: 25vw;
  /* height: 40vh; */
  position: fixed;
  bottom: 30px;
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

const Content = styled.div`
  overflow: scroll;
  max-height: 80%;
`

const Switch = styled.div`
  margin-bottom: 7px;
  display: grid;
  grid-template-columns: auto max-content;
`

const SwitchName = styled.div`
  margin-right: 25px;
`

const On = styled.div`
  padding: 4px 7px;
  border-radius: 3px;
  /* background: green; */
  background: rgba(0, 255, 0, 0.15);
`

const Off = styled.div`
  padding: 3px 5px;
  border-radius: 3px;
  /* background: red; */
  background: rgba(255, 0, 0, 0.15);
`

const SmartHomeSummary = ({ relays, handleClick }) => {
  return (
    <Wrapper name="smart-home" onClick={handleClick}>
      <Title>Smart Home</Title>
      <Hr />
      <Content>
        {!relays
          ? null
          : relays.map((relay, i) => (
              <Switch key={i}>
                <SwitchName>
                  {relay.switchName === ''
                    ? `Switch ${relay.switchNumber}`
                    : relay.switchName}
                  :
                </SwitchName>
                <div>{relay.isOn ? <On>on</On> : <Off>off</Off>}</div>
              </Switch>
            ))}
      </Content>
    </Wrapper>
  )
}

export default SmartHomeSummary
