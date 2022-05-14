import React from 'react'
import styled from 'styled-components'

import Text from '../common/Text'

export default function Footer() {
  return (
    <FooterContainer>
      <Text variant="meta" color="contrast">
        copyright 2011 farrung
      </Text>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: inline-block;
  margin: ${({ theme }) => 4 * theme.spacing}px 0;
  background-color: ${({ theme }) => theme.palette.background.dark};
  padding: ${({ theme }) => 2 * theme.spacing}px;
`
