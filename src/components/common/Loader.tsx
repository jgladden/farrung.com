import React from 'react'

type Props = {
  isLoading: boolean
  children: JSX.Element
}
export default function Loader({ isLoading, children }: Props) {
  return isLoading ? <p>Loading...</p> : children
}
