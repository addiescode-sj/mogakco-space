import SectionTitleWithNumber from '@components/SectionTitle/SectionTitleWithNumber'
import React from 'react'
import Project from './components'
import * as S from './Projects.style'

function Projects() {
  return (
    <S.ProjectsContainer>
      <SectionTitleWithNumber title="Projects" number={3} />
      <S.Projects>
        <Project />
        <Project />
        <Project />
      </S.Projects>
    </S.ProjectsContainer>
  )
}

export default Projects
