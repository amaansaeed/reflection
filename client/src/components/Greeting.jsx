import React from "react"
import styled from "styled-components"

//  container
import Container from "../containers/GreetingContainer"

//  styled components
const Wrapper = styled.div`
  width: max-content;
  padding: 15px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 20px;
  font-weight: 600;

  background: white;
  border-radius: 4px;
  padding: 20px 30px;
`

const GreetingWidget = ({ greeting }) => {
  return <Wrapper>{greeting}</Wrapper>
}

export default Container(GreetingWidget)
