import { fetchResource } from '../../../utils/fetchUtils'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const fetchTodos = async () => fetchResource<Todo[]>({ url: '/todos' })
