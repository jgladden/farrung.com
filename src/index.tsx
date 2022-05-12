import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import { QueryClient, QueryClientProvider } from 'react-query'

import ErrorBoundry from './components/ErrorBoundry'
import App from './components/App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundry>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundry>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
