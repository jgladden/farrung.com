import React from 'react'
import styled from 'styled-components'
import imgProcess from '../../assets/img/site/process.jpg'

import Text, { TextColor, TextComponent } from '../common/Text'

export default function About() {
  return (
    <article id="aboutWrapper">
      <Text component={TextComponent.H1} id="about">
        ABOUT
      </Text>
      <Text component={TextComponent.H2} color={TextColor.NEUTRAL}>
        a winning message requires you speak the language
      </Text>
      <Text component={TextComponent.H3} color={TextColor.NEUTRAL}>
        we can translate
      </Text>
      <DetailContainer>
        <DetailText>
          <Text component={TextComponent.H5}>The big idea.</Text>
          <Text>
            You know your customers. We know how to reach them. At Farrung we specialize in helping
            you translate and position your message to ensure maximum impact with your customers.
          </Text>
          <Text>
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

  p {
    padding-top: ${({ theme }) => theme.spacing}px;
  }

  @media only screen and (max-width: 900px) {
    display: block;
    div {
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
