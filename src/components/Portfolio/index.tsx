import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { fetchPortfolio, PortfolioItem, PortfolioType, portfolioTypes } from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import Modal from '../common/Modal'
import PortfolioNav from './PortfolioNav'
import PortfolioList from './PortfolioList'
import PortfolioModal from './PortfolioModal'

export type SortedItems = Record<PortfolioType, PortfolioItem[]>

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<PortfolioType>(portfolioTypes[0])
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>()
  const portfolioQuery = useQuery('portfolio', fetchPortfolio)

  const sortedItems = useMemo(() => {
    const sortedItems: SortedItems = {} as SortedItems
    const portfolioItems = portfolioQuery.data?.Items
    if (portfolioItems) {
      const sortByRating = portfolioItems.sort((a, b) => parseInt(b.rating) - parseInt(a.rating))
      sortByRating.forEach((item) => {
        if (!sortedItems[item.type]) sortedItems[item.type] = []
        sortedItems[item.type].push(item)
      })
    }
    return sortedItems
  }, [portfolioQuery])

  const onCloseModal = () => {
    setSelectedItemId(undefined)
  }

  return portfolioQuery.error ? (
    <ErrorMsg error={portfolioQuery.error} />
  ) : (
    <Loader isLoading={portfolioQuery.isLoading}>
      <>
        <Modal open={!!selectedItemId} onClose={onCloseModal} width="100%" height="100%">
          {selectedItemId && (
            <PortfolioModal
              items={sortedItems[selectedType]}
              setSelectedItemId={setSelectedItemId}
              selectedItemId={selectedItemId}
            />
          )}
        </Modal>
        <article>
          <h1 id="work">WORK</h1>
          <h2>a picture is worth a thousand words</h2>
          <h3>cliche for a reason</h3>
          {portfolioQuery.data && (
            <PortfolioContainer>
              <PortfolioNav selectedType={selectedType} setSelectedType={setSelectedType} />
              <PortfolioList
                setSelectedItemId={setSelectedItemId}
                items={sortedItems[selectedType]}
              />
            </PortfolioContainer>
          )}
        </article>
      </>
    </Loader>
  )
}

const PortfolioContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing}px;
`
