import React from 'react'
import styled from 'styled-components'
import { PortfolioType, portfolioTypes } from '../api'

import Text from '../../common/Text'

type Props = {
  selectedType: PortfolioType
  setSelectedType: React.Dispatch<React.SetStateAction<PortfolioType>>
}

export default function PortfolioNav({ selectedType, setSelectedType }: Props) {
  console.log(selectedType)
  return (
    <StyledNav id="portfolioNav">
      {portfolioTypes.map((type) => (
        <li key={type}>
          <Text component="a" onClick={() => setSelectedType(type)}>
            {type.toUpperCase()}
          </Text>
        </li>
      ))}
    </StyledNav>
  )
}

const StyledNav = styled.ul`
  display: flex;
  padding-left: ${({ theme }) => theme.spacing}px;
  a {
    color: #fff;
  }
  li {
    margin-right: 10px;
    color: #fff;
    font-size: 11px;
    background-color: #000;
    padding: ${({ theme }) => theme.spacing}px ${({ theme }) => 2 * theme.spacing}px;
  }

  li:hover {
    color: #333333;
    background-color: #ff6f6f;
  }
`
