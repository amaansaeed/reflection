import React, { Component } from "react"
import { connect } from "react-redux"
import http from "../services/http"

//  actions
import { selectWidget, unselectWidget } from "../actions/actions"

const Wrapper = WrappedComponent => {
  class NewsContainer extends Component {
    state = { news: null }

    handleSelect = ({ currentTarget: e }) => {
      const widget = e.getAttribute("name")
      this.props.selectWidget(widget)
    }

    componentDidMount = async () => {
      const { data: news } = await http.get("/news")
      console.log(news.articles)
      this.setState({ news: news.articles })
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
  )(NewsContainer)
}

export default Wrapper
