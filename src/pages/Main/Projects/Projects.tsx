import projectAtom from '@atoms/Projects'
import SlidePrev from '@icons/SlidePrev'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import SwiperClass from 'swiper'
import { SwiperSlide } from 'swiper/react'
import { projectInfo } from '../data/data'
import SectionWithCards from '../templates/SectionwithCards'
import ProjectCard from './components/ProjectCard'
import * as S from './Projects.style'

function Projects() {
  const [slider, setSlider] = useState<SwiperClass>()
  const setProjectList = useSetRecoilState(projectAtom)

  useEffect(() => {
    setProjectList(projectInfo)
  }, [])

  return (
    <S.ProjectsContainer>
      <S.PrevButton onClick={() => slider?.slidePrev()}>
        <SlidePrev />
      </S.PrevButton>
      <S.NextButton onClick={() => slider?.slideNext()}>
        <SlidePrev />
      </S.NextButton>
      <SectionWithCards title="Projects" number={projectInfo.length} gap={'8.5rem'}>
        <S.Projects slidesPerView={'auto'} spaceBetween={20} onSwiper={setSlider}>
          {projectInfo.map((data, idx) => (
            <SwiperSlide>
              <ProjectCard key={idx} item={data} />
            </SwiperSlide>
          ))}
        </S.Projects>
      </SectionWithCards>
    </S.ProjectsContainer>
  )
}

export default Projects
