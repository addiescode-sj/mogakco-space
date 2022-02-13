import React from 'react'
import * as S from './SectionTitle.style'
import { SectionTitleProps } from './types'

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <S.SectionTitle>
      <S.Title>{title}</S.Title>
    </S.SectionTitle>
  )
}

export default SectionTitle
