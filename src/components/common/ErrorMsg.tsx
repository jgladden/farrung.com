import React from 'react'
import Text from './Text'

type Props = {
  error: any
}
export default function ErrorMsg({ error }: Props) {
  return <Text>{`${(error as Error).message}`}</Text>
}
