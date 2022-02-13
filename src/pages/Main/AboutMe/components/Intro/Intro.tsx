import { useScreenContext } from '@hooks/useScreenContext'
import React from 'react'
import * as S from './Intro.style'

function Intro() {
  const { isSmall } = useScreenContext()

  return (
    <S.Intro>
      <S.TitleText>
        Hello, {isSmall && <br />}I am <em>Addie Lee.</em>
      </S.TitleText>
      {!isSmall && (
        <S.BodyText>
          I am passionate front-end developer with 2 years experience in startups, having been also
          exposed to UI/UX and Human-computer interaction work and study experiences. I can do
          design, code, and optimize web services.
        </S.BodyText>
      )}
    </S.Intro>
  )
}

export default Intro
