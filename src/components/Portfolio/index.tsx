import React, { useState, useMemo } from 'react'
import './styles.css'
import { useQuery } from 'react-query'
import { fetchPortfolio, PortfolioItem, PortfolioType, portfolioTypes } from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import PortfolioNav from './PortfolioNav'
import PortfolioList from './PortfolioList'

export type SortedItems = Record<PortfolioType, PortfolioItem[]>

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<PortfolioType>(portfolioTypes[0])
  const { isLoading, error, data } = useQuery('portfolio', fetchPortfolio)

  const sortedItems = useMemo(() => {
    const sortedItems: SortedItems = {} as SortedItems
    if (data?.Items) {
      const sortByRating = data.Items.sort((a, b) => parseInt(b.rating) - parseInt(a.rating))
      sortByRating.forEach((item) => {
        if (!sortedItems[item.type]) sortedItems[item.type] = []
        sortedItems[item.type].push(item)
      })
    }
    return sortedItems
  }, [data])

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
            <PortfolioList items={sortedItems[selectedType]} />
          </div>
        )}
      </article>
    </Loader>
  )
}
