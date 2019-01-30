import React from "react"

//  components
import Summary from "../components/calendar/CalendarSummary"
import Details from "../components/calendar/CalendarDetails"

//  container
import Container from "../containers/CalendarContainer"

const Calendar = ({ activeWidget, handleClick }) => {
  return (
    <React.Fragment>
      {activeWidget === "calendar" ? <Details /> : null}
      {activeWidget === null ? <Summary handleClick={handleClick} /> : null}
    </React.Fragment>
  )
}

export default Container(Calendar)
