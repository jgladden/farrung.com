import React from 'react'

type Props = {
  error: any
}
export default function ErrorMsg({ error }: Props) {
  return <p>{`${(error as Error).message}`}</p>
}
