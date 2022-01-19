import { useScreenContext } from '@hooks/useScreenContext'
import React from 'react'
import { touchAreaStyle } from '@styles/touchAreaStyle'
import IconWrapper, { IconProps } from '../IconWrapper'

const ListIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'white' }) => {
  const { isSmall } = useScreenContext()
  const touchAreaSize = isSmall ? touchAreaStyle.small : touchAreaStyle.medium

  return (
    <IconWrapper width={touchAreaSize} height={touchAreaSize}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
      </svg>
    </IconWrapper>
  )
}

export default ListIcon
