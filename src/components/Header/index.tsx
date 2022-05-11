import React from 'react'
import './styles.css'
import imgLogo from '../../assets/img/site/logo.gif'

const TODAY = new Date()
const TODAY_DISPLAY = `${TODAY.getMonth() + 1}/${TODAY.getDate()}/${TODAY.getFullYear()}`

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#connect">connect</a>
          </li>
        </ul>
        <p id="date">{TODAY_DISPLAY}</p>
      </nav>
      <div id="logoWrapper">
        <img id="logo" src={imgLogo} alt="Farrung Logo" />
      </div>
    </header>
  )
}
