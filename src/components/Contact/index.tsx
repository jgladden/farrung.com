import React from 'react'
import styled from 'styled-components'

import Text from '../common/Text'

export default function Contact() {
  //       <FormContainer />
  return (
    <ConnectContainer id="connectWrapper">
      <Text variant="h1" component="h1" id="connect">
        CONNECT
      </Text>
      <Text variant="h2" component="h2" color="neutral">
        smart brand messages are concise not comprehensive
      </Text>
      <Text variant="h3" component="h3" color="neutral">
        we say more with less
      </Text>
      <Text variant="h3" component="h3" color="neutral">
        TALK TO US
      </Text>
      <Text variant="meta" component="p">
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
