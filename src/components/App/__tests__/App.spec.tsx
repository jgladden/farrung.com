import React from 'react'
import { render, screen } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import wrap from '../../../utils/testUtils'
import { config } from '../../../utils/fetchUtils'

import App from '../'

fetchMock.get(`${config.BASE_URL}/todos`, {
  body: [{ title: 'hello world', id: 1 }],
  headers: { 'content-type': 'application/json' },
})

test('renders hello world', async () => {
  render(wrap(<App />))
  await screen.findByText(/hello world/i)
})
