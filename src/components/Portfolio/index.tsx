import React from 'react'
import './styles.css'
// import PortfolioNav from 'components/Website/Portfolio/Nav/Nav';
import PortfolioList from './PortfolioList'

export default function Portfolio() {
  // <a name="work"></a>
  return (
    <article id="portfolioWrapper">
      <h1>WORK</h1>
      <h2>a picture is worth a thousand words</h2>
      <h3>cliche for a reason</h3>
      <div id="portfolio">
        <PortfolioList />
      </div>
    </article>
  )
}
