import React, { Component } from "react"
import { connect } from "react-redux"
import http from "../services/http"

//  actions
import { selectWidget, unselectWidget } from "../actions/actions"

const Wrapper = WrappedComponent => {
  class WeatherContainer extends Component {
    state = { weather: null }

    componentDidMount = async () => {
      const { data: weather } = await http.get("/weather")
      console.log(weather)
      this.setState({ weather })
    }

    handleSelect = ({ currentTarget: e }) => {
      const widget = e.getAttribute("name")
      this.props.selectWidget(widget)
    }

    render() {
      return <WrappedComponent handleClick={this.handleSelect} {...this.props} {...this.state} />
    }
  }

  const mapStateToProps = state => ({
    activeWidget: state.activeWidget
  })

  const mapDispatchToProps = dispatch => ({
    selectWidget: widget => {
      dispatch(selectWidget(widget))
    },
    unselectWidget: () => {
      dispatch(unselectWidget)
    }
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WeatherContainer)
}

export default Wrapper
