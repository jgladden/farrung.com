import React from 'react'
// import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'

// const queryClient = new QueryClient()

export default function wrap(children: JSX.Element) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
