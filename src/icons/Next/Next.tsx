import IconWrapper, { IconProps } from '@icons/IconWrapper'
import React from 'react'

const Next = ({ width = '12', height = '20' }: IconProps) => {
  return (
    <IconWrapper width={width} height={height}>
      <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m1.903 2.258 7.68 7.68m-7.68 7.804 7.68-7.68"
          stroke="#C6D0EB"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </IconWrapper>
  )
}

export default Next
