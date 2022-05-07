import React from 'react'
import { waitForElementToBeRemoved, render, screen } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import wrap from '../../../utils/testUtils'
import { config } from '../../../utils/fetchUtils'
import { PortfolioItem } from '../api'

import App from '../'

const MOCK_PORTFOLIO_PAYLOAD: PortfolioItem[] = [
  {
    id: '15',
    type: 'print',
    title: 'Farrung',
    client: 'Farrung',
    description:
      "<p>As part of an internal marketing effort this poster was created to help promote design services provided by Farrung.com.<p> \r\n<p>The poster's design was intended to capture the company's youth oriented design in an effort to bring in new clients.</p>",
    year: '2001',
    month: '06',
    day: '22',
    imageorder: ['15_1.jpg'],
    link: '',
    display: '1',
    rating: '5',
  },
  {
    id: '17',
    type: 'print',
    title: 'Spike Radio',
    client: 'Spike Radio',
    description:
      '<p>Spike Radio is an online radio station streaming live DJ set along with videos of well known electronic music artists.</p>\r\n<p>The posters where used to promoted the company as an edgy, youth oriented online service.</p>',
    year: '2000',
    month: '11',
    day: '20',
    imageorder: ['17_1.jpg', '17_2.jpg', '17_3.jpg'],
    link: '',
    display: '1',
    rating: '7',
  },
]

fetchMock.get(`${config.BASE_URL}/portfolio.json`, {
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
    screen.getByText(`Title: ${MOCK_PORTFOLIO_PAYLOAD[0].title}`)
  })
})
