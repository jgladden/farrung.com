import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import {
  fetchPortfolio,
  fetchPortfolioItem,
  PortfolioItem,
  PortfolioType,
  portfolioTypes,
} from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import PortfolioNav from './PortfolioNav'
import PortfolioList from './PortfolioList'

export type SortedItems = Record<PortfolioType, PortfolioItem[]>

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<PortfolioType>(portfolioTypes[0])
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>()
  const { isLoading, error, data } = useQuery('portfolio', fetchPortfolio)
  const selectedItem = useQuery(
    ['selectedItem', selectedItemId],
    () => fetchPortfolioItem({ id: selectedItemId as string }),
    {
      enabled: !!selectedItemId,
    }
  )

  console.log(selectedItem)

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
          <PortfolioContainer>
            <PortfolioNav selectedType={selectedType} setSelectedType={setSelectedType} />
            <PortfolioList
              setSelectedItemId={setSelectedItemId}
              items={sortedItems[selectedType]}
            />
          </PortfolioContainer>
        )}
      </article>
    </Loader>
  )
}

const PortfolioContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing}px;
`
