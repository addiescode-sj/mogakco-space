import { onSmall } from '@styles/mediaQuery'
import styled from 'styled-components'

export const AboutMe = styled.div``

export const AboutMeBody = styled.div`
  display: flex;
  padding-top: 2.7rem;
  min-height: 4rem;
  gap: 4rem;

  ${onSmall} {
    flex-direction: column;
  }
`
