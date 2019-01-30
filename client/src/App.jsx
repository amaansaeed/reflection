import React, { Component } from "react"

//  component
import Greeting from "./components/Greeting"
//  widgets
import Calendar from "./widgets/Calendar"
import News from "./widgets/News"
import Weather from "./widgets/Weather"
import SmartHome from "./widgets/SmartHome"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <News />
        <Weather />
        <SmartHome />
        <Calendar />

        <Greeting greeting="Reunited and it feels so good..." />
      </React.Fragment>
    )
  }
}

export default App
