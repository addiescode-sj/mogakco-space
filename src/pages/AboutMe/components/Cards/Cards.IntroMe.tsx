import TextWithEffectScroll from '@components/TextWithEffect'
import { useScreenContext } from '@hooks/useScreenContext'
import { introText } from '@pages/AboutMe/data'
import React from 'react'
import * as S from './Cards.style'

function IntroMe() {
  const { isSmall } = useScreenContext()

  if (!isSmall) {
    return (
      <S.IntroduceMeWrap>
        {introText.split('\n').map((text) => (
          <TextWithEffectScroll size="sm" weight={'bold'}>
            {text}
          </TextWithEffectScroll>
        ))}
      </S.IntroduceMeWrap>
    )
  }
  return (
    <S.IntroduceMeWrap>
      <S.Title>저는 __하는 개발자입니다.</S.Title>
      <br />
      <S.DevelopScr>
        <pre>{introText}</pre>
      </S.DevelopScr>
    </S.IntroduceMeWrap>
  )
}

export default IntroMe
