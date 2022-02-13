import SectionTitle from '@components/SectionTitle/SectionTitle'
import React from 'react'
import * as S from './AboutMe.style'
import Intro from './components/Intro'
import Skills from './components/Skills'

function AboutMe() {
  return (
    <S.AboutMe>
      <SectionTitle title="About Me" />
      <S.AboutMeBody>
        <Intro />
        <Skills />
      </S.AboutMeBody>
    </S.AboutMe>
  )
}

export default AboutMe
