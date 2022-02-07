import React from 'react'
import * as S from './AboutMe.style'
import Image from 'next/image'
import ContactCard from './components/Cards/Cards.Contact'
import SkillsCard from './components/Cards/Cards.Skills'
import IntroMe from './components/Cards/Cards.IntroMe'
import Nav from '@pages/Nav'
import { useScreenContext } from '@hooks/useScreenContext'
import Projects from './Projects'
import HeroCard from '@components/HeroCard'

function AboutMe() {
  const { isSmall } = useScreenContext()

  return (
    <S.AboutMe>
      <S.Gradient />
      <S.Header>
        <Nav />
        {isSmall && <HeroCard />}
        <Image src={'/Polygon15.png'} layout={'fill'} objectFit="cover" sizes="100%" />
      </S.Header>
      {!isSmall && <HeroCard />}
      <S.ProfileSection>
        {isSmall && <IntroMe />}
        <S.SectionTitle>About Me</S.SectionTitle>
        <S.ProfileWarp>
          <ContactCard />
          <SkillsCard />
        </S.ProfileWarp>
      </S.ProfileSection>
      <Projects />
    </S.AboutMe>
  )
}

export default AboutMe
