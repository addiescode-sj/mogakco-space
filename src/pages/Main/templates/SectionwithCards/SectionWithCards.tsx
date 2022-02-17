import SectionTitle from '@components/SectionTitle'
import { onSmall } from '@styles/mediaQuery'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  number?: number
  gap?: string
}

function SectionWithCards({ title, number, gap, children }: PropsWithChildren<Props>) {
  return (
    <SectionContainer gap={gap}>
      <SectionTitle title={title} number={number} />
      <SectionBody>{children}</SectionBody>
    </SectionContainer>
  )
}

const SectionContainer = styled.section<{ gap?: string }>`
  margin-top: ${({ gap }) => gap};
`

const SectionBody = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2.7rem;
  min-height: 40rem;
  gap: 4rem;

  ${onSmall} {
    flex-direction: column;
  }
`

export default SectionWithCards
