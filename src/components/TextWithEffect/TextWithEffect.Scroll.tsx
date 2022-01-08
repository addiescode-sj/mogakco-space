import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { PropsWithChildren } from 'react'
import { throttle as _throttle } from 'lodash-es'
import React from 'react'
import Text from '../Text'
import { TextProps } from '../Text/Text'

function TextWithScrollEffect({
  size,
  weight,
  children,
}: PropsWithChildren<Omit<TextProps, 'activate'>>) {
  const [activated, isActivated] = useState(false)

  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (!textRef) return

    const handleScrollY = _throttle(() => {
      const clientTop = textRef.current!!.getBoundingClientRect().top

      if (window.scrollY < clientTop) {
        isActivated(false)
      }
      if (window.scrollY >= clientTop) {
        isActivated(true)
      }
    }, 50)

    window.addEventListener('scroll', handleScrollY, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollY)
  }, [])

  return (
    <Text ref={textRef} size={size} weight={weight} activate={activated}>
      {children}
    </Text>
  )
}

export default React.memo(TextWithScrollEffect)
