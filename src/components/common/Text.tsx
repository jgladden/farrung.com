import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { HTMLAttributes } from 'react'

export const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  body3: 'body3',
}

export const components = {
  a: 'a',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  caption: 'caption',
  span: 'span',
}

export const palettes = {
  primary: 'primary',
  neutral: 'neutral',
  link: 'link',
  action: 'action',
  alert: 'alert',
  contrast: 'contrast',
}

export const alignments = {
  left: 'left',
  right: 'right',
  center: 'center',
  justify: 'justify',
}

const mapVariants = (variant: keyof typeof variants) => {
  if (variant.includes('subtitle')) return 'h6'
  if (variant.includes('body')) return 'span'
  return variant
}

type TypeBaseProps = {
  variant?: keyof typeof variants
  color?: keyof typeof palettes
  align?: keyof typeof alignments
  bold?: boolean
  link?: boolean
  href?: string
  target?: string
  rel?: string
}

const StyledText = styled.p<TypeBaseProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  ${(props) => props.variant && { ...props.theme.typography[props.variant] }}
  ${(props) =>
    props.color &&
    css`
      color: ${props.theme.palette.text[props.color]};
    `}
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  ${(props) => props.bold && 'font-weight: bold;'}
  ${(props) =>
    props.link &&
    css`
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `}
  ${(props) =>
    props.href &&
    css`
      color: ${props.theme.palette.text.link};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `}
`

type Props = TypeBaseProps &
  HTMLAttributes<HTMLElement> & {
    children: React.ReactNode
    component?: keyof typeof components | undefined
    className?: string
  }

const Text = forwardRef(
  ({ bold, variant = 'body1', color = 'primary', children, component, className, align, ...rest }: Props, ref) => (
    <StyledText
      // @ts-ignore
      as={component || (rest.href ? 'a' : mapVariants(variant))}
      variant={variant}
      className={className}
      align={align}
      color={color}
      ref={ref as any}
      bold={bold}
      link={!!rest.onClick}
      {...rest}
    >
      {children}
    </StyledText>
  )
)

export default Text
