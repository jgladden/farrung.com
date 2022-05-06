import { fetchResource } from '../../../utils/fetchUtils'

export type PortfolioItem = {
  id: string
  type: 'print' | 'online'
  title: string
  client: string
  description: string
  year: string
  month: string
  day: string
  imageorder: string[]
  link: string
  display: string
  rating: string
}

/*
{
  userId: number
  id: number
  title: string
  completed: boolean
}


type TodoParams = {
  id: number
}

*/

export const fetchTodos = async () => fetchResource<PortfolioItem[]>({ path: '/portfolio.json' })

// export const fetchTodo = async (params: TodoParams) => fetchResource<Todo>({ path: `/todos/${params.id}` })
