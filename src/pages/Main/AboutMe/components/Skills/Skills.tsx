import React from 'react'
import * as S from './Skills.style'
import Image from 'next/image'
import Next from '@icons/Next'
import { useScreenContext } from '@hooks/useScreenContext'

const skillsStage = '1/3'

function Skills() {
  const { isSmall } = useScreenContext()
  return (
    <S.Skills>
      <S.SkillsTitle>
        <S.TitleText>Skills</S.TitleText>
        <S.SkillsStage>{skillsStage}</S.SkillsStage>
      </S.SkillsTitle>
      <S.SkillsStatus>Very Good</S.SkillsStatus>
      <S.SkillsLogo>
        <Image src={'/react-skills-logo.png'} layout={'fill'} objectFit="cover" />
      </S.SkillsLogo>
      <S.SkillsTab>
        <S.SkillsName>React.js</S.SkillsName>
        <S.ShowNext>
          <Next />
        </S.ShowNext>
      </S.SkillsTab>
    </S.Skills>
  )
}

export default Skills
