import { Project } from '@atoms/Projects/model'
import React from 'react'
import * as S from './ProjectCard.style'
import Link from 'next/link'

interface Props {
  item: Project
}

function ProjectCard({ item }: Props) {
  const { date, description, title, url, skills } = item

  return (
    <S.ProjectCard>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDate>{date}</S.ProjectDate>
      <S.ProjectDesc>{description}</S.ProjectDesc>
      <S.Badges>{skills}</S.Badges>
      <Link href={url} passHref>
        <a target="_blank">
          <S.ProjectDetail>Learn more</S.ProjectDetail>
        </a>
      </Link>
    </S.ProjectCard>
  )
}

export default ProjectCard
