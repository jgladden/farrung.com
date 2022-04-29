import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './components/constants/theme'

import ErrorBoundry from './components/ErrorBoundry'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundry>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ErrorBoundry>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
