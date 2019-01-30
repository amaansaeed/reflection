import React from "react"
import styled from "styled-components"

//  styled componets
const PreSwitch = styled.div`
  width: 180px;
  height: 55px;
  position: relative;
`

const Label = styled.label`
  display: block;
  width: 80%;
  height: 100%;
  position: relative;
  background: #1f2736; /*#121823*/
  background: linear-gradient(#121823, #161d2b);
  border-radius: 30px 30px 30px 30px;
  box-shadow: inset 0 3px 8px 1px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.2);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`

const I = styled.i`
  display: block;
  height: 51px;
  width: 51px;
  position: absolute;
  left: 2px;
  top: 2px;
  z-index: 2;
  border-radius: inherit;
  background: #283446; /* Fallback */
  background: linear-gradient(#36455b, #283446);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 8px rgba(0, 0, 0, 0.3),
    0 12px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
`

const Span = styled.span`
  content: "";
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 17px;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background: #283446;
  background: gradient-gradient(#36455b, #283446);
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 10px rgba(185, 231, 253, 0), inset 0 0 8px rgba(0, 0, 0, 0.9),
    inset 0 -2px 5px rgba(0, 0, 0, 0.3), inset 0 -5px 5px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 2;
`

const Input = styled.input.attrs({ type: "checkbox" })`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const Switch = styled(PreSwitch)`
  & > ${Label} + ${Span} {
    content: "";
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 17px;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    background: #283446;
    background: gradient-gradient(#36455b, #283446);
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1),
      0 0 10px rgba(185, 231, 253, 0), inset 0 0 8px rgba(0, 0, 0, 0.9),
      inset 0 -2px 5px rgba(0, 0, 0, 0.3), inset 0 -5px 5px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: 2;
  }

  & > ${Input}:checked ~ ${Label} + ${Span} {
    content: "";
    display: inline-block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    transition: all 0.5s ease;
    z-index: 2;
    background: #b9f3fe;
    background: gradient-gradient(#ffffff, #77a1b9);
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1),
      0 0 10px rgba(100, 231, 253, 1), inset 0 0 8px rgba(61, 157, 247, 0.8),
      inset 0 -2px 5px rgba(185, 231, 253, 0.3), inset 0 -3px 8px rgba(185, 231, 253, 0.5);
  }

  & > ${Input}:checked ~ ${Label} > ${I} {
    left: auto;
    left: 63%;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 8px rgba(0, 0, 0, 0.3),
      0 8px 8px rgba(0, 0, 0, 0.3), inset -1px 0 1px #b9f3fe;
    transition: all 0.5s ease;
  }
`

const ToggleCheckbox = props => {
  return (
    <Switch>
      <Input type="checkbox" name="toggle" />
      <Label htmlFor="toggle">
        <I />
      </Label>
      <Span />
    </Switch>
  )
}

export default ToggleCheckbox
