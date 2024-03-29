export const config = {
  BASE_URL: 'https://33wpflhok4.execute-api.us-east-1.amazonaws.com' // 'https://kv7ko48rl1.execute-api.us-west-1.amazonaws.com'
}

export enum HttpMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
}

type Options = {
  method: HttpMethods
  headers?: Record<string, string>
  body?: string
};

type FetchResourceParams = {
  path: string
  domain?: string
  params?: Record<string, any>
  method?: HttpMethods
}

export async function fetchResource<Payload>({path, domain = config.BASE_URL, params, method = HttpMethods.GET}: FetchResourceParams): Promise<Payload> {
    const options: Options = { method, headers: { 'Content-Type': 'application/json' }}
    let url = `${domain}${path}`
    switch (method) {
        case HttpMethods.POST:
        case HttpMethods.PATCH:
        case HttpMethods.PUT:
            options.body = JSON.stringify(params)
            break
        default:
          url = `${url}${params ? `?${new URLSearchParams(params as Record<string, string>)}` : ''}`;
    }

  const response = await fetch(url, options)
  if (response.ok) return await response.json()
    try {
        const payload = await response.json()
        throw new Error(`${url} ${payload.message}`)
    } catch {
      throw new Error(`Failed ${method} for ${url} ${params || ''}`)
    }
}

