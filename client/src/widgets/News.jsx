import React from "react"

//  components
import Summary from "../components/news/NewsSummary"
import Details from "../components/news/NewsDetails"

//  container
import Container from "../containers/NewsContainer"

const News = ({ activeWidget, news, handleClick }) => {
  return (
    <React.Fragment>
      {activeWidget === "news" ? <Details news={news} /> : null}
      {activeWidget === null ? <Summary news={news} handleClick={handleClick} /> : null}
    </React.Fragment>
  )
}

export default Container(News)
