import React, { forwardRef, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { onSmall } from '@styles/mediaQuery'

export interface TextProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight: 'regular' | 'bold' | number
  activate: boolean
  children: React.ReactNode
}

const textStyleProps = {
  xs: '1.2rem',
  sm: '1.8rem',
  md: '2.4rem',
  lg: '3.6rem',
  xl: '6rem',
} as const

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { size, children, ...props }: PropsWithChildren<TextProps>,
  ref
) {
  return (
    <BodyText ref={ref} size={textStyleProps[size]} {...props}>
      {children}
    </BodyText>
  )
})

export const BodyText = styled.p<{
  size: string
  weight: 'regular' | 'bold' | number
  activate: boolean
}>`
  width: 100%;

  ${({ size, weight }) => css`
    font-size: ${size};
    font-weight: ${weight};
  `}

  ${({ activate }) =>
    activate
      ? css`
          color: #fff;
          opacity: 1;
        `
      : css`
          color: #f5f5f7;
          opacity: 0.2;
        `}
        
  transition: opacity 0.2s ease-in;
  word-break: keep-all;

  ${onSmall} {
    line-height: 1.21875;
  }
`

export default Text
