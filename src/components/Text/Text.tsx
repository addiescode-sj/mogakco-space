import React, { forwardRef, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { onSmall } from '@styles/mediaQuery'

export interface TextProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight: 'regular' | 'bold'
  color?: string
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
  { size, children, color = 'white', ...props }: PropsWithChildren<TextProps>,
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
  color?: string
  activate: boolean
}>`
  width: 100%;
  color: ${({ color }) => color};

  ${({ size, weight }) => css`
    font-size: ${size};
    font-weight: ${weight};
  `}

  ${({ activate }) =>
    activate
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.2;
        `}
        
  transition: opacity 0.2s ease-in;
  word-break: keep-all;

  ${onSmall} {
    line-height: 1.21875;
  }
`

export default Text
