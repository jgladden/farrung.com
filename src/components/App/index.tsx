import React from 'react'
import { useQuery } from 'react-query'
import { fetchTodos } from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import Text from '../common/Text'

export default function App() {
  const { isLoading, error, data } = useQuery('todos', fetchTodos)

  return error ? (
    <ErrorMsg error={error} />
  ) : (
    <Loader isLoading={isLoading}>
      <>
        {data &&
          data.map((todo) => (
            <Text component="p" key={todo.id}>
              {todo.title}
            </Text>
          ))}
      </>
    </Loader>
  )
}
