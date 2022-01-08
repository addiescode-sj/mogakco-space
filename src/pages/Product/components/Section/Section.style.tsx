import { useScreenContext } from '@hooks/useScreentContext'
import React from 'react'
import styled, { css } from 'styled-components'

import { flexCenter } from '@styles/styleUtils'
import { SectionProps } from './Section'

export function Section({ children, background = 'black' }: React.PropsWithChildren<SectionProps>) {
  const { minWidth, minHeight } = useScreenContext()
  return (
    <SectionBase minSpec={{ minWidth, minHeight }} background={background}>
      {children}
    </SectionBase>
  )
}
interface ISectionProps {
  minWidth: string
  minHeight: string
}

const SectionBase = styled.div<{
  minSpec: ISectionProps
  background: string
}>`
  ${flexCenter}
  flex-direction: column;
  width: 100%;

  ${({ minSpec: { minWidth, minHeight } }) => css`
    min-width: ${minWidth};
    min-height: ${minHeight};
  `};

  background: ${({ background }) => background};
`

Section.Body = Section
