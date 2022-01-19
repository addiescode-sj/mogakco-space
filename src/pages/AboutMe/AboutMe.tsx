import React from 'react'
import * as S from './AboutMe.style'
import Image from 'next/image'
import ContactCard from './components/Cards/Cards.Contact'
import HeroCard from './components/Cards/Cards.Hero'
import SkillsCard from './components/Cards/Cards.Skills'
import IntroMe from './components/Cards/Cards.IntroMe'
import Nav from '@pages/Nav'
import Text from '../../components/Text/Text';
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
          {isSmall && <IntroMe />}
        <S.ProfileTitle>About Me</S.ProfileTitle>
        <S.ProfileWarp>
            <ContactCard />
            <SkillsCard />
        </S.ProfileWarp>
      </S.ProfileSection>
    </S.AboutMe>
  )
}

export default AboutMe
