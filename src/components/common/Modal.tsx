import React from 'react'
import styled from 'styled-components'

type ModalProps = {
  open: boolean
  width?: string
  height?: string
}

type Props = ModalProps & {
  children: React.ReactNode
  onClose?: () => void
}

export default function Modal({ children, open, onClose, width = '80%', height = 'auto' }: Props) {
  const onCloseModal = () => {
    onClose && onClose()
  }

  return (
    <ModalContainer open={open} width={width} height={height}>
      <button onClick={onCloseModal}>X</button>
      {children}
    </ModalContainer>
  )
}

const ModalContainer = styled.div<ModalProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  background: white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #333;
`
