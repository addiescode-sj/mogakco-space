import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const Intro = styled.div`
  padding: 4.2rem 4rem;
  flex: 4;
  border: 1px solid #c6d0eb;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  border-radius: 20px;
`

export const TitleText = styled.h2`
  color: ${COLORS.DK_BLUE};
  font-size: 3.6rem;
  font-weight: 700;

  em {
    color: ${COLORS.MGK_BLUE};
  }
`

export const BodyText = styled.p`
  width: 100%;
  font-size: 2rem;
  margin-top: 7.7rem;
  color: ${COLORS.DK_BLUE};
  line-height: 1.5;
  word-break: keep-all;
`
