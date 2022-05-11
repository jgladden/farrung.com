import React from 'react'
import './styles.css'
import imgProcess from '../../assets/img/site/process.jpg'

export default function About() {
  // <a name="about"></a>
  return (
    <article id="aboutWrapper">
      <h1>ABOUT</h1>
      <h2>a winning message requires you speak the language</h2>
      <h3>we can translate</h3>
      <div id="aboutDetail">
        <div id="aboutDetailTxt">
          <h5>The big idea.</h5>
          <p>
            You know your customers. We know how to reach them. At Farrung we specialize in helping you translate and
            position your message to ensure maximum impact with your customers.
          </p>
          <p>
            A successful endeavor requires a smart plan. We have one, a process we have developed through trial and
            error that guides us every step of the way.
          </p>
        </div>
        <div id="aboutDetailImg">
          <img src={imgProcess} alt="chart demonstrating farrung's process" />
        </div>
      </div>
    </article>
  )
}
