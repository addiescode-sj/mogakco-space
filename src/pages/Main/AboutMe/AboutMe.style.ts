import { onSmall } from '@styles/mediaQuery'
import styled from 'styled-components'

export const AboutMe = styled.div``

export const AboutMeBody = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2.7rem;
  min-height: 40rem;
  gap: 4rem;

  ${onSmall} {
    flex-direction: column;
  }
`
