import React from 'react'
import IconWrapper, { IconProps } from '../IconWrapper'

const Share: React.FC<IconProps> = ({ width = 48, height = 48 }) => {
  return (
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        aria-labelledby="shareAndroidIconTitle"
        stroke="#4F83F9"
        strokeLinecap="square"
        fill={'#4F83F9'}
        color="#4F83F9"
      >
        <path d="m16 8-8 3 8-3zm0 8-8-3 8 3z" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="18" cy="17" r="2" />
      </svg>
    </IconWrapper>
  )
}

export default Share
