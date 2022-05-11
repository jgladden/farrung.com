import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <p>copyright 2011 farrung</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  overflow: auto;
  width: auto;

  p {
    margin: ${({ theme }) => 4 * theme.spacing}px 0;
    float: left;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12px;
    background-color: #000;
    padding: ${({ theme }) => 2 * theme.spacing}px;
  }
`
