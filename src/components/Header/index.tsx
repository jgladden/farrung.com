import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'

import imgLogo from '../../assets/img/site/logo.gif'
import Text from '../common/Text'

const TODAY = new Date()
const TODAY_DISPLAY = `${TODAY.getMonth() + 1}/${TODAY.getDate()}/${TODAY.getFullYear()}`

export default function Header() {
  const { t } = useTranslation()
  return (
    <HeaderContainer>
      <NavContainer>
        <Text href="#about">{t('header.aboutCta')}</Text>
        <Text href="#work">{t('header.workCta')}</Text>
        <Text href="#connect">{t('header.connectCta')}</Text>
        <StyledDate>{TODAY_DISPLAY}</StyledDate>
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
  padding: 25px 15px 10px 15px;
  background-color: #fff;
  float: left;
  margin-bottom: ${({ theme }) => 4 * theme.spacing}px;
  overflow: hidden;
  width: auto;

  a {
    color: #333;
    padding-left: ${({ theme }) => 2 * theme.spacing}px;
    font-family: DinAlternateLight;
    font-size: 30px;
    letter-spacing: -0.07em;
  }

  a:first-child {
    padding-left: 0;
  }

  a:hover {
    color: #ff6f6f;
  }
`
const StyledDate = styled.p`
  padding-top: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  color: #333333;
`
const LogoContainer = styled.p`
  clear: left;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
`

const slideUp = keyframes`
  0% { 
    top: 200px;
  }
  100% { 
    top: 0;
  }
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
