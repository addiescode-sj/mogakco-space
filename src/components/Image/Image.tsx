import React, { useState } from 'react'
import styled from 'styled-components'
import Lazyload from 'react-lazyload'

interface ImageProps {
  alt?: string
  style?: React.CSSProperties
  className?: string
  src: string
  height?: number | string
}

function Image({ alt, style, className, src, height }: ImageProps) {
  const [error, setError] = useState(false)

  const webpSrc = src.replace(/(^\S+)\.(jpg|png|gif|bmp)$/i, '$1.webp')

  return (
    <picture onError={() => setError(true)}>
      {!error && <source type="image/webp" srcSet={webpSrc} />}{' '}
      <ImageWrapper style={style} className={className} src={src} height={height} alt={alt} />
    </picture>
  )
}

const ImageWrapper = styled.img`
  display: block;
  width: 100%;
`

export default Image

Image.Lazyload = function LazyLoadImage({ height, ...props }: ImageProps) {
  return (
    <Lazyload height={height} offset={300} once>
      <Image {...props} />
    </Lazyload>
  )
}
