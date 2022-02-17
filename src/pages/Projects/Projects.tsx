import SectionTitle from '@components/SectionTitle'
import React from 'react'
import Project from './components'
import * as S from './Projects.style'

function Projects() {
  return (
    <S.ProjectsContainer>
      <SectionTitle title="Projects" number={3} />
      <S.Projects>
        <Project />
        <Project />
        <Project />
      </S.Projects>
    </S.ProjectsContainer>
  )
}

export default Projects
