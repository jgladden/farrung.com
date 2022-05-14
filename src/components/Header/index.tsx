import React from 'react'
import styled, { keyframes } from 'styled-components'

import imgLogo from '../../assets/img/site/logo.gif'
import Text from '../common/Text'

const TODAY = new Date()
const TODAY_DISPLAY = `${TODAY.getMonth() + 1}/${TODAY.getDate()}/${TODAY.getFullYear()}`

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <Text variant="h4" href="#about">
          About
        </Text>
        <Text variant="h4" href="#work">
          Work
        </Text>
        <Text variant="h4" href="#connect">
          Connect
        </Text>
        <Text variant="meta" component="p">
          {TODAY_DISPLAY}
        </Text>
      </NavContainer>
      <LogoContainer>
        <StyledLogo src={imgLogo} alt="Farrung Logo" />
      </LogoContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  padding-top: ${({ theme }) => 3 * theme.spacing}px;
`
const NavContainer = styled.nav`
  display: inline-block;
  padding: ${({ theme }) => `${2 * theme.spacing}px ${4 * theme.spacing}px`};
  background-color: ${({ theme }) => theme.palette.background.main};
  margin-bottom: ${({ theme }) => 4 * theme.spacing}px;
  a {
    padding-left: ${({ theme }) => 2 * theme.spacing}px;
  }
  a:first-child {
    padding-left: 0;
  }
`

const LogoContainer = styled.p`
  overflow: hidden;
  margin-bottom: ${({ theme }) => 3 * theme.spacing}px;
  position: relative;
`

const slideUp = keyframes`
  0% { top: 200px; }
  100% {  top: 0; }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 647px;
  position: relative;
  top: 200px;
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-name: ${slideUp};
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`
