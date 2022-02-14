import SlidePrev from '@icons/SlidePrev'
import React, { useState } from 'react'
import SwiperClass from 'swiper'
import { SwiperSlide } from 'swiper/react'
import SectionWithCards from '../templates/SectionwithCards'
import ProjectCard from './components/ProjectCard'
import { projectInfo } from './data'
import * as S from './Projects.style'

function Projects() {
  const projectData = Array.from({ length: 7 }, () => projectInfo)
  const [slider, setSlider] = useState<SwiperClass>()

  return (
    <S.ProjectsContainer>
      <S.PrevButton onClick={() => slider?.slidePrev()}>
        <SlidePrev />
      </S.PrevButton>
      <S.NextButton onClick={() => slider?.slideNext()}>
        <SlidePrev />
      </S.NextButton>
      <SectionWithCards title="Projects" number={projectData.length} gap={'8.5rem'}>
        <S.Projects slidesPerView={'auto'} spaceBetween={20} onSwiper={setSlider}>
          {projectData.map((data, idx) => (
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
