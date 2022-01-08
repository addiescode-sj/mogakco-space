import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { onLarge } from '@styles/mediaQuery'

interface HolidayPortalProps {
  visible?: boolean
}

function HolidayPortal({ visible = true }: HolidayPortalProps) {
  const [isShow] = useState(visible)
  const [rootDiv, setRootDiv] = useState<Element>()

  useEffect(() => {
    const rootDivElement = document.querySelector('#root')
    if (!rootDivElement) return

    setRootDiv(rootDivElement)
  }, [])

  if (!isShow || !rootDiv) return null

  return ReactDOM.createPortal(
    <HolidayRibbon>
      <span>
        연말연시 선물을 구할 수 있는 마지막 기회. <br />
        Apple Store에서 픽업하거나 무료 배송으로 받아 보실 수 있습니다.
      </span>
      <span> 지금 쇼핑하기=► </span>
    </HolidayRibbon>,
    rootDiv
  )
}

export const HolidayRibbon = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.2rem;
  background: #e34140;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.4em;
  text-align: center;

  ${onLarge} {
    br {
      display: none;
    }
  }
`

export default HolidayPortal
