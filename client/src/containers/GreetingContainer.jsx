import React, { Component } from "react"
import { connect } from "react-redux"

const Wrapper = WrappedComponent => {
  class GreetingContainer extends Component {
    render() {
      return (
        <React.Fragment>
          {this.props.activeWidget ? null : <WrappedComponent {...this.props} />}
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = state => ({
    activeWidget: state.activeWidget
  })

  return connect(mapStateToProps)(GreetingContainer)
}

export default Wrapper
