import IconWrapper, { IconProps } from '@icons/IconWrapper'
import React from 'react'

const SlidePrev = ({ width = '25', height = '44' }: IconProps) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 42 3 22 23 2" stroke="#C6D0EB" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default SlidePrev
