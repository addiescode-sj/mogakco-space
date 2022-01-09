import React from 'react'
import * as S from './Cards.style'
import { useScreenContext } from '@hooks/useScreentContext'

function HeroCard() {
  const { isSmall } = useScreenContext()

  if (isSmall) {
    return (
      <S.IntroduceNameWarp>
        <p>안녕하세요!</p>
        <p>프론트엔드 개발자</p>
        <p>
          <S.DeveloperName>이애디</S.DeveloperName> 입니다.
        </p>
      </S.IntroduceNameWarp>
    )
  }

  return (
    <S.HeroCardWarp>
      <div>
        <S.IntroduceNameWarp>
          <p>안녕하세요!</p>
          <p>프론트엔드 개발자</p>
          <p>
            <S.DeveloperName>이애디</S.DeveloperName> 입니다.
          </p>
        </S.IntroduceNameWarp>

        <S.IntroduceDevelopWarp>
          <S.DevelopTitle>저는 __하는 개발자입니다.</S.DevelopTitle>
          <br />
          <div>
            <p>HCI, UXUI를 수학하고 관련 분야에서 일해본 경험이 있어</p>
            <p>사용자 경험 개선에 대해 함께 고민하고,</p>
            <p>어떻게 하면 효과적으로 매 Sprint마다 MVP를</p>
            <p>만들 수 있는지 생각할 수 있는 역량을 가진 개발자.</p>
          </div>
        </S.IntroduceDevelopWarp>
      </div>

      <S.IntroduceGithubWrap>
        <S.AddImg></S.AddImg>
        <S.BtnGithub>Github</S.BtnGithub>
      </S.IntroduceGithubWrap>
    </S.HeroCardWarp>
  )
}

export default HeroCard
