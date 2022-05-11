import React, { useState } from 'react'
import './styles.css'
import { useQuery } from 'react-query'
import { fetchPortfolio, PortfolioType, portfolioTypes } from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import PortfolioNav from './PortfolioNav'
import PortfolioList from './PortfolioList'

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<PortfolioType>(portfolioTypes[0])
  const { isLoading, error, data } = useQuery('portfolio', fetchPortfolio)

  return error ? (
    <ErrorMsg error={error} />
  ) : (
    <Loader isLoading={isLoading}>
      <article id="portfolioWrapper">
        <h1 id="work">WORK</h1>
        <h2>a picture is worth a thousand words</h2>
        <h3>cliche for a reason</h3>
        {data && (
          <div id="portfolio">
            <PortfolioNav selectedType={selectedType} setSelectedType={setSelectedType} />
            <PortfolioList selectedType={selectedType} items={data.Items} />
          </div>
        )}
      </article>
    </Loader>
  )
}
