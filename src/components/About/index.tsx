import React from 'react'
import styled from 'styled-components'
import imgProcess from '../../assets/img/site/process.jpg'

import Text from '../common/Text'

export default function About() {
  return (
    <article id="aboutWrapper">
      <h1 id="about">ABOUT</h1>
      <h2>a winning message requires you speak the language</h2>
      <h3>we can translate</h3>
      <DetailContainer>
        <DetailText>
          <h5>The big idea.</h5>
          <Text component="p">
            You know your customers. We know how to reach them. At Farrung we specialize in helping
            you translate and position your message to ensure maximum impact with your customers.
          </Text>
          <Text component="p">
            A successful endeavor requires a smart plan. We have one, a process we have developed
            through trial and error that guides us every step of the way.
          </Text>
        </DetailText>
        <DetailImg>
          <img src={imgProcess} alt="chart demonstrating farrung's process" />
        </DetailImg>
      </DetailContainer>
    </article>
  )
}

const DetailContainer = styled.div`
  overflow: auto;
  width: auto;
  display: flex;

  h5 {
    font-size: 20px;
  }

  p {
    color: #666666;
    padding-top: ${({ theme }) => theme.spacing}px;
    font-size: 14px;
  }

  @media only screen and (max-width: 900px) {
    & div {
      float: none;
      width: 100%;
    }
  }
`

const DetailText = styled.div`
  width: 30%;
  max-width: 390px;
  @media only screen and (max-width: 900px) {
    max-width: 100%;
  }
`

const DetailImg = styled.div`
  width: 70%;
  max-width: 668px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    padding-top: ${({ theme }) => 2 * theme.spacing}px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
