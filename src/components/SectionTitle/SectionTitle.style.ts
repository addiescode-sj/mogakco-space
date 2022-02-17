import { onSmall } from '@styles/mediaQuery'
import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 3rem;

  ${onSmall} {
    font-size: 1.6rem;
  }
`

export const Title = styled.span`
  color: #205284;
`

export const Number = styled.span`
  margin-left: 0.8rem;
  color: ${COLORS.MGK_BLUE};
`
