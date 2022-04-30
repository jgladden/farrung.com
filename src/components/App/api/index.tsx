import { fetchResource } from '../../../utils/fetchUtils'

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const fetchTodos = async () => fetchResource<Todo[]>({ path: '/todos' })
