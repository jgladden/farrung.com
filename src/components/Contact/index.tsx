import React from 'react'
import styled from 'styled-components'

import Text from '../common/Text'

export default function Contact() {
  //       <FormContainer />
  return (
    <ConnectContainer id="connectWrapper">
      <h1 id="connect">CONNECT</h1>
      <h2>smart brand messages are concise not comprehensive</h2>
      <h3>we say more with less</h3>
      <h3>TALK TO US</h3>
      <Text component="p">| 1322 N. Orange Dr., Suite #202 | Los Angeles, CA 90028 | P: 323.875.8319 |</Text>
    </ConnectContainer>
  )
}

const ConnectContainer = styled.article`
  border-bottom: 0 !important;
  p {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12px;
    color: #333333;
    margin-top: ${({ theme }) => 2 * theme.spacing}px;
  }
`
