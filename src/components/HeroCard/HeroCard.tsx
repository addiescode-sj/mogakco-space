import React from 'react'
import * as S from './HeroCard.style'
import { useScreenContext } from '@hooks/useScreenContext'
import IntroMe from '@pages/AboutMe/components/Cards/Cards.IntroMe'

function HeroCard() {
  const { isSmall } = useScreenContext()

  if (isSmall) {
    return (
      <S.HeroCardInNavWrap>
        <S.TextBox>
          <p>안녕하세요!</p>
          <p>프론트엔드 개발자</p>
          <p>
            <S.HighlightedText>이애디</S.HighlightedText> 입니다.
          </p>
        </S.TextBox>
        <S.ImageWithButtonWrap>
          <S.Img />
          <S.Button>Github</S.Button>
        </S.ImageWithButtonWrap>
      </S.HeroCardInNavWrap>
    )
  }

  return (
    <S.HeroCard>
      <div>
        <S.TextBox>
          <p>안녕하세요!</p>
          <p>프론트엔드 개발자</p>
          <p>
            <S.HighlightedText>이애디</S.HighlightedText> 입니다.
          </p>
        </S.TextBox>
        <IntroMe />
      </div>
      <S.ImageWithButtonWrap>
        <S.Img />
        <S.Button>Github</S.Button>
      </S.ImageWithButtonWrap>
    </S.HeroCard>
  )
}

export default HeroCard
