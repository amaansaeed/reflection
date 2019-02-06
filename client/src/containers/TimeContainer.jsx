import React, { Component } from "react"

const days = ["Sundays", "Mondays", "Tuesdays", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

//  functions
const timeCorrection = i => {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

const getTime = () => {
  let hr = new Date().getHours()
  let min = timeCorrection(new Date().getMinutes())
  let sec = timeCorrection(new Date().getSeconds())
  return { hr: hr, min: min, sec: sec }
}

const getDay = () => {
  let day = days[new Date().getDay()]
  return day
}

const getDate = () => {
  let el
  let date = new Date().getDate()
  let month = months[new Date().getMonth()]
  let year = new Date().getFullYear()

  switch (date) {
    case 1 || 21 || 31:
      el = "st"
      break
    case 2 || 22:
      el = "nd"
      break
    case 3 || 23:
      el = "rd"
      break
    default:
      el = "th"
      break
  }

  return { el: el, date: date, month: month, year: year }
}

const Wrapper = WrappedComponent => {
  class TimeContainer extends Component {
    clock
    state = {
      time: new Date().toLocaleTimeString(),
      date: getDate(),
      day: getDay()
    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }

    componentDidMount = () => {
      this.clock = setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString(), date: getDate(), day: getDay() })
      }, 1 * 1000)
    }

    componentWillUnmount = () => {
      clearInterval(this.clock)
    }
  }
  return TimeContainer
}

export default Wrapper
