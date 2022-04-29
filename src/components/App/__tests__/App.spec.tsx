import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../'

test('renders hello world', () => {
  render(<App />)
  screen.getByText(/hello world/i)
})
