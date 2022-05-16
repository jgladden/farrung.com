import React from 'react'

import LoadingCircle from './LoadingCircle'

type Props = {
  isLoading: boolean
  children: JSX.Element
}
export default function Loader({ isLoading, children }: Props) {
  return isLoading ? <LoadingCircle /> : children
}
