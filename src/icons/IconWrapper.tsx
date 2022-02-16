import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

export interface IconProps {
  width?: string | number
  height?: string | number
  padding?: string
  centerize?: boolean
  color?: string
  onClick?: () => {}
}

function IconWrapper({
  centerize = true,
  children,
  onClick,
  ...props
}: PropsWithChildren<IconProps>) {
  return (
    <SvgIconWrapper onClick={onClick} centerize={centerize} {...props}>
      {children}
    </SvgIconWrapper>
  )
}

const SvgIconWrapper = styled.div<IconProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: ${({ padding }) => padding};

  ${({ centerize }) =>
    centerize &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`

export default IconWrapper
