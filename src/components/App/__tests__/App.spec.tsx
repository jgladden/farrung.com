import React from 'react'
import { waitForElementToBeRemoved, render, screen } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import wrap from '../../../utils/testUtils'
import { config } from '../../../utils/fetchUtils'
import { PortfolioItem } from '../api'

import App from '../'

const MOCK_PORTFOLIO_PAYLOAD: { Items: PortfolioItem[] } = {
  Items: [
    {
      id: '15',
      type: 'print',
      title: 'Farrung',
      client: 'Farrung',
      description:
        "<p>As part of an internal marketing effort this poster was created to help promote design services provided by Farrung.com.<p> \r\n<p>The poster's design was intended to capture the company's youth oriented design in an effort to bring in new clients.</p>",
      projectDate: '06/22/2001',
      imageorder: ['15_1.jpg'],
      display: '1',
      rating: '5',
    },
  ],
}

fetchMock.get(`${config.BASE_URL}/items`, {
  body: MOCK_PORTFOLIO_PAYLOAD,
  headers: { 'content-type': 'application/json' },
})

describe('portfolio spec', () => {
  beforeEach(async () => {
    render(wrap(<App />))
    screen.getByText(/loading.../i)
    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))
  })

  it('renders first portfolio item', () => {
    screen.getByText(MOCK_PORTFOLIO_PAYLOAD.Items[0].title)
  })
})
