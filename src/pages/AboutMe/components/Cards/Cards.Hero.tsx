import React from 'react'
import * as S from './Cards.style'
import IntroMe from './Cards.IntroMe'
import { useScreenContext } from '@hooks/useScreenContext'

function HeroCard() {
  const { isSmall } = useScreenContext()

  if (isSmall) {
    return (
      <S.HeroCardInNavWrap>
        <S.IntroduceNameWarp>
          <p>안녕하세요!</p>
          <p>프론트엔드 개발자</p>
          <p>
            <S.DeveloperName>이애디</S.DeveloperName> 입니다.
          </p>
        </S.IntroduceNameWarp>
        <S.IntroduceGithubWrap>
          <S.AddImg></S.AddImg>
          <S.BtnGithub>Github</S.BtnGithub>
        </S.IntroduceGithubWrap>
      </S.HeroCardInNavWrap>
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

        <IntroMe />
      </div>

      <S.IntroduceGithubWrap>
        <S.AddImg></S.AddImg>
        <S.BtnGithub>Github</S.BtnGithub>
      </S.IntroduceGithubWrap>
    </S.HeroCardWarp>
  )
}

export default HeroCard
