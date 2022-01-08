import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'
import { COLORS } from '../../styles/palette'

export const Main = styled.main``

export const Gradient = styled.div`
  position: fixed;
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

export const Header = styled.header`
  width: 100%;
  height: 45rem;
  position: relative;
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

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
