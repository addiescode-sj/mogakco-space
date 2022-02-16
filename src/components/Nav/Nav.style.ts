import { onSmall } from '@styles/mediaQuery'
import { COLORS } from '@styles/palette'
import { flexCenter } from '@styles/styleUtils'
import { zIndexStyle } from '@styles/zIndexStyle'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndexStyle.nav};
  padding: 5.7rem 1.7rem;

  ${onSmall} {
    padding: 2.8rem 0 0 1.7rem;
  }
`

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 98rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${zIndexStyle.nav};
`

export const NavList = styled.ul`
  display: flex;
  gap: 2.1rem;
  z-index: ${zIndexStyle.nav};
`

export const NavItem = styled.li`
  ${flexCenter};

  && {
    text-align: center;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    line-height: 1.55;
    z-index: ${zIndexStyle.nav};
  }
  span {
    margin-right: 0.7rem;
  }
`

export const Badge = styled.div`
  border-radius: 50%;
  width: 3.4rem;
  height: 3.4rem;
  background: ${COLORS.MGK_BLUE};
  text-align: center;
  margin: auto 0;
  z-index: ${zIndexStyle.nav};
`