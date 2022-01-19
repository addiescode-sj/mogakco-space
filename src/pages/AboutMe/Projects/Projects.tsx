import React from 'react'
import { SectionTitle } from '../AboutMe.style'
import Project from './components'
import * as S from './Projects.style'

function Projects() {
  return (
    <S.ProjectsContainer>
      <SectionTitle>
        Projects<span>3</span>
      </SectionTitle>
      <S.Projects>
        <Project />
        <Project />
        <Project />
      </S.Projects>
    </S.ProjectsContainer>
  )
}

export default Projects
