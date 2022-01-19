import { onLarge, onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'

export const AboutMe = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;

  ${onLarge} {
    padding: 0 12rem;
  }
`

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

export const Header = styled.header`
  width: calc(100% + 24rem);
  height: 45rem;
  position: relative;

  ${onSmall} {
    height: 22.3rem;
    width: calc(100% + 6rem);
  }
`

export const ProfileSection = styled.section`
  width: 100%;
  display: flex;
  margin-top: 32.7rem;
  max-width: 1000px;
  gap: 4rem;
`
