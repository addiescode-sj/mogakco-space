import React from 'react'
import * as S from './AboutMe.style'
import Intro from './components/Intro'
import Skills from './components/Skills'
import SectionWithCards from '../templates/SectionwithCards'
import { useScreenContext } from '@hooks/useScreenContext'

function AboutMe() {
  const { isSmall } = useScreenContext()

  return (
    <SectionWithCards title="About Me" gap={isSmall ? '4.4rem' : '16rem'}>
      <Intro />
      <Skills />
    </SectionWithCards>
  )
}

export default AboutMe
