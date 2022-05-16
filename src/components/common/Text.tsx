import React from 'react'
import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export enum TextAlign {
  CENTER = 'center',
  JUSTIFY = 'justify',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum TextColor {
  ACTION = 'action',
  ALERT = 'alert',
  CONTRAST = 'contrast',
  DARK = 'dark',
  LINK = 'link',
  NEUTRAL = 'neutral',
  PRIMARY = 'primary',
}

export enum TextComponent {
  A = 'a',
  CAPTION = 'caption',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  P = 'p',
  SPAN = 'span',
}

export enum TextVariant {
  BODY1 = 'body1',
  BODY2 = 'body2',
  BODY3 = 'body3',
  BODY4 = 'body4',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  META = 'meta',
}

type TextProps = HTMLAttributes<HTMLElement> & {
  align?: TextAlign
  bold?: boolean
  children: React.ReactNode
  className?: string
  color?: TextColor
  component?: TextComponent | undefined
  href?: string
  link?: boolean
  target?: string
  variant?: TextVariant
}

const variantToComponent = (variant: TextVariant | undefined): TextComponent =>
  variant && (variant.includes('body') || variant === TextVariant.META)
    ? TextComponent.P
    : (variant as unknown as TextComponent)

export default function Text({
  align,
  bold,
  children,
  className,
  color = TextColor.PRIMARY,
  component,
  variant,
  ...rest
}: TextProps) {
  const isVariantComponent =
    component && Object.values(TextVariant).includes(component as unknown as TextVariant)
  const variantValue =
    variant || (isVariantComponent ? (component as unknown as TextVariant) : TextVariant.BODY1)
  const componentValue = component || (rest.href ? TextComponent.A : variantToComponent(variant))
  return (
    <StyledText
      align={align}
      as={componentValue}
      bold={bold}
      className={className}
      color={color}
      link={!!rest.onClick}
      variant={variantValue}
      {...rest}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled.p<TextProps>`
  ${(props) => props.align && `text-align: ${props.align};`}
  ${(props) => props.bold && 'font-weight: bold;'}
  ${(props) => props.color && `color: ${props.theme.palette.text[props.color]};`}
  ${(props) =>
    (props.link || props.href) &&
    css`
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: ${props.theme.palette.text.link};
      }
    `}
  ${(props) => props.variant && { ...props.theme.typography[props.variant] }}
`
