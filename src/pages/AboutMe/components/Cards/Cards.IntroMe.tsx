import React from 'react'
import * as S from './Cards.style'

function IntroMe() {
  return (
    <S.IntroduceMeWrap>
      <S.Title>저는 __하는 개발자입니다.</S.Title>
      <br />
      <S.Description>
        <p>
          HCI, UXUI를 수학하고 관련 분야에서 일해본 경험이 있어
          <br /> 사용자 경험 개선에 대해 함께 고민하고, <br /> 어떻게 하면 효과적으로 매 Sprint마다
          MVP를 만들 수 있는지 <br />
          생각할 수 있는 역량을 가진 개발자.
        </p>
      </S.Description>
    </S.IntroduceMeWrap>
  )
}

export default IntroMe
