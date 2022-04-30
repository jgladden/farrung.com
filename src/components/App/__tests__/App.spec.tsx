import React from 'react'
import { render, screen } from '@testing-library/react'
import wrap from '../../../utils/testUtils'

import App from '../'

jest.mock('react-query', () => ({
  ...jest.requireActual('react-router-dom'),
  useQuery: () => ({
    data: [{ id: 1, title: 'hello world' }],
  }),
}))

test('renders hello world', () => {
  render(wrap(<App />))
  screen.getByText(/hello world/i)
})
