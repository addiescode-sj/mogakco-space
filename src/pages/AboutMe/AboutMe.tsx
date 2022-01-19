import React from 'react'
import * as S from './AboutMe.style'
import Image from 'next/image'
import ContactCard from './components/Cards/Cards.Contact'
import HeroCard from './components/Cards/Cards.Hero'
import SkillsCard from './components/Cards/Cards.Skills'
import Nav from '@pages/Nav'
import { useScreenContext } from '@hooks/useScreentContext'

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
        <ContactCard />
        <SkillsCard />
      </S.ProfileSection>
    </S.AboutMe>
  )
}

export default AboutMe
