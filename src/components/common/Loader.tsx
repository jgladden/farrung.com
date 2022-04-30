import React from 'react'
import Text from './Text'

type Props = {
  isLoading: boolean
  children: JSX.Element
}
export default function Loader({ isLoading, children }: Props) {
  return isLoading ? <Text>Loading...</Text> : children
}
