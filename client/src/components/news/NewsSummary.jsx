import React from "react"
import styled from "styled-components"

//  styled components
const Wrapper = styled.div`
  cursor: pointer;
  max-width: 25vw;
  height: 40vh;
  position: fixed;
  bottom: 30px;
  right: 30px;

  background: white;
  border-radius: 4px;
  padding: 20px 30px;
`

const Title = styled.div`
  text-align: right;
  font-size: 16px;
`

const Hr = styled.hr`
  width: 70%;
  margin-top: 3px;
  margin-right: 0;
  margin-bottom: 20px;
  border: none;
  height: 1px;
  background: slategray;
`

const Content = styled.div`
  max-height: 80%;
  overflow: scroll;
`

const NewsItem = styled.div`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 300;
`

const NewsSummary = ({ handleClick, news }) => {
  return (
    <React.Fragment>
      <Wrapper name="news" onClick={handleClick}>
        <Title>News</Title>
        <Hr />
        <Content>
          {!news ? null : news.map((el, i) => <NewsItem key={i}>{el.title}</NewsItem>)}
        </Content>
      </Wrapper>
    </React.Fragment>
  )
}

export default NewsSummary
