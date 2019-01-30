import React, { Component } from "react"
import { connect } from "react-redux"

//  actions
import { selectWidget, unselectWidget } from "../actions/actions"

const Wrapper = WrappedComponent => {
  class CalendarContainer extends Component {
    state = {}

    handleSelect = ({ currentTarget: e }) => {
      const widget = e.getAttribute("name")
      this.props.selectWidget(widget)
    }

    render() {
      return <WrappedComponent handleClick={this.handleSelect} {...this.props} />
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
  )(CalendarContainer)
}

export default Wrapper
