import React from 'react'
import styled from 'styled-components'
import { PortfolioType, portfolioTypes } from '../api'

import Text from '../../common/Text'

type Props = {
  selectedType: PortfolioType
  setSelectedType: React.Dispatch<React.SetStateAction<PortfolioType>>
}

export default function PortfolioNav({ selectedType, setSelectedType }: Props) {
  return (
    <StyledNav id="portfolioNav">
      {portfolioTypes.map((type) => (
        <Text
          key={type}
          component="a"
          onClick={() => setSelectedType(type)}
          className={type === selectedType ? 'selected' : ''}
        >
          {type.toUpperCase()}
        </Text>
      ))}
    </StyledNav>
  )
}

const StyledNav = styled.div`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing}px;
  a {
    color: #fff;
    margin-right: 10px;
    font-size: 11px;
    background-color: #000;
    padding: ${({ theme }) => theme.spacing}px ${({ theme }) => 2 * theme.spacing}px;
  }

  a:hover {
    background-color: #ff6f6f;
  }
`
