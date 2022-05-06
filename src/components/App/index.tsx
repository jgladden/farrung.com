import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { fetchTodos } from './api'

import Loader from '../common/Loader'
import ErrorMsg from '../common/ErrorMsg'
import Text from '../common/Text'

export default function App() {
  const [todoId, setTodoId] = useState<string | undefined>()
  const { isLoading, error, data } = useQuery('todos', fetchTodos)
  /*
  const todoQuery = useQuery(['todo', todoId], () => fetchTodo({ id: todoId as number }), {
    enabled: !!todoId,
  })
  */

  console.log(todoId)

  return error ? (
    <ErrorMsg error={error} />
  ) : (
    <Loader isLoading={isLoading}>
      <ItemContainer>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <Text component="p" onClick={() => setTodoId(item.id)}>
                {item.title}
              </Text>
              <img src={`/images/${item.imageorder[0]}`} alt={item.title} />
            </div>
          ))}
      </ItemContainer>
    </Loader>
  )
}

const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    padding: 10px;
    img {
      width: 100%;
    }
  }
`
