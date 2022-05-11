import { fetchResource, HttpMethods } from '../../../utils/fetchUtils'

export enum PortfolioType {
  ONLINE = 'online',
  PRINT = 'print',
}

export const portfolioTypes = Object.values(PortfolioType) as Array<PortfolioType>

export type PortfolioItem = {
  id: string
  type: PortfolioType
  title: string
  client: string
  description: string
  projectDate: number | string | null
  imageorder: string[]
  display: string
  rating: string
}

export const fetchPortfolio = async () =>
  fetchResource<{ Items: PortfolioItem[] }>({
    path: '/items',
  })

export const fetchPortfolioItem = async (params: { id: string }) =>
  fetchResource<PortfolioItem>({
    path: `/items/${params.id}`,
  })

export const deletePortfolioItem = async (params: { id: string }) =>
  fetchResource<PortfolioItem>({
    path: `/items/${params.id}`,
    method: HttpMethods.DELETE,
  })

export const createPortfolioItem = async (params: PortfolioItem) =>
  fetchResource<string>({
    path: '/items',
    params,
    method: HttpMethods.PUT,
  })
