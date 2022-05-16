import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Footer from '../Footer'

export default function App() {
  // <Detail />
  return (
    <ContentContainer>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </ContentContainer>
  )
}

const ContentContainer = styled.section`
  padding: 0 ${({ theme }) => 2 * theme.spacing}px;
  position: relative;
  & > article {
    background-color: ${({ theme }) => theme.palette.background.main};
    padding: ${({ theme }) => `${5 * theme.spacing}px ${3 * theme.spacing}px`};
    margin-bottom: ${({ theme }) => 2 * theme.spacing}px;
  }
`
