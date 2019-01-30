import React, { Component } from "react"
import http from "../services/http"
import { connect } from "react-redux"

//  actions
import { selectWidget, unselectWidget } from "../actions/actions"

const Wrapper = WrappedComponent => {
  class SmartHomeContainer extends Component {
    state = { relays: null }

    componentDidMount = async () => {
      const { data: relays } = await http.get("/smart-home/relays")
      console.log(relays)
      this.setState({ relays })
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
  )(SmartHomeContainer)
}

export default Wrapper
