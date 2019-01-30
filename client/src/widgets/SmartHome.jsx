import React from "react"

//  components
import Summary from "../components/smart_home/SmartHomeSummary"
import Details from "../components/smart_home/SmartHomeDetails"

//  container
import Container from "../containers/SmartHomeContainer"

const SmartHome = ({ activeWidget, relays, handleClick }) => {
  return (
    <React.Fragment>
      {activeWidget === "smart-home" ? <Details relays={relays} /> : null}
      {activeWidget === null ? <Summary handleClick={handleClick} relays={relays} /> : null}
    </React.Fragment>
  )
}

export default Container(SmartHome)
