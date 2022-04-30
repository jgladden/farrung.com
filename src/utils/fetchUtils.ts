export const config = {
  BASE_URL: 'https://jsonplaceholder.typicode.com'
}

export enum HttpMethods {
  GET = 'GET'
}

type FetchResourceParams = {
  url: string
  domain?: string
  params?: Record<string, string | number | null>
  method?: HttpMethods
}

export async function fetchResource<Payload>({url, domain, params, method}: FetchResourceParams): Promise<Payload> {
  const fetchUrl = `${domain || config.BASE_URL}${url}`
  let res
  switch(method) {
    default:
      res = await fetch(fetchUrl)
  }
  if (!res.ok) throw new Error(`Failed ${method || HttpMethods.GET} for ${fetchUrl} ${params ? `${params.toString()}` : ''}`)
  return await res.json()
}