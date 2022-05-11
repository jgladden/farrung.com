import React from 'react'

import Header from '../Header'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Footer from '../Footer'

export default function App() {
  return (
    <>
      <section id="contentWrapper" className={''}>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
    </>
  )
}

/*
(
    <>
      <section 
        id='contentWrapper'
        className={''}
      >    
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </section>
      <SliderNav />
      <Detail />
    </>      
  )
  */
