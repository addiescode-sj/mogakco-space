import { Project } from '@atoms/Projects/model'
import React from 'react'
import * as S from './ProjectCard.style'

interface Props {
  item: Project
}

function ProjectCard({ item }: Props) {
  const { date, description, title, skills } = item

  return (
    <S.ProjectCard>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDate>{date}</S.ProjectDate>
      <S.ProjectDesc>{description}</S.ProjectDesc>
      <S.Badges>{skills}</S.Badges>
      <S.ProjectDetail>Learn more</S.ProjectDetail>
    </S.ProjectCard>
  )
}

export default ProjectCard
