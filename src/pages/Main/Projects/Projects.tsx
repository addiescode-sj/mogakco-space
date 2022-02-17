import projectAtom from '@atoms/Projects'
import SlidePrev from '@icons/SlidePrev'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import SwiperClass, { Swiper } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import SectionWithCards from '../templates/SectionwithCards'
import ProjectCard from './components/ProjectCard'
import * as S from './Projects.style'

function Projects() {
  const [slider, setSlider] = useState<SwiperClass>()

  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)

  const projectList = useRecoilValue(projectAtom)

  const handleChange = () => {
    if (!slider) return
    setIsLastSlide(slider.isEnd)
    setIsFirstSlide(slider.isBeginning)
  }

  return (
    <S.ProjectsContainer>
      {!isFirstSlide && (
        <S.PrevButton onClick={() => slider?.slidePrev()}>
          <SlidePrev />
        </S.PrevButton>
      )}
      {!isLastSlide && (
        <S.NextButton onClick={() => slider?.slideNext()}>
          <SlidePrev />
        </S.NextButton>
      )}
      <SectionWithCards title="Projects" number={projectList.length} gap={'8.5rem'}>
        <S.Projects
          slidesPerView={'auto'}
          spaceBetween={20}
          onSwiper={setSlider}
          onTransitionEnd={handleChange}
          isOnLastItem={isLastSlide}
        >
          {projectList.map((data, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard item={data} />
            </SwiperSlide>
          ))}
        </S.Projects>
      </SectionWithCards>
    </S.ProjectsContainer>
  )
}

export default Projects
