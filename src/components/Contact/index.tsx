import React from 'react'
import styled from 'styled-components'

import Text, { TextColor, TextComponent, TextVariant } from '../common/Text'

export default function Contact() {
  //       <FormContainer />
  return (
    <ConnectContainer id="connectWrapper">
      <Text component={TextComponent.H1} id="connect">
        CONNECT
      </Text>
      <Text component={TextComponent.H2} color={TextColor.NEUTRAL}>
        smart brand messages are concise not comprehensive
      </Text>
      <Text component={TextComponent.H3} color={TextColor.NEUTRAL}>
        we say more with less
      </Text>
      <Text component={TextComponent.H3} color={TextColor.NEUTRAL}>
        TALK TO US
      </Text>
      <Text variant={TextVariant.META} component={TextComponent.SPAN}>
        | 1322 N. Orange Dr., Suite #202 | Los Angeles, CA 90028 | P: 323.875.8319 |
      </Text>
    </ConnectContainer>
  )
}

const ConnectContainer = styled.article`
  margin-bottom: 0;
  p {
    margin-top: ${({ theme }) => 2 * theme.spacing}px;
  }
`
