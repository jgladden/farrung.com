import React from 'react'
import ErrorMsg from './ErrorMsg'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    return this.state.hasError ? <ErrorMsg/> : this.props.children
  }
}
