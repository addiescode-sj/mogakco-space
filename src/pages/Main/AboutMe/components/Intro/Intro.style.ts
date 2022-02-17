import { onSmall } from '@styles/mediaQuery'
import { COLORS } from '@styles/palette'
import styled from 'styled-components'

export const Intro = styled.div`
  padding: 4.2rem 4rem;
  flex: 2 2 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c6d0eb;
  box-shadow: 0px 10px 29px rgba(198, 208, 235, 0.5);
  border-radius: 20px;

  em {
    color: ${COLORS.MGK_BLUE};
  }

  ${onSmall} {
    padding: 3.2rem 3rem;
  }
`

export const TitleText = styled.h2`
  color: ${COLORS.DK_BLUE};
  font-size: 3.6rem;
  font-weight: 700;

  ${onSmall} {
    font-size: 1.6rem;
  }
`

export const BodyText = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 7.7rem;
  color: ${COLORS.DK_BLUE};
  line-height: 1.5;
  word-break: keep-all;

  .click-text {
    margin-top: auto;
    font-weight: 400;
  }

  ${onSmall} {
    font-size: 1.4rem;
  }
`
