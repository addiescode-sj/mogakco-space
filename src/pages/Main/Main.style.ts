import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'
import { COLORS } from '../../styles/palette'

export const Main = styled.main``

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30rem;
  background: linear-gradient(180deg, #172246 0%, rgba(0, 0, 0, 0) 100%);
  z-index: ${zIndexStyle.nav - 1};

  ${onSmall} {
    transform: rotate(-180deg);
    height: 22.5rem;
    bottom: 0;
  }
`
export const Chatter = styled.p`
  position: absolute;
  top: 16rem;
  width: 100%;
  z-index: ${zIndexStyle.nav - 1};
  font-weight: 700;
  color: white;
  font-size: 6rem;
  line-height: 1.2;
  text-align: center;
  animation: toUpper 1.4s ease-in;

  ${onSmall} {
    top: 6.4rem;
    font-size: 2.8rem;
    text-align: left;
    padding: 0 1.7rem;
  }

  @keyframes toUpper {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Header = styled.header<{ timeColor: string }>`
  position: relative;
  width: 100%;
  height: 45rem;
  background: ${({ timeColor }) => timeColor};
  ${onSmall} {
    height: 22.3rem;
  }
`

export const LoginButton = styled.button`
  display: block;
  margin-top: 2rem;
  background: ${COLORS.MGK_BLUE};
  color: #fff;
`

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 22rem 11rem;

  ${onSmall} {
    padding: 0 2.4rem 6.3rem;
  }
`
