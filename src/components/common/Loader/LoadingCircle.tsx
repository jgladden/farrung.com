import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function LoadingCircle() {
  return (
    <SpinnerContainer>
      <div />
    </SpinnerContainer>
  )
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100px;
  & > div {
    border: ${({ theme }) => `${theme.spacing}px solid ${theme.palette.background.light}`};
    border-top: ${({ theme }) => `${theme.spacing}px solid ${theme.palette.background.link}`};
    width: ${({ theme }) => 6 * theme.spacing}px;
    height: ${({ theme }) => 6 * theme.spacing}px;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`
