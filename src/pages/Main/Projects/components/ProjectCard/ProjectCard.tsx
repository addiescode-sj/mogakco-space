import React from 'react'
import { ProjectInfo } from '../../type'
import * as S from './ProjectCard.style'

interface Props {
  item: ProjectInfo
}

function ProjectCard({ item }: Props) {
  const { date, description, name, skills } = item

  return (
    <S.ProjectCard>
      <S.ProjectTitle>{name}</S.ProjectTitle>
      <S.ProjectDate>{date}</S.ProjectDate>
      <S.ProjectDesc>{description}</S.ProjectDesc>
      <S.Badges>{skills}</S.Badges>
      <S.ProjectDetail>Learn more</S.ProjectDetail>
    </S.ProjectCard>
  )
}

export default ProjectCard
