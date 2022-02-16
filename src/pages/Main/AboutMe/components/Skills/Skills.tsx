import React, { useState } from 'react'
import * as S from './Skills.style'
import Image from 'next/image'
import Next from '@icons/Next'
import { skillSet } from '@pages/Main/data'
import SwiperClass, { Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SKILLS } from '@pages/Main/models'

function Skills() {
  const skillsLogoMapper = {
    [SKILLS.REACT]: '/react-skills-logo.png',
    [SKILLS.TYPESCRIPT]: '/typescript-skills-logo.png',
    [SKILLS.JAVASCRIPT]: '/js-skills-logo.png',
    [SKILLS.NEXT_JS]: '/nextjs-skills-logo.png',
    [SKILLS.REDUX]: '/redux-skills-logo.png',
    [SKILLS.HTML_AND_CSS]: '/html-css-skills-logo.png',
  }

  return (
    <S.SkillsContainer
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {skillSet.map(({ skill, expertLevel }, idx) => (
        <SwiperSlide>
          <S.Skills>
            <S.SkillsTitle>
              <S.TitleText>Skills</S.TitleText>
              <S.SkillsStage>
                {idx + 1} / {skillSet.length}
              </S.SkillsStage>
            </S.SkillsTitle>
            <S.SkillsStatus>{expertLevel}</S.SkillsStatus>
            <S.SkillsLogo>
              <Image src={skillsLogoMapper[skill]} layout={'fill'} objectFit="contain" />
            </S.SkillsLogo>
            <S.SkillsTab>
              <S.SkillsName>{skill}</S.SkillsName>
              {/* <S.ShowNext >
                <Next />
              </S.ShowNext> */}
            </S.SkillsTab>
          </S.Skills>
        </SwiperSlide>
      ))}
    </S.SkillsContainer>
  )
}

export default Skills
