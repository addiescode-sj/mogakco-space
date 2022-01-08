import styled from 'styled-components'
import { onSmall } from '@styles/mediaQuery'
import { zIndexStyle } from '@styles/zIndexStyle'

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: ${zIndexStyle.nav};
  background-color: rgb(0, 0, 0, 0.8);
  white-space: nowrap;
  height: 4.4rem;
  color: #f5f5f7;
  font-size: 1.2rem;

  ${onSmall} {
    height: 4.8rem;
    justify-content: space-between;
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 98rem;
  list-style: none;

  && {
    padding: 0 1.5rem;
    letter-spacing: 0.02em;
    cursor: pointer;
  }
`
