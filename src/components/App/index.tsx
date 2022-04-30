import React from 'react'
import { useQuery } from 'react-query'
import { fetchTodos } from './api'

export default function App() {
  const { isLoading, error, data } = useQuery('todos', fetchTodos)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{`${(error as Error).message}`}</p>
  return <div>{data && data.map((todo) => <p key={todo.id}>{todo.title}</p>)}</div>
}
