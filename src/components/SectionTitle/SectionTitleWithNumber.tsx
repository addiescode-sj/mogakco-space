import React from 'react'
import { SectionTitleProps } from './types'

import * as S from './SectionTitle.style'

function SectionTitleWithNumber({ title, number }: SectionTitleProps) {
  return (
    <S.SectionTitle>
      <S.Title>{title}</S.Title>
      <S.Number>{number}</S.Number>
    </S.SectionTitle>
  )
}

export default SectionTitleWithNumber
