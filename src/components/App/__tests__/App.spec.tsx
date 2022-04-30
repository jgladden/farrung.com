import React from 'react'
import { waitForElementToBeRemoved, render, screen } from '@testing-library/react'
import fetchMock from 'fetch-mock'
import wrap from '../../../utils/testUtils'
import { config } from '../../../utils/fetchUtils'
import { Todo } from '../api'

import App from '../'

const MOCK_TODOS_PAYLOAD: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'Todo title one',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'Todo title two',
    completed: false,
  },
]

fetchMock.get(`${config.BASE_URL}/todos`, {
  body: MOCK_TODOS_PAYLOAD,
  headers: { 'content-type': 'application/json' },
})

describe('todos test', () => {
  beforeEach(async () => {
    render(wrap(<App />))
    screen.getByText(/loading.../i)
    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))
  })

  it('renders first todo', () => {
    screen.getByText(MOCK_TODOS_PAYLOAD[0].title)
  })
})
